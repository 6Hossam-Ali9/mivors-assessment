import React, { useContext } from "react";
import Layout from "../components/Layout";
import MyContext from "../components/myContext";
function BlankPage() {
  const { pageTitle } = useContext(MyContext);

  return (
    <Layout>
      <h1 style={{ textAlign: "center", paddingTop: 200 }}>{pageTitle}</h1>
    </Layout>
  );
}

export default BlankPage;
