import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Editor from "../components/EditorC";
import { dbService } from "../firebase";
import { useControlForm } from "../hooks/useControlForm";
import { IForm } from "../interfaces/FormTypes";
import { blogType } from "../modules/types/blogTypes";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState } from "recoil";
import { ImageArray } from "../atoms/Image";

function Write() {
  const [Uploading, SetUploading] = useState(false);
  const [Image, setImage] = useRecoilState(ImageArray);
  const navigate = useNavigate();
  const { handleSubmit, control, reset } = useForm<IForm>({
    defaultValues: { title: "", content: "", tag: "" },
  });
  const { title, content, tag } = useControlForm(control);
  const onSubmit: SubmitHandler<IForm> = async ({ title, content, tag }) => {
    if (title && tag) {
      const currentId = uuidv4();
      const blogObj: blogType = {
        id: currentId,
        Images: [...Image],
        title,
        content,
        tag,
        time: {
          createdAt: Date.now(),
          updatedAt: Date.now(),
          updated: false,
        },
      };
      await dbService.doc(`blog/${currentId}`).set(blogObj);
      setImage([]);
      reset({ title: "", content: "", tag: "" });
      navigate("/");
    }
  };
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
      <button disabled={Uploading} type="submit">
        Enter
      </button>
    </form>
  );
}

export default Write;
