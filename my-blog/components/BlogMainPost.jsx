import { Row, Col, Card } from "antd";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";

export default function BlogMainPost({
  slug,
  thumbnail,
  title,
  subtitle,
  author,
  createdAt,
}) {
  return (
    <Row
      align="middle"
      style={{
        height: "auto",
      }}
    >
      <Col span={24}>
        <Link href={`/post/${slug}`}>
          <a>
            <Card
              style={{
                border: "none",
                backgroundColor: "pink",
                textAlign: "center",
                hover: { backgroundColor: "white" },
              }}
              cover={
                <Image
                  src={thumbnail.imageUrl}
                  alt={thumbnail.alt}
                  width={500}
                  height={800}
                />
              }
            >
              <h1
                style={{
                  color: "black",
                }}
              >
                {title}
              </h1>
              <h3
                style={{
                  color: "black",
                }}
              >
                {subtitle}
              </h3>
              <h4
                style={{
                  color: "black",
                }}
              >
                {author.name} - {dayjs(createdAt).format("YYYY MMMM D")}
              </h4>
            </Card>
          </a>
        </Link>
      </Col>
    </Row>
  );
}
