import FeaturePostCard from "@/components/post/FeaturePostCard.jsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase-config.js";

const FeaturePostsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 50px;
`;

export default function FeaturePostsHomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function getFeaturePosts() {
      const postsQuery = query(
        collection(db, "posts"),
        where("hot", "==", true),
        limit(3),
      );

      const newPosts = [];

      const postQuerySnapshot = await getDocs(postsQuery);

      postQuerySnapshot.forEach((doc) => {
        newPosts.push({
          ...doc.data(),
          id: doc.id,
          createdAt: doc.data()?.createdAt.seconds,
        });
      });

      setPosts(newPosts);
    })();
  }, []);

  console.log(posts);

  return (
    <FeaturePostsStyles>
      {posts &&
        posts.map((post) => <FeaturePostCard key={post.id} post={post} />)}
    </FeaturePostsStyles>
  );
}
