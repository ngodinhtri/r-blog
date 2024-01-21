import styled from "styled-components";
import PostCard from "@/components/post/PostCard.jsx";
import { Heading } from "@/components/heading/index.js";
import PostChapter from "@/components/post/PostChapter.jsx";
import PostImage from "@/components/post/PostImage.jsx";
import PostQuote from "@/components/post/PostQuote.jsx";
import Callout from "@/components/callout/Callout.jsx";

const PostDetailPageStyles = styled.div`
  .container {
    width: 800px;
    max-width: 800px;
  }

  .detail-image {
    margin-top: 20px;
  }

  .horizon-posts {
    display: flex;
    gap: 40px;
  }
`;

export function PostDetailPage() {
  return (
    <PostDetailPageStyles>
      <PostCard sizeImage={"xl"} sizeTitle={"xl"} direction={"horizon"} />

      <div className="container">
        <PostChapter title={"Chương 1"}>
          Gastronomy atmosphere set aside. Slice butternut cooking home.
          Delicious romantic undisturbed raw platter will meld. Thick Skewers
          skillet natural, smoker soy sauce wait roux. slices rosette bone-in
          simmer precision alongside baby leeks. Crafting renders aromatic
          enjoyment, then slices taco. Minutes undisturbed cuisine lunch
          magnificent mustard curry. Juicy share baking sheet pork. Meals ramen
          rarities selection, raw pastries richness magnificent atmosphere.
          Sweet soften dinners, cover mustard infused skillet, Skewers on
          culinary experience. Juicy meatballs brisket slammin' baked shoulder.
          Juicy smoker soy sauce burgers brisket. polenta mustard hunk greens.
          Wine technique snack skewers chuck excess. Oil heat slowly. slices
          natural delicious, set aside magic tbsp skillet, bay leaves brown
          centerpiece. fruit soften edges frond slices onion snack pork steem on
          wines excess technique cup; Cover smoker soy sauce fruit snack. Sweet
          one-dozen scrape delicious, non sheet raw crunch mustard. Minutes
          clever slotted tongs scrape, brown steem undisturbed rice. Food
          qualities braise chicken cuts bowl through slices butternut snack.
          Tender meat juicy dinners. One-pot low heat plenty of time adobo fat
          raw soften fruit. sweet renders bone-in marrow richness kitchen,
          fricassee basted pork shoulder. Delicious butternut squash hunk.
          Flavor centerpiece plate, delicious ribs bone-in meat, excess chef
          end. sweet effortlessly pork, low heat smoker soy sauce flavor meat,
          rice fruit fruit. Romantic fall-off-the-bone butternut chuck rice
          burgers.
          <PostImage
            className={"detail-image"}
            size={"xl"}
            url={
              "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <PostQuote>
            Gastronomy atmosphere set aside. Slice butternut cooking home.
          </PostQuote>
        </PostChapter>
        <PostChapter title={"Chương 2"}>
          Gastronomy atmosphere set aside. Slice butternut cooking home.
          Delicious romantic undisturbed raw platter will meld. Thick Skewers
          skillet natural, smoker soy sauce wait roux. slices rosette bone-in
          simmer precision alongside baby leeks. Crafting renders aromatic
          enjoyment, then slices taco. Minutes undisturbed cuisine lunch
          magnificent mustard curry. Juicy share baking sheet pork. Meals ramen
          rarities selection, raw pastries richness magnificent atmosphere.
          Sweet soften dinners, cover mustard infused skillet, Skewers on
          culinary experience. Juicy meatballs brisket slammin' baked shoulder.
          Juicy smoker soy sauce burgers brisket. polenta mustard hunk greens.
          Wine technique snack skewers chuck excess. Oil heat slowly. slices
          natural delicious, set aside magic tbsp skillet, bay leaves brown
          centerpiece. fruit soften edges frond slices onion snack pork steem on
          wines excess technique cup; Cover smoker soy sauce fruit snack. Sweet
          one-dozen scrape delicious, non sheet raw crunch mustard. Minutes
          clever slotted tongs scrape, brown steem undisturbed rice. Food
          qualities braise chicken cuts bowl through slices butternut snack.
          Tender meat juicy dinners. One-pot low heat plenty of time adobo fat
          raw soften fruit. sweet renders bone-in marrow richness kitchen,
          fricassee basted pork shoulder. Delicious butternut squash hunk.
          Flavor centerpiece plate, delicious ribs bone-in meat, excess chef
          end. sweet effortlessly pork, low heat smoker soy sauce flavor meat,
          rice fruit fruit. Romantic fall-off-the-bone butternut chuck rice
          burgers.
        </PostChapter>

        <Callout
          title={"Front end"}
          urlImage={
            "https://plus.unsplash.com/premium_photo-1698161179423-f4ea29053074?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          eaque eius eveniet harum minus praesentium ut voluptate! Aperiam
          commodi debitis ducimus eum hic illo reiciendis rerum soluta
          temporibus velit. Saepe.
        </Callout>
      </div>

      <Heading>Bài viết liên quan</Heading>
      <div className="horizon-posts">
        <PostCard sizeImage={"sm"} />
        <PostCard sizeImage={"sm"} />
        <PostCard sizeImage={"sm"} />
        <PostCard sizeImage={"sm"} />
      </div>
    </PostDetailPageStyles>
  );
}
