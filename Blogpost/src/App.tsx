import {useState, useEffect} from "react";
import BlogPosts, {BlogPost} from "./components/BlogPosts";
import {GET} from "./util/http";
import image from "./assets/data-fetching.png";

type FetchedDataType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [posts, setPosts] = useState<BlogPost[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = (await GET(
        "https://jsonplaceholder.typicode.com/posts"
      )) as FetchedDataType[];
      const blogs: BlogPost[] = data.map((blog) => {
        return {id: blog.id, title: blog.title, text: blog.body};
      });
      setPosts(blogs);
    };
    fetchData();
  }, []);

  return (
    <main>
      <img src={image} alt="image of data fetching" />
      {posts && <BlogPosts posts={posts} />}
    </main>
  );
}

export default App;
