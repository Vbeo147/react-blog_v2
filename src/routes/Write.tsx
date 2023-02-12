import { useForm, SubmitHandler } from "react-hook-form";
import Editor from "../components/Editor";
import { useControlForm } from "../hooks/useControlForm";
import { IForm } from "../interfaces/FormTypes";

function Write() {
  const { handleSubmit, control, reset } = useForm<IForm>({
    defaultValues: { title: "", content: "", tag: "" },
  });
  const { title, content, tag } = useControlForm(control);
  const onSubmit: SubmitHandler<IForm> = ({ title, content, tag }) => {
    if (title && tag) {
      console.log(title, content, tag);
      reset({ title: "", content: "", tag: "" });
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
        <Editor content={content} />
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
      <button type="submit">Enter</button>
    </form>
  );
}

export default Write;
