import styles from "../styles/Home.module.css";
import SanityService from "../services/SanityService";
import Header from "../components/Header";
import BlogHeadline from "../components/BlogHeadline";
import BlogMainPost from "../components/BlogMainPost";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

export default function Home({ home, posts }) {
  const mainPost = posts.find((p) => p.slug === home.mainPostUrl);
  const otherPosts = posts.filter((p) => p.slug !== home.mainPostUrl);
  // console.log(mainPost);
  console.log(otherPosts);

  return (
    <div className={styles.container}>
      <Header />
      <BlogHeadline />
      <BlogMainPost {...mainPost} />
      <BlogList posts={otherPosts} />
      <Footer />
    </div>
  );
}

// 여기서 중요한 점은 function의 이름이 getStaticProps라는 점이다. 만약 다른 이름이면 hello가 Props로 들어가지 않는다.
export async function getStaticProps() {
  const sanityService = new SanityService();
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();

  return {
    props: {
      home,
      posts,
    },
  };
}

// *[_type == 'home'][0]{'mainPostUrl': mainPost -> slug.current}
