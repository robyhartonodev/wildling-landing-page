import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Nav></Nav>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
