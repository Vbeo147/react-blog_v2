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
  const { blog } = useAppSelector((state) => state.blogReducer);
  const { id } = useParams();
  const currentBlog = findBlog(blog, id);
  const navigate = useNavigate();
  const { handleSubmit, control, reset } = useForm<IForm>({
    defaultValues: { title: "", content: "", tag: "" },
  });
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
            <option value="test1">test1</option>
            <option value="test2">test2</option>
            <option value="test3">test3</option>
          </select>
        </div>
      )}
      <button disabled={Uploading} type="submit">
        Enter
      </button>
    </form>
  );
}

export default Write;
