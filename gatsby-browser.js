import React from "react";
import StateProvider from "./src/components/StateProvider";

export const wrapRootElement = ({ element }) => {
  return <StateProvider Component={element.type} pageProps={element.props} />;
};
