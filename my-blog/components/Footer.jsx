import { Row, Col } from "antd";

export default function Footer() {
  return (
    <Row
      align="middle"
      style={{
        height: 50,
        textAlign: "right",
      }}
    >
      <Col span={24}>
        <p>© 2021 Mark Lee. All rights reserved.</p>
      </Col>
    </Row>
  );
}
