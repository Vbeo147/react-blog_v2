import { Control, useController } from "react-hook-form";

export function useControlForm(control: Control<any>) {
  const { field: title } = useController({
    name: "title",
    control: control,
    rules: { required: true },
  });
  const { field: content } = useController({
    name: "content",
    control: control,
  });
  const { field: tag } = useController({
    name: "tag",
    control: control,
    rules: { required: true },
  });
  return { title, content, tag };
}
