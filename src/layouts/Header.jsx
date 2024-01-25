import styled from "styled-components";
import logo from "@/assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@/components/input";
import { SearchIconSVG } from "@/assets/icons";
import { useAuth } from "@/contexts/useAuth.jsx";
import { Button } from "@/components/button";
import { LoadingSpinner } from "@/components/loading/index.js";
import { AccountMenu } from "@/components/menu/index.js";
import { useRef } from "react";

const HeaderStyles = styled.header`
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
  align-items: center;
  gap: 20px;

  .username {
    cursor: pointer;

    span {
      color: ${(props) => props.theme.tertiary};
      font-weight: 700;
    }
  }
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
  const { user, isLoading } = useAuth();
  const accountMenuRef = useRef(null);

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
        <Input placeholder={"Search post"}>
          <SearchIconSVG />
        </Input>
        {isLoading ? (
          <LoadingSpinner />
        ) : !user ? (
          <Button
            to={"/sign-up"}
            style={{ width: "190px", fontSize: "18px" }}
            className={"button"}
          >
            Sign Up
          </Button>
        ) : (
          <>
            <h3 className={"username"} id={"greeting"}>
              Welcome, <span>{user.displayName}</span>
            </h3>
            <AccountMenu anchorId={"greeting"} />
          </>
        )}
      </HeaderRightStyles>
    </HeaderStyles>
  );
}
