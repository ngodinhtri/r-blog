import styled from "styled-components";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/button/index.js";
import logo from "@/assets/logo.svg";
import { ArchiveBoxSVG, BookSVG, CubeSVG, UserSVG } from "@/assets/icons";
import { v4 as uuidv4 } from "uuid";
import { signOut } from "@/firebase/firebase-config.js";

const ManagePagesLayoutStyles = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) 0;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 40px;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;

  header {
    grid-column: 1 / span 4;
    grid-row: 1 / span 1;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 20px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px 0;

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  aside {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    background: ${(props) => props.theme.mainColor};
    border-radius: 0 8px 8px 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0 10px 50px;
    padding: 20px 20px 20px 30px;
    height: fit-content;

    .logo {
      display: flex;
      align-items: center;
      gap: 30px;
      height: 50px;

      &-image {
        width: 50px;
        height: 50px;
        object-fit: cover;
      }
    }

    .menu {
      margin-top: 20px;

      &-item {
        color: ${(props) => props.theme.textColor};
        display: flex;
        align-items: center;
        gap: 30px;
        border-radius: 8px;
        padding: 10px 8px;
        margin-bottom: 20px;

        &.active {
          background: ${(props) => props.theme.bgColor};
        }

        .icon {
          width: 40px;
          height: 40px;
        }
      }

      button &-item {
      }
    }
  }

  main {
    grid-column: 2 / span 3;
    grid-row: 2 / span 1;
    overflow-y: auto;
    padding: 20px;
  }
`;

const menuList = [
  {
    title: "Dashboard",
    to: "dashboard",
    icon: <CubeSVG />,
  },
  {
    title: "Post",
    to: "post",
    icon: <BookSVG />,
  },
  {
    title: "Category",
    to: "category",
    icon: <ArchiveBoxSVG />,
  },
  {
    title: "User",
    to: "user",
    icon: <UserSVG />,
  },
];

export function ManagePagesLayout() {
  return (
    <ManagePagesLayoutStyles>
      <header>
        <Button to={"/manage/add-post"}>Write new post</Button>
        <div className="avatar">
          <img
            src="https://plus.unsplash.com/premium_photo-1698161179423-f4ea29053074?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="avatar"
          />
        </div>
      </header>
      <aside>
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" className={"logo-image"} />
          </Link>
          <h3>R - Blog</h3>
        </div>
        <div className={"menu"}>
          {menuList.map((menuItem) => (
            <NavLink
              to={`/manage/${menuItem.to}`}
              key={uuidv4()}
              className={isActiveMenuItem}
            >
              <div className="icon">{menuItem.icon}</div>
              <h4>{menuItem.title}</h4>
            </NavLink>
          ))}
        </div>
        {/*  Logout*/}
        <Button onClick={signOut}>Log out</Button>
      </aside>
      <main>
        <Outlet />
      </main>
    </ManagePagesLayoutStyles>
  );
}

function isActiveMenuItem({ isActive }) {
  return isActive ? "active menu-item" : " menu-item";
}
