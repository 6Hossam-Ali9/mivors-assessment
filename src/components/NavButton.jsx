import React from "react";
import { Badge, Button } from "antd";

const NavButton = ({ logo, count, alt, name, handleNav }) => {
  return (
    <Badge
      count={count}
      showZero
      style={{
        marginRight: 35,
        marginTop: 5,
        backgroundColor: "#FFD900",
        color: "#052346",
      }}
    >
      <Button
        shape="circle"
        style={{
          backgroundColor: "#E1ECF9",
          width: 40,
          height: 40,
          border: "none",
        }}
        onClick={() => handleNav(name)}
      >
        <img src={logo} alt={alt} />
      </Button>
    </Badge>
  );
};

export default NavButton;
