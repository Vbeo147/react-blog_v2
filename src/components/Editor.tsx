import { ControllerRenderProps } from "react-hook-form";
import { firebaseInstance } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface EditorProps {
  content: ControllerRenderProps<any, "content">;
}

function Editor({ content }: EditorProps) {
  // const readFileAsync = (file: Blob) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       resolve(reader.result);
  //     };

  //     reader.onerror = reject;

  //     reader.readAsDataURL(file);
  //   });
  // };
  // const imageHandler = () => {
  //   const input = document.createElement("input");
  //   input.setAttribute("type", "file");
  //   input.setAttribute("accept", "image/*");
  //   input.click();
  //   input.addEventListener("change", async () => {
  //     const file = input.files ? input.files[0] : new Blob();
  //     try {
  //       const Url = (await readFileAsync(file)) as string;
  //       let storageUrl = "";
  //       const storageRef = firebaseInstance.storage().ref().child(uuidv4());
  //       const response = await storageRef.putString(Url, "data_url");
  //       storageUrl = await response.ref.getDownloadURL();
  //       const editor = quillRef.current?.getEditor();
  //       const range = editor?.getSelection()?.index as number;
  //       editor?.insertEmbed(range, "image", storageUrl);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  // };
  return (
    <CKEditor
      editor={ClassicEditor}
      data={content.value}
      onChange={(event, editor) => {
        const data = editor.getData();
        content.onChange(data);
        console.log({ event, editor, data });
      }}
    />
  );
}

export default Editor;
