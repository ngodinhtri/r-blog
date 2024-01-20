import styled from "styled-components";
import logo from "@/assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@/components/input/index.js";
import { SearchIconSVG } from "@/assets/icons/index.js";

const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  height: 54px;
  color: ${(props) => props.theme.headLineColor};
  margin: 20px 0;

  .logo {
    width: 54px;
    height: 54px;
  }
`;

const NavStyles = styled.div`
  display: flex;

  nav {
    display: flex;
    align-items: center;
    margin-left: 10px;
    gap: 40px;
  }

  a {
    color: currentColor;
    font-size: 18px;
    font-weight: 500;
  }
`;

const HeaderRightStyles = styled.div`
  display: flex;
  gap: 20px;
`;

const navItemList = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/",
    title: "Blog",
  },
  {
    url: "/",
    title: "Contact",
  },
];

export function Header() {
  return (
    <HeaderStyles>
      <NavStyles>
        <Link to={"/"}>
          <img src={logo} alt="logo" className={"logo"} />
        </Link>
        <nav>
          {navItemList.map((navItem) => (
            <NavLink to={navItem.url} key={uuidv4()}>
              {navItem.title}
            </NavLink>
          ))}
        </nav>
      </NavStyles>
      <HeaderRightStyles>
        <Input placeholder={"Search posts"}>
          <SearchIconSVG />
        </Input>
        <Link
          to={"/sign-up"}
          style={{ width: "190px", fontSize: "18px" }}
          className={"button"}
        >
          Sign Up
        </Link>
      </HeaderRightStyles>
    </HeaderStyles>
  );
}
