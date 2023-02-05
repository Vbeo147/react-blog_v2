import { Control, useController } from "react-hook-form";

export function useControlForm(control: Control<any>) {
  const { field: title } = useController({
    name: "title",
    control: control,
  });
  const { field: content } = useController({
    name: "content",
    control: control,
  });
  const { field: tag } = useController({
    name: "tag",
    control: control,
  });
  return { title, content, tag };
}
