import * as React from "react";
import {
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from "./styles/jumbotron";

export interface IJumbotronProps {
  children: React.ReactNode;
  direction: string;
}

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}: IJumbotronProps) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronContainer({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronContainer({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronContainer({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronContainer({ ...restProps }) {
  return <Image {...restProps} />;
};
