import { ControllerRenderProps } from "react-hook-form";
import { firebaseInstance } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor, Plugin } from "@ckeditor/ckeditor5-core";
import {
  FileLoader,
  UploadAdapter,
} from "@ckeditor/ckeditor5-upload/src/filerepository";

interface EditorProps {
  content: ControllerRenderProps<any, "content">;
  SetImgLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditorC({ content, SetImgLoading }: EditorProps) {
  const readFileAsync = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  };
  function uploadAdapter(loader: FileLoader): UploadAdapter {
    SetImgLoading(true);
    return {
      abort() {},
      upload: () => {
        return new Promise((resolve, reject) => {
          let storageUrl = "";
          loader.file
            .then(async (file) => {
              const Url = (await readFileAsync(file as Blob)) as string;
              const storageRef = firebaseInstance
                .storage()
                .ref()
                .child(uuidv4());
              const response = await storageRef.putString(Url, "data_url");
              storageUrl = await response.ref.getDownloadURL();
            })
            .then(() => {
              resolve({
                default: storageUrl,
              });
              SetImgLoading(false);
            })
            .catch((err) => {
              reject(err);
              SetImgLoading(false);
            });
        });
      },
    };
  }
  function uploadPlugin(editor: Editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{ extraPlugins: [uploadPlugin] }}
      data={content.value}
      onChange={(event, editor) => {
        const data = editor.getData();
        content.onChange(data);
        console.log({ event, editor, data });
      }}
    />
  );
}

export default EditorC;
