import { blogType } from "../modules/types/blogTypes";

export type findType = blogType | undefined;

export const findBlog = (blog?: blogType[], id?: string): findType =>
  blog?.find((currentItem) => currentItem.id === id) as findType;
