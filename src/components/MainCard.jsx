import React, { useContext } from "react";
import { Card, Button, Typography, Col, Row } from "antd";
import plus from "../../static/icons/plus.png";
import goto from "../../static/icons/goto.png";
import { navigate } from "gatsby";
import MyContext from "./myContext";
export default function MainCard({ texta, textb, price, svg, alt, bgc }) {
  const { Text } = Typography;
  const { setPageTitle } = useContext(MyContext);
  const handleClick = (pageName) => {
    setPageTitle(pageName);
    navigate("/blankPage");
  };
  return (
    <Card
      cover={
        <img
          alt={alt}
          src={svg}
          style={{
            height: 170,
            margin: "auto",
            padding: "20px 0",
          }}
        />
      }
      style={{ width: 270, height: 363 }}
    >
      <div
        style={{
          backgroundColor: bgc,
          width: "100%",
          height: 190,
          borderRadius: 7,
          display: "grid",
          padding: "10px 3px",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Text style={{ display: "block", fontSize: 20, color: "#FFFFFF" }}>
          {texta}
        </Text>
        <Text style={{ fontSize: 16, color: "#FFFFFF" }}>{textb}</Text>

        <Row justify="space-around" align="middle">
          <Col>
            <Text style={{ fontSize: 20, color: "#FFFFFF" }}>
              {price} DTSU*
            </Text>
          </Col>
          <Col>
            <Button
              shape="circle"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.17)",
                border: "none",
                width: 48,
                height: 48,
              }}
              onClick={() => handleClick(texta)}
            >
              <img src={goto} alt="go to sign" style={{}} />
            </Button>
            <Button
              shape="circle"
              style={{
                marginLeft: 5,
                backgroundColor: "rgba(0, 0, 0, 0.17)",
                border: "none",
                width: 48,
                height: 48,
              }}
            >
              <img src={plus} alt="plus sign" />
            </Button>
          </Col>
        </Row>
      </div>
    </Card>
  );
}
