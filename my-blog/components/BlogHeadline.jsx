import { Col, Row } from "antd";

export default function BlogHeadline() {
  return (
    <Row
      align="middle"
      style={{
        heigth: 400,
        textAlign: "center",
      }}
    >
      <Col span={24}>
        <h1 style={{ fontSize: 70, fontWeight: "bold", color: "pink" }}>
          BLACKPINK
        </h1>
        <p style={{ fontSize: 24, color: "pink" }}>
          Next.js와 Sanity를 이용하여, 간단한 이미지북 프로젝트를 진행
          하였습니다. Next.js, Sanity의 사용법을 익히고 앞으로 있을 프로젝트에
          Next.js를 적극 활용할 예정입니다.
        </p>
      </Col>
    </Row>
  );
}
