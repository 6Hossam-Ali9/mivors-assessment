import React, { useContext } from "react";
import {
  Row,
  Col,
  Button,
  Typography,
  Divider,
  Avatar,
  InputNumber,
} from "antd";
import xsign from "../../static/icons/xsign.png";
import bin from "../../static/icons/bin.png";
import done from "../../static/icons/done.png";
import canceled from "../../static/icons/canceled.png";
import pending from "../../static/icons/pending.png";
import download from "../../static/icons/download.png";
import cube from "../../static/icons/cube.svg";

import MyContext from "./myContext";
function SideNav({ type, handleNav }) {
  const { Text } = Typography;
  const { kitchenBody, cartBody } = useContext(MyContext);

  const chooseStatus = (status) => {
    if (status === "done") return done;
    else if (status === "pending") return pending;
    return canceled;
  };
  console.log(cartBody);
  return (
    <div
      className={`side-nav ${type ? "open" : ""}`}
      style={{ color: "#00244D", borderLeft: "#4A658530 solid 1px", zIndex: 3 }}
    >
      <Row align="middle">
        <Col style={{ padding: 20, paddingBottom: 0 }}>
          <Button
            shape="circle"
            style={{
              width: 39,
              height: 39,
              backgroundColor: "#FFFFFF",
              border: "#4A658530 solid 1px",
              padding: 5,
            }}
            onClick={() => handleNav("")}
          >
            <img src={xsign} alt="x sign" width={15} />
          </Button>
          <Text
            className="font-main"
            style={{ color: "#00244D", paddingLeft: 13 }}
          >
            {" "}
            {type === "cart" ? "Your Run Cart" : "Your Run Kitchen"}
          </Text>
        </Col>
      </Row>
      <Divider />
      <Row justify="space-evenly" align="middle" style={{ padding: "0 16px" }}>
        <Col span={16}>
          <Text className="col-main" style={{ fontSize: 12 }}>
            {type === "cart" ? "Product" : "Request"}
          </Text>
        </Col>
        <Col span={4}>
          <Text
            className="col-main"
            style={{ fontSize: 12, display: "block", textAlign: "center" }}
          >
            {type === "cart" ? "Qty." : "Status"}
          </Text>
        </Col>
        <Col span={4}>
          <Text
            className="col-main"
            style={{ fontSize: 12, display: "block", textAlign: "center" }}
          >
            {type === "cart" ? "Remove" : "O/P Link"}
          </Text>
        </Col>
      </Row>
      <Divider />
      <Row justify="space-evenly" align="middle" style={{ padding: "0 16px" }}>
        <Col span={24}>
          {type === "cart" &&
            cartBody.map((product) => {
              return (
                <>
                  <Row justify="space-evenly" align="middle">
                    <Col span={3}>
                      <Avatar
                        src={cube}
                        shape="square"
                        style={{ backgroundColor: "#6371822B", padding: 7 }}
                      />
                    </Col>
                    <Col span={13}>
                      <div style={{ display: "inline-block" }}>
                        <Text
                          className="col-main"
                          style={{ fontSize: 14, display: "block" }}
                        >
                          {product.title}
                        </Text>
                        <Text style={{ fontSize: 12, color: "#637182" }}>
                          {product.service}, {product.price} DTSU
                        </Text>
                      </div>
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        min={0}
                        defaultValue={1}
                        style={{ width: 50 }}
                      />
                    </Col>
                    <Col span={4}>
                      <img
                        src={bin}
                        alt="bin img"
                        style={{
                          display: "block",
                          margin: "auto",
                          cursor: "pointer",
                        }}
                      />
                    </Col>
                  </Row>
                  <Divider />
                </>
              );
            })}
          {type === "kitchen" &&
            kitchenBody.map((product) => {
              return (
                <>
                  <Row justify="space-evenly" align="middle">
                    <Col span={3}>
                      <Avatar
                        src={cube}
                        shape="square"
                        style={{ backgroundColor: "#6371822B", padding: 7 }}
                      />
                    </Col>
                    <Col span={13}>
                      <div style={{ display: "inline-block" }}>
                        <Text
                          className="col-main"
                          style={{ fontSize: 14, display: "block" }}
                        >
                          {product.title}
                        </Text>
                        <Text style={{ fontSize: 12, color: "#637182" }}>
                          {product.service}, {product.price} DTSU
                        </Text>
                      </div>
                    </Col>
                    <Col span={4}>
                      <img
                        src={chooseStatus(product.status)}
                        alt="status"
                        style={{
                          display: "block",
                          margin: "auto",
                        }}
                      />
                    </Col>
                    <Col span={4}>
                      <img
                        src={download}
                        alt="download icon"
                        style={{
                          display: "block",
                          margin: "auto",
                          cursor: "pointer",
                        }}
                      />
                    </Col>
                  </Row>
                  <Divider />
                </>
              );
            })}
          <Row justify="space-between" align="middle">
            <Col>
              <Text style={{ fontSize: 12, color: "#00244D" }}>
                {type === "cart" ? "Subtotal" : "Units Under Processing"}
              </Text>
            </Col>
            <Col>
              <Text style={{ fontSize: 12, color: "#0097C2" }}>
                12.00 DTSUs
              </Text>
            </Col>
          </Row>
          <Row justify="space-between" align="middle" style={{ paddingTop: 5 }}>
            <Col>
              <Text style={{ fontSize: 12, color: "#00244D" }}>
                {type === "cart" ? "New Payment" : "Units Completed"}
              </Text>
            </Col>
            <Col>
              <Text style={{ fontSize: 12, color: "#0097C2" }}>
                {type === "cart"
                  ? "No, Inclusive in your package"
                  : "12.00 DTSUs"}
              </Text>
            </Col>
          </Row>
          <Divider />
          <Row justify="space-between" align="middle">
            <Col>
              <Text style={{ fontSize: 12, color: "#00244D" }}>
                {type === "cart"
                  ? "Total Units Consumed"
                  : "Total Units Consumed"}
              </Text>
            </Col>
            <Col>
              <Text style={{ fontSize: 12, color: "#0097C2" }}>
                12.00 DTSUs
              </Text>
            </Col>
          </Row>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: 23 }}
          >
            <Col span={24}>
              <Button
                style={{
                  backgroundColor: "#0097C2",
                  fontSize: 14,
                  width: "100%",
                  color: "#FFFFFF",
                  borderRadius: 1000,
                  height: 48,
                }}
                shape="circle"
              >
                {type === "cart" ? "Checkout" : "Refresh Status"}
              </Button>
            </Col>
          </Row>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: 17 }}
          >
            <Col span={24}>
              <Button
                style={{
                  backgroundColor: "#FFFFFF",
                  fontSize: 14,
                  width: "100%",
                  color: "#0097C2",
                  border: "2px solid #0097C2",
                  height: 48,
                  borderRadius: 1000,
                }}
                shape="circle"
              >
                {type === "cart"
                  ? "Back to Run Information"
                  : "Back to Your Dashboard"}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default SideNav;
