import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
