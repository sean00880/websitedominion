import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="left_part">
            <p>
              Copyright 2022 — Designed &amp; Owned by{" "}
              <a
                href="https://www.sitedominion.com/"
                target="_blank"
                rel="noreferrer"
              >
                Site Dominion LLC
              </a>
            </p>
          </div>
          <div className="right_part">
            <ul>
              <li>
                <a href="https://www.sitedominion.com/privacy-policy">
                  <a className="creative_link">Privacy Policy</a>
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
