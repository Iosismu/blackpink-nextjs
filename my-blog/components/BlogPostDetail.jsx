import { Row, Col, Card } from "antd";
import BlockContent from "@sanity/block-content-to-react";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function BlogPostDetail({ blocks }) {
  return (
    <Row>
      <Col span={24}>
        <BlockContent
          blocks={blocks}
          projectId={process.env.SANITY_PROJECT_ID}
          dataset="production"
          width={200}
          height={200}
        />
      </Col>
    </Row>
  );
}

// const serializers = {
//   types: {
//     code: ({ node }) => {
//       const { code } = node;
//       return (
//         <SyntaxHighlighter
//           language="javascript"
//           style={{
//             hljs: {
//               display: "block",
//               overflowX: "auto",
//               padding: "0.5em",
//               color: "#adadad",
//               background: "#101010",
//             },
//             "hljs-comment": {
//               color: "#636363",
//               fontStyle: "italic",
//             },
//             "hljs-quote": {
//               color: "#636363",
//               fontStyle: "italic",
//             },
//             "hljs-doctag": {
//               color: "#b29dfc",
//             },
//             "hljs-keyword": {
//               color: "#b29dfc",
//             },
//             "hljs-formula": {
//               color: "#b29dfc",
//             },
//             "hljs-section": {
//               color: "#f17a8d",
//             },
//             "hljs-name": {
//               color: "#f17a8d",
//             },
//             "hljs-selector-tag": {
//               color: "#f17a8d",
//             },
//             "hljs-deletion": {
//               color: "#f17a8d",
//             },
//             "hljs-subst": {
//               color: "#f17a8d",
//             },
//             "hljs-literal": {
//               color: "#5abdc8",
//             },
//             "hljs-string": {
//               color: "#fdc97d",
//             },
//             "hljs-regexp": {
//               color: "#fdc97d",
//             },
//             "hljs-addition": {
//               color: "#fdc97d",
//             },
//             "hljs-attribute": {
//               color: "#fdc97d",
//             },
//             "hljs-meta-string": {
//               color: "#fdc97d",
//             },
//             "hljs-built_in": {
//               color: "#d9a200",
//             },
//             "hljs-class .hljs-title": {
//               color: "#d9a200",
//             },
//             "hljs-attr": {
//               color: "#f58957",
//             },
//             "hljs-variable": {
//               color: "#f58957",
//             },
//             "hljs-template-variable": {
//               color: "#f58957",
//             },
//             "hljs-type": {
//               color: "#f58957",
//             },
//             "hljs-selector-class": {
//               color: "#f58957",
//             },
//             "hljs-selector-attr": {
//               color: "#f58957",
//             },
//             "hljs-selector-pseudo": {
//               color: "#f58957",
//             },
//             "hljs-number": {
//               color: "#f58957",
//             },
//             "hljs-symbol": {
//               color: "#9cbafe",
//             },
//             "hljs-bullet": {
//               color: "#9cbafe",
//             },
//             "hljs-link": {
//               color: "#9cbafe",
//               textDecoration: "underline",
//             },
//             "hljs-meta": {
//               color: "#9cbafe",
//             },
//             "hljs-selector-id": {
//               color: "#9cbafe",
//             },
//             "hljs-title": {
//               color: "#9cbafe",
//             },
//             "hljs-emphasis": {
//               fontStyle: "italic",
//             },
//             "hljs-strong": {
//               fontWeight: "bold",
//             },
//           }}
//         >
//           {code}
//         </SyntaxHighlighter>
//       );
//     },
//     video: ({ node }) => {
//       return <p>video</p>;
//     },
//     link: ({ node }) => {
//       return <p>link</p>;
//     },
//     imageGallery: ({ node }) => {
//       return <p>imageGallery</p>;
//     },
//   },
// };
