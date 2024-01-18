import styled from "styled-components";
import logo from "@/assets/logo.svg";

const SignUpPageStyles = styled.div`
  height: 100dvh;
  padding: 40px;

  .logo {
    margin: 0 auto;
    width: 150px;
    height: 150px;
  }

  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 600;
  }

  form {
    max-width: 800px;
    margin: 0 auto;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-size: 20px;
      font-weight: 600;
    }

    input {
      border: transparent 2px solid;
      padding: 15px 25px;
      font-weight: 500;
      border-radius: 8px;
      background: ${(props) => props.theme.mainColor};
      color: ${(props) => props.theme.headLineColor};

      &:focus {
        border-color: ${(props) => props.theme.strokeColor};
      }
    }
  }
`;

export default function SignUpPage() {
  return (
    <SignUpPageStyles>
      <img src={logo} alt="logo" className={"logo"} />
      <h1>R - Blog</h1>
      <form>
        <div className="field">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
          />
        </div>
      </form>
    </SignUpPageStyles>
  );
}
