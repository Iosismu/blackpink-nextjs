import SanityService from "../../services/SanityService";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import BlogMainPost from "../../components/BlogMainPost";
import Footer from "../../components/Footer";
import BlogPostDetail from "../../components/BlogPostDetail";

export default function PostAll({ slug, post }) {
  console.log(post);
  return (
    <div className={styles.container}>
      <Header />
      <BlogPostDetail blocks={post.content} />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  // sanity 로부터 데이터를 가져온다.
  const posts = await new SanityService().getPosts();

  const paths = posts.map((post) => ({
    params: {
      // params에 꼭 slug를 넘겨야 하는 이유는 파일명이 slug를 찾고 있기떄문이다. 만약 id, path다른 이름이면 안된다.
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
    // fallback이 false면 post에 페이지가 없을시 404로 넘어가게 한다.
  };
}

// getStaticPaths로 만들어진 경우에는 params부분이 getStaticProps의 매견변수로 들어온다.
export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = await new SanityService().getPosts();

  const post = posts.find((p) => p.slug === slug);
  return {
    props: {
      slug,
      post,
    },
  };
}
