import { useAppSelector } from "../modules/rootReducer";

function Category() {
  const { categoryReducer } = useAppSelector((state) => state);
  return (
    <>
      {!categoryReducer.loading ? (
        <ul>
          {categoryReducer.categories?.map((item) => (
            <li key={item.id}>{item.id}</li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Category;
