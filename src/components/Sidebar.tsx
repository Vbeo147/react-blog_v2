import { useState } from "react";
import { dbService } from "../firebase";
import { useAppSelector } from "../modules/rootReducer";

function Sidebar() {
  const [value, setValue] = useState("");
  const { categoryReducer } = useAppSelector((state) => state);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dbService.doc(`categories/${value}`).set({});
    setValue("");
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          value={value}
          onChange={onChange}
          style={{
            width: "80%",
          }}
          type="text"
          placeholder="category"
        />
        <button type="submit">Enter</button>
      </form>
      {categoryReducer.categories?.map((item, index) => (
        <div key={index}>{item.id}</div>
      ))}
    </div>
  );
}

export default Sidebar;
