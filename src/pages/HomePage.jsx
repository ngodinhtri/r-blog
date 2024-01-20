import styled from "styled-components";
import { Header } from "@/layouts/index.js";
import { Banner } from "@/components/banner";
import { useEffect } from "react";
import FeaturePostCard from "@/components/post/FeaturePostCard.jsx";
import PostCard from "@/components/post/PostCard.jsx";

const HomeStyles = styled.div`
  padding-bottom: 100px;

  .home-title {
    margin-top: 60px;
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: 600;
  }

  .feature {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 50px;
  }

  .newest {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
    gap: 40px;

    &-post {
      grid-row: 1 / span 2;
      grid-column: 1 / span 2;
    }

    &-vertical-posts {
      grid-row: 1 / span 2;
      grid-column: 3 / span 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px 30px;
      background: ${(props) => props.theme.mainColor};
      border-radius: 8px;
    }

    &-horizon-posts {
      grid-row: 3 / span 1;
      grid-column: 1 / span 4;
      display: flex;
      gap: 40px;
    }
  }
`;

export default function HomePage() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <HomeStyles>
      <Header />
      <Banner />
      <h2 className={"home-title"}>Feature</h2>
      <div className="feature">
        <FeaturePostCard />
        <FeaturePostCard />
        <FeaturePostCard />
      </div>
      <h2 className={"home-title"}>Newest update</h2>
      <div className="newest">
        <div className="newest-post">
          <PostCard sizeTitle={"l"} sizeImage={"xl"} />
        </div>
        <div className="newest-vertical-posts">
          <PostCard sizeImage={"sm"} direction={"horizon"} />
          <PostCard sizeImage={"sm"} direction={"horizon"} />
          <PostCard sizeImage={"sm"} direction={"horizon"} />
        </div>
        <div className="newest-horizon-posts">
          <PostCard sizeImage={"sm"} />
          <PostCard sizeImage={"sm"} />
          <PostCard sizeImage={"sm"} />
          <PostCard sizeImage={"sm"} />
        </div>
      </div>
    </HomeStyles>
  );
}
