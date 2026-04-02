import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ContentBlock from "./components/contentblock";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Layout() {
  return (
    <>
      <Header />
      <ContentBlock>
        <Navbar />
      </ContentBlock>
      <Outlet />
      <Footer />
    </>
  );
}
