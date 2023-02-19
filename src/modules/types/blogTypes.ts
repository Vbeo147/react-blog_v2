export type blogType = {
  id: string;
  Images: string[];
  title: string;
  content: string;
  tag: string;
  time: {
    createdAt: number;
    updatedAt: number;
    updated: boolean;
  };
};

export interface blogState {
  loading: boolean;
  error: Error | null;
  blog?: blogType[];
}
