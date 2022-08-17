import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => (
  <>
    <Header />
    <main className="dark:bg-slate-900 bg-white text-slate-900 dark:text-white grow">{props.children}</main>
    <Footer />
  </>
);

export default Layout;