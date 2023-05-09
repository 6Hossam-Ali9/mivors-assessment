import React, { useState } from "react";
import MyContext from "./myContext";

function StateProvider({ Component, pageProps }) {
  const [pageTitle, setPageTitle] = useState("");
  const kitchenBody = [
    {
      title: "Knowledge Transfer",
      status: "canceled",
      service: "Private Training",
      price: 12,
    },
    {
      title: "Knowledge Transfer",
      status: "pending",
      service: "Private Training",
      price: 12,
    },
    {
      title: "Knowledge Transfer",
      status: "done",
      service: "Private Training",
      price: 12,
    },
  ];

  const cartBody = [
    {
      title: "Smart Checklist",
      service: "Default Title",
      price: 12,
    },
    {
      title: "Smart Checklist",
      service: "Default Title",
      price: 12,
    },
  ];

  return (
    <MyContext.Provider
      value={{ pageTitle, setPageTitle, kitchenBody, cartBody }}
    >
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default StateProvider;
