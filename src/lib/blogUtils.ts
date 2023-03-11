import { blogType } from "../modules/types/blogTypes";

export type findType = blogType | undefined;

export const findBlog = (blog?: blogType[], id?: string): findType =>
  blog?.find((findItem) => findItem.id === id) as findType;

export const filterBlog = (blog?: blogType[], tag?: string): blogType[] =>
  blog?.filter((filterItem) => filterItem.tag === tag) as blogType[];
