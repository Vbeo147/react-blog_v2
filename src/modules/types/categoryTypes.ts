export interface categoryState {
  loading: boolean;
  error: Error | null;
  categories?: { id: string }[];
}
