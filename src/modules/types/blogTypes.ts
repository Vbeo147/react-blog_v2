export type blogType = {
  id: string;
  title: string;
  content: string;
  tag: string;
  time: {
    createdAt: Date;
    updatedAt: Date;
    updated: boolean;
  };
};

export interface blogState {
  loading: boolean;
  error: Error | null;
  blog?: blogType[];
}
