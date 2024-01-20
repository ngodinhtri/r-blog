import styled from "styled-components";
import { Header } from "@/layouts/index.js";
import { Banner } from "@/components/banner";
import { useEffect } from "react";

const HomeStyles = styled.div``;

export default function HomePage() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <HomeStyles>
      <Header />
      <Banner />
    </HomeStyles>
  );
}
