// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { getPosts } from "../apis/post";
import PostCard from "../components/PostCard";
import { Link } from "react-router";

const Home = () => {
  const [postList, setPostList] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts({ size: 30 });
        setPostList(data.posts); // posts 배열은 data.posts 안에!
      } catch (error) {
        console.error("게시글 목록을 불러오는 데 실패했습니다.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>게시판</h1>
      <Link to={`/member-code`}>회원 코드 발급</Link>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {postList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;