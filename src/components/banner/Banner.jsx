import styled from "styled-components";
import banner from "@/assets/images/banner.png";
import PropTypes from "prop-types";
import { Button } from "@/components/button";

const BannerStyles = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "500px"};
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.textColor};
  padding: 50px;
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 40px;
  border-radius: 8px;

  h2 {
    font-size: 48px;
    font-weight: 700;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  p {
    text-align: justify-all;
    font-size: 16px;
    font-weight: 400;
  }

  .banner-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 1;
  }

  .banner-image {
    width: 400px;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export function Banner({ title, desc, imgUrl }) {
  return (
    <BannerStyles>
      <div className={"banner-content"}>
        <h2>R - Blogging</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          asperiores commodi cum ex iste nam nostrum, perspiciatis possimus
          saepe voluptate? Accusamus accusantium aliquid blanditiis doloremque
          eius maxime, minus pariatur veniam.
        </p>
        <Button to={"/"} className={"button"}>
          Get started
        </Button>
      </div>
      <div className="banner-image">
        <img src={imgUrl ?? banner} alt="banner" />
      </div>
    </BannerStyles>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  imgUrl: PropTypes.string,
};
