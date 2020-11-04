import * as React from "react";
import FaqsContainer from "../containers/FaqsContainer";
import FooterContainer from "../containers/FooterContainer";
import JumbotronContainer from "../containers/jumbotronContainer";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
