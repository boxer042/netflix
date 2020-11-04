import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from "./styles/accordion";

export interface IAccordionProps {
  children: React.ReactNode;
}

type ToggleState = {
  toggleShow: boolean;
  setToggleShow: any;
};
const ToggleContext = createContext<ToggleState | null>(null);

export default function Accordion({ children, ...restProps }: IAccordionProps) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionTitle({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionTitle({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  const [toggleShow, setToggleShow] = useState<boolean>(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>;
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionTitle({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  const { toggleShow, setToggleShow }: any = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  const { toggleShow }: any = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
