import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import EditorC from "../components/EditorC";
import { dbService } from "../firebase";
import { useControlForm } from "../hooks/useControlForm";
import { IForm } from "../interfaces/FormTypes";
import { blogType } from "../modules/types/blogTypes";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { findBlog } from "../lib/blogUtils";
import { useAppSelector } from "../modules/rootReducer";

function Write() {
  const [Uploading, SetUploading] = useState(false);
  const { blogReducer, categoryReducer, authReducer } = useAppSelector(
    (state) => state
  );
  const { handleSubmit, control, reset } = useForm<IForm>({
    defaultValues: { title: "", content: "", tag: "" },
  });
  const { id } = useParams();
  const currentBlog = findBlog(blogReducer.blog, id);
  const PrevPage = localStorage.getItem("page");
  const navigate = useNavigate();
  const { title, content, tag } = useControlForm(control);
  const resetValue = () => reset({ title: "", content: "", tag: "" });
  const onSubmit: SubmitHandler<IForm> = async ({ title, content, tag }) => {
    SetUploading(true);
    if (title && tag) {
      if (currentBlog) {
        const blogUpdate: blogType = {
          ...currentBlog,
          title,
          content,
          time: {
            updatedAt: Date.now(),
            updated: true,
          },
        };
        await dbService.doc(`blog/${id}`).update(blogUpdate);
      } else {
        const currentId = nanoid();
        const blogCreate: blogType = {
          id: currentId,
          title,
          content,
          tag,
          time: {
            updatedAt: Date.now(),
            updated: false,
          },
        };
        await dbService.doc(`blog/${currentId}`).set(blogCreate);
      }
    }
    resetValue();
    SetUploading(false);
    navigate("/");
  };
  useEffect(() => {
    if (currentBlog)
      reset({
        title: currentBlog.title,
        content: currentBlog.content,
        tag: currentBlog.tag,
      });
    if (!id) resetValue();
  }, [id, currentBlog]);
  useEffect(() => {
    if (
      authReducer.auth.data?.providerData[0]?.uid !==
      import.meta.env.VITE_ADMIN_ID
    )
      navigate("/");
  }, [authReducer.auth.data]);
  return (
    <form className="write-flex" onSubmit={handleSubmit(onSubmit)}>
      <div className="write-input">
        <input
          placeholder="제목을 입력해주세요"
          value={title.value}
          onChange={(e) => title.onChange(e.target.value)}
        />
        {!currentBlog && (
          <select
            value={tag.value}
            onChange={(e) => tag.onChange(e.target.value)}
          >
            {!tag.value && <option value="">태그를 선택해주세요</option>}
            {categoryReducer.categories?.map((item, index) => (
              <option key={index} value={item.id}>
                {item.id}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="write-editor">
        <EditorC content={content} SetUploading={SetUploading} />
      </div>
      <div className="write-submit">
        <button disabled={Uploading} type="submit">
          Enter
        </button>
        <button type="button" onClick={() => navigate(`/page/${PrevPage}`)}>
          Close
        </button>
      </div>
    </form>
  );
}

export default Write;
