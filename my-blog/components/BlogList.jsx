import { Card, Col, Row } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

export default function BlogList({ posts }) {
  return (
    <>
      <Row
        align="middle"
        style={{
          height: 100,
        }}
      >
        <Col span={24}>
          <h1
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "pink",
              textAlign: "center",
              marginTop: 30,
            }}
          >
            Photo Book
          </h1>
        </Col>
      </Row>
      <Row
        gutter={16}
        align="top"
        style={{
          height: "auto",
        }}
      >
        {posts.map((post) => {
          return (
            <Col key={post.slug} span={6}>
              <Link href={`/post/${post.slug}`}>
                <a>
                  <Card
                    style={{
                      width: "100%",
                      border: "none",
                      marginBottom: 30,
                      backgroundColor: "pink",
                      textAlign: "center",
                    }}
                    cover={
                      <Image
                        src={post.thumbnail.imageUrl}
                        alt={post.thumbnail.alt}
                        width={1000}
                        height={1000}
                      />
                    }
                  >
                    <h3
                      style={{
                        fontSize: "22px",
                      }}
                    >
                      {post.title}
                    </h3>
                    <h4>
                      {post.author.name} ∙{" "}
                      {dayjs(post.createdAt).format("YYYY MMMM D")}
                    </h4>
                  </Card>
                </a>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
