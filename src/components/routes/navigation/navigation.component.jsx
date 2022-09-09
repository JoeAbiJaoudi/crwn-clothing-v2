import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react"; //fragment is an empty component to use as parent
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>Logo</div>
        </Link>
        <div className="links-container">
          <Link className="nva-link" to="/shop">
            SHOP
          </Link>
        </div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
