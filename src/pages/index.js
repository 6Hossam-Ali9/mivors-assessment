import * as React from "react";
import Layout from "../components/Layout";
import { Row, Col, Typography, Button } from "antd";
import diamond from "../../static/icons/diamond.svg";
import multiLine from "../../static/icons/multiline.svg";
import MainCard from "../components/MainCard";
import card1 from "../../static/icons/card1.svg";
import card2 from "../../static/icons/card2.svg";
import card3 from "../../static/icons/card3.svg";
import card4 from "../../static/icons/card4.svg";

export default function Home() {
  const { Text } = Typography;
  return (
    <Layout>
      <div className="rectangle"></div>
      <Row align="middle" justify="space-between" style={{ marginTop: 50 }}>
        <Col>
          <Text style={{ fontSize: 28, color: "#0097C2" }}>
            Get Support <img src={diamond} alt="diamond svg" width={28} />
          </Text>
        </Col>
        <Col>
          <Button
            shape="circle"
            className="pt-3"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.17)",
              border: "none",
            }}
          >
            <img src={multiLine} alt="multiLine svg" />
          </Button>
        </Col>
      </Row>
      <Row
        gutter={[8, 100]}
        justify="space-between"
        style={{ padding: "30px 0" }}
      >
        <Col>
          <MainCard
            texta="Customer Engagement"
            textb="Get your own mobile app for industry specific"
            price={100}
            bgc="#0A488F"
            alt="svg card 1"
            svg={card1}
          />
        </Col>
        <Col>
          <MainCard
            texta="Actionable Insighets"
            textb="Create Dashboards "
            price={100}
            bgc="#579064"
            alt="svg card2"
            svg={card2}
          />
        </Col>
        <Col>
          <MainCard
            texta="Employees Productivity"
            textb="KPI Builder , Work Conf,Create Oracle Requests"
            price={50}
            bgc="#950000"
            alt="svg card3"
            svg={card3}
          />
        </Col>
        <Col>
          <MainCard
            texta="Operations Excellence"
            textb="Tenant/lessee Managment"
            price={100}
            bgc="#8F6C0A"
            alt="svg card4"
            svg={card4}
          />
        </Col>
      </Row>
    </Layout>
  );
}
