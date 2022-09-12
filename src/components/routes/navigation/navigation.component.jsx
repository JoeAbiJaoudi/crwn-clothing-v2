import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react"; //fragment is an empty component to use as parent
import { ReactComponent as CrwnLogo } from '../../../../src/assets/crown.svg'
import './navigation.styles.scss';
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className='logo'/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
