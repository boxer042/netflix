import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from "./styles/footer";

export interface IFooterProps {
  children: React.ReactNode;
}

export default function Footer({ children, ...restProps }: IFooterProps) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }: IFooterProps) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({
  children,
  ...restProps
}: IFooterProps) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({
  children,
  href,
  ...restProps
}: {
  children: React.ReactNode;
  href: any;
}) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }: IFooterProps) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }: IFooterProps) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
