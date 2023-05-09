import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";

const Header = ({ walletToggle, navigationToggle }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div>
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="/img/logo.png" alt="" style={{"width":"100px"}}/>
                </a>
              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              <li>
                <Link href="/">
                  <a className="creative_link">Welcome</a>
                </Link>
              </li>
              <li>
                <a href="https://www.sitedominion.com">
                  <a className="creative_link">Official Store</a>
                </a>
              </li>
              <li>
                <Link href="/#about2">
                  <a className="creative_link">About</a>
                </Link>
              </li>
              <li>
                <a href="https://www.landscaping.sitedominion.com/">
                  <a className="creative_link creative_link2">Landscaping Web Design</a>
                </a>
              </li>
              <li>
                <a href="https://sitedominion.medium.com">
                  <a className="creative_link creative_link3">Blog</a>
                </a>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="creative_link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="wallet">
            <a
              href="https://www.sitedominion.com/#pricing_section"
              onClick={(e) => {
                e.preventDefault();
                walletToggle(true);
              }}
              className="metaportal_fn_button wallet_opener"
            >
              <span>Order Your Website</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Header
);
