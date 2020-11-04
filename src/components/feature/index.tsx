import React from "react";
import { Container, Title, SubTitle } from "./styles/feature";

export interface IFeatureProps {
  children: React.ReactNode;
}

export default function Feature({ children, ...restProps }: IFeatureProps) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({
  children,
  ...restProps
}: IFeatureProps) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({
  children,
  ...restProps
}: IFeatureProps) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
