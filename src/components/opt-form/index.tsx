import React from "react";
import { Container, Input, Break, Button, Text } from "./styles/opt-form";

export interface IOptFormProps {
  children: React.ReactNode;
}

export default function OptForm({ children, ...restProps }: IOptFormProps) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({
  children,
  ...restProps
}: IOptFormProps) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }: IOptFormProps) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
