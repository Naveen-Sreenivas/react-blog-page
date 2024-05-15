import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "./Context/DataContext";

const Home = () => {
  const { searchResults, isLoading, fetchError } = useContext(DataContext);
  const posts = searchResults;
  return (
    <main className="Home">
      {isLoading && <p className="statusMgs">Loading....</p>}

      {!isLoading && fetchError && (
        <p style={{ color: "red" }} className="statusMgs">
          {fetchError}
        </p>
      )}

      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className="statusMsg">No posts to display.</p>
        ))}
    </main>
  );
};

export default Home;
