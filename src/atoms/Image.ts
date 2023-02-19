import { atom } from "recoil";

export const ImageArray = atom({
  key: "ImageArray",
  default: [] as string[],
});
