import React from "react";
import Layout from "../components/Layout";
import { Typography } from "antd";

export default function NotFound() {
  return (
    <Layout>
      <Typography.Title
        level={1}
        style={{ marginTop: 100, textAlign: "center" }}
      >
        SORRY, PAGE NOT FOUND
      </Typography.Title>
    </Layout>
  );
}
