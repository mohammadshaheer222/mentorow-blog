import BigPosts from "../Components/BigPosts";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import MiddleSection from "../Components/MidSection";
import Navbar from "../Components/Navbar";
import RecentBlog from "../Components/RecentBlog";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RecentBlog />
      <MiddleSection />
      <BigPosts />
      <Footer />
    </>
  );
};

export default Home;
