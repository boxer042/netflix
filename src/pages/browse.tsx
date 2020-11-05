import React from "react";
import BrowseContainer from "../containers/browseContainer";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";

export interface IHomeProps {}

export default function Browse(props: IHomeProps) {
  const { series }: any = useContent("series");
  const { films }: any = useContent("films");
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
