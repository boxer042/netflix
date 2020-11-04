import * as React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export interface IHeaderContainerProps {
  children: React.ReactNode;
}

export default function HeaderContainer({ children }: IHeaderContainerProps) {
  return (
    <Header bg={true}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
