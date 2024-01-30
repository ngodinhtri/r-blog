import styled from "styled-components";
import { Post } from "@/components/post";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase-config.js";
import { doc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { ImagePaths } from "@/firebase/ImagesPaths.js";
import { CATEGORY_STATUS } from "@/utils/constant.js";

const FeaturePostCardStyles = styled.div`
  & .post {
    position: relative;

    & .overlay {
      position: absolute;
      inset: 0;
      background: #000;
      opacity: 0.6;
    }
  }

  .intro {
    position: absolute;
    inset: 0;
    padding: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    color: ${(props) => props.theme.highLight};

    & .top {
      display: flex;
      justify-content: space-between;
    }

    & .post-tag {
      color: ${(props) => props.theme.headLineColor};
    }

    & .post-title {
      display: inline-flex;
      color: currentColor;
    }
  }
`;
export default function FeaturePostCard({ post }) {
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://placehold.co/600x400?text=No+image",
  );
  const {
    title,
    category: categoryId,
    author: authorId,
    createdAt,
    image,
  } = post;

  useEffect(() => {
    (async () => {
      const categoryRef = doc(db, "categories", categoryId);
      const categorySnap = await getDoc(categoryRef);
      // const authorRef = doc(db, "authors", authorId);
      // const authorSnap = await getDoc(authorRef);

      if (
        categorySnap.exists() &&
        categorySnap.data()?.status === CATEGORY_STATUS.approved
      ) {
        setCategory(categorySnap.data()?.name);
      }

      // if (authorSnap.exists()) {
      //   setAuthor(authorSnap.data()?.name);
      // }

      // Create a reference to the file we want to download
      const storage = getStorage();
      const starsRef = ref(storage, `${ImagePaths.post}/${image}`);

      // Get the download URL
      getDownloadURL(starsRef)
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          console.log(error.message);
        });
    })();
  }, []);

  return (
    <FeaturePostCardStyles>
      <Post>
        <div className="overlay"></div>
        <Post.Image size={"l"} url={imageUrl} />
        <div className="intro">
          <div className="top">
            <Post.Tag>{category || "Hot"}</Post.Tag>
            <Post.Info
              author={author}
              date={new Intl.DateTimeFormat("en-US", {
                month: "long",
                day: "numeric",
              }).format(new Date(createdAt))}
            />
          </div>
          <Post.Title>{title}</Post.Title>
        </div>
      </Post>
    </FeaturePostCardStyles>
  );
}

FeaturePostCard.propTypes = {
  post: PropTypes.object,
};
