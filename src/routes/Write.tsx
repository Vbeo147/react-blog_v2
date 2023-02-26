import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Editor from "../components/EditorC";
import { dbService } from "../firebase";
import { useControlForm } from "../hooks/useControlForm";
import { IForm } from "../interfaces/FormTypes";
import { blogType } from "../modules/types/blogTypes";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { useRecoilState } from "recoil";
import { ImageArray } from "../atoms/Image";
import { findBlog } from "../lib/blogUtils";
import { useAppSelector } from "../modules/rootReducer";

function Write() {
  const [Uploading, SetUploading] = useState(false);
  const [Image, setImage] = useRecoilState(ImageArray);
  const { blogReducer, categoryReducer } = useAppSelector((state) => state);
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
    if (title && tag) {
      if (currentBlog) {
        const blogUpdate: blogType = {
          ...currentBlog,
          title,
          content,
          time: {
            ...currentBlog.time,
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
          Images: [...Image],
          time: {
            createdAt: Date.now(),
            updatedAt: Date.now(),
            updated: false,
          },
        };
        await dbService.doc(`blog/${currentId}`).set(blogCreate);
      }
    }
    setImage([]);
    resetValue();
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
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          placeholder="title"
          value={title.value}
          onChange={(e) => title.onChange(e.target.value)}
        />
        <Editor content={content} SetUploading={SetUploading} />
      </div>
      {!currentBlog && (
        <div>
          <select
            value={tag.value}
            onChange={(e) => tag.onChange(e.target.value)}
          >
            {!tag.value && <option value="">select this tag</option>}
            {categoryReducer.categories?.map((item, index) => (
              <option key={index} value={item.id}>
                {item.id}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
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
