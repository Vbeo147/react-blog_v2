import { useForm, SubmitHandler } from "react-hook-form";
import { IForm } from "../interfaces/FormTypes";

function Write() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
    reset({ title: "", content: "" });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          autoComplete="off"
          placeholder="title"
          {...register("title", { required: true })}
        />
        <input
          autoComplete="off"
          placeholder="content"
          {...register("content")}
        />
      </div>
      <div>
        <select {...register("tag", { required: true })}>
          <option>test1</option>
          <option>test2</option>
          <option>test3</option>
        </select>
      </div>
      <button type="submit">Enter</button>
    </form>
  );
}

export default Write;
