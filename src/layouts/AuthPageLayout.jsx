import logo from "@/assets/logo.svg";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useAuth } from "@/contexts/AuthContext.jsx";
import { Navigate } from "react-router-dom";

const AuthPageStyles = styled.div`
  max-width: 800px;
  width: 800px;
  height: 100dvh;
  padding: 40px;
  margin: 0 auto;

  .logo {
    margin: 0 auto;
    width: 100px;
    height: 100px;
  }

  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 600;
  }
`;

export function AuthPageLayout({ children }) {
  const { user } = useAuth();

  return (
    <>
      {user && <Navigate to={"/"} replace={true} />}

      <AuthPageStyles>
        <img src={logo} alt="logo" className={"logo"} />
        <h1>R - Blog</h1>
        {children}
      </AuthPageStyles>
    </>
  );
}

AuthPageLayout.propTypes = {
  children: PropTypes.node,
};
