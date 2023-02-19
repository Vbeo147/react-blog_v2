import { useAppSelector } from "../modules/rootReducer";

function Home() {
  const { blogReducer } = useAppSelector((state) => state);
  return (
    <>
      <div className="root-home-width">
        {blogReducer.loading
          ? "Loading..."
          : blogReducer.blog?.map((item) => (
              <div key={item.id}>{item.title}</div>
            ))}
      </div>
    </>
  );
}

export default Home;
