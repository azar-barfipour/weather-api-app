import { Fragment } from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      {/* <Footer></Footer> */}
    </Fragment>
  );
};
export default Layout;
