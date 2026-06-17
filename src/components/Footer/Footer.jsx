import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer__top">

          <div>

            <h3>
              <img src="/logo.png" alt="SEVA Health Logo" />
            </h3>

            <p>
                
            SEVA Health understands the unique challenges of person-centered care. Whether your agency provides Residential Care, Day Programs, In-Home Support, Respite Care, or Rehabilitation Services, we know your workflows. We provide tailored strategies, secure systems, and ongoing support to protect your agency from risks and ensure long-term, sustainable growth.
            </p>

          </div>

          <div>

            <h4>
              Home
            </h4>

            <a href="#">
              iManage
            </a>

            <a href="#">
              Compliance
            </a>

          </div>

          <div>

            <h4>
              Resources
            </h4>

            <a href="#">
            Terms & Conditions
            </a>

            <a href="#">
              Contact
            </a>

          </div>

        </div>

        <div className="footer__bottom">

          © 2026 SEVA Health

        </div>

      </div>

    </footer>
  );
}