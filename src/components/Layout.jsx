import React, { useState } from "react";
import { Row, Col, Typography, Avatar, Space } from "antd";
import { Link } from "gatsby";
import "antd/dist/reset.css";
import "../styles/global.css";
import NavButton from "./NavButton";
import SideNav from "./SideNav";
import img1 from "../../static/images/img1.jpg";
import img2 from "../../static/images/img2.jpg";
import img3 from "../../static/images/img3.jpg";
import img4 from "../../static/images/img4.jpg";
import cart from "../../static/icons/cart.svg";
import kitchen from "../../static/icons/kitchen.svg";

const Layout = ({ children }) => {
  const { Text } = Typography;
  const imgs = [img1, img2, img3, img4];
  const [type, setType] = useState("");

  return (
    <>
      <Row
        justify="space-around"
        align="middle"
        style={{
          backgroundColor: "#F8F8F8",
          position: "relative",
          height: 90,
          zIndex: 2,
        }}
      >
        <Col>
          <Text style={{ fontSize: 24, display: "block", color: "#00244D" }}>
            Welcome to iCloudReady!
          </Text>
          <Text className="font-main" style={{ color: "#637182" }}>
            You have started your
          </Text>
          <Text className="font-main" style={{ color: "#00244D" }}>
            {" "}
            30 day trial
          </Text>
        </Col>
        <Col className="mid-col">
          <Row gutter={16} align="middle">
            <Col>
              <Avatar.Group
                maxCount={4}
                maxPopoverTrigger="click"
                size="large"
                maxStyle={{
                  color: "#7C838A",
                  backgroundColor: "#E6E6E6",
                  cursor: "pointer",
                }}
              >
                {imgs.map((img) => {
                  return <Avatar src={img} key={img} />;
                })}
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Avatar.Group>
            </Col>
            <Col>
              <Text
                style={{ fontSize: 20, display: "block", color: "#637182" }}
              >
                Our architects are here to help
              </Text>
              <Link
                to="/"
                type="#0097C2"
                className="font-main"
                style={{ cursor: "pointer" }}
              >
                Book a free session
              </Link>
            </Col>
          </Row>
        </Col>
        <Col>
          <Space size={24}>
            <NavButton
              logo={cart}
              count={2}
              alt="cart svg"
              handleNav={setType}
              name="cart"
            />
            <NavButton
              name="kitchen"
              logo={kitchen}
              count={3}
              alt="kitchen svg"
              handleNav={setType}
            />
          </Space>
          <SideNav type={type} handleNav={setType} />
        </Col>
      </Row>
      <Row
        justify="center"
        style={{
          minHeight: "85vh",
          background:
            "linear-gradient(342.45deg, #97E0F3 -32.65%, #FFFFFF 85.43%)",
        }}
      >
        <Col style={{ width: "80%", position: "relative" }}>{children}</Col>
      </Row>
      <Row
        justify="center"
        align="middle"
        style={{
          height: 70,
          position: "relative",
          backgroundColor: "#FFFFFF",
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 42,
            height: 150,
            backgroundColor: "#0097C2",
          }}
        ></div>
        <Col>
          <Typography.Paragraph
            className="font-main"
            style={{ color: "#637182" }}
          >
            <Text style={{ color: "#052346" }}>Got questions?</Text> Take a look
            at our{" "}
            <Link to="/" type="#0097C2">
              FAQs
            </Link>
            , talk to us on Twitter{" "}
            <Link to="/" type="#0097C2">
              @icloudready
            </Link>{" "}
            or send an email to{" "}
            <a href="mailto: team@icloud-ready.com" type="#0097C2">
              team@icloud-ready.com
            </a>
          </Typography.Paragraph>
        </Col>
      </Row>
    </>
  );
};

export default Layout;
