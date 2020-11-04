import * as React from "react";
import { Background, Container, Logo, ButtonLink } from "./styles/header";
import { Link as ReachRouterLink } from "react-router-dom";

export interface IHeaderProps {
  bg: boolean;
  children: any;
}

export default function Header({
  bg = true,
  children,
  ...restProps
}: IHeaderProps) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }: any) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }: any) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
