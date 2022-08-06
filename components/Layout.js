import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => (
  <>
    <Header />
    <main className="grow">{props.children}</main>
    <Footer />
  </>
);

export default Layout;