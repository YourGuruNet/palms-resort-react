import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the biggest Explorer group
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe when you are tired of us..
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email.."
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/signup">How it works</Link>
            <Link to="/signup">Testimonials</Link>
            <Link to="/signup">Careers</Link>
            <Link to="/signup">Investors</Link>
            <Link to="/signup">Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact</h2>
            <Link to="/signup">Contact Us</Link>
            <Link to="/signup">Address</Link>
            <Link to="/signup">Phone</Link>
            <Link to="/signup">Email</Link>
            <Link to="/signup">Bio</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>News</h2>
            <Link to="/signup">Read more</Link>
            <Link to="/signup">Blog</Link>
            <Link to="/signup">Video</Link>
            <Link to="/signup">Media</Link>
            <Link to="/signup">Archive</Link>
          </div>
          <div className="footer-link-items">
            <h2>We offer</h2>
            <Link to="/signup">Beach</Link>
            <Link to="/signup">Jungles</Link>
            <Link to="/signup">Pyramids</Link>
            <Link to="/signup">Mountains</Link>
            <Link to="/signup">City</Link>
          </div>
        </div>

      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Palms &nbsp; <i className="fas fa-umbrella-beach" />
            </Link>
          </div>
          <small className="website-rights">
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
            <Link to="/" className="website-rights">
              <p> PalmsResort.com</p>
            </Link>
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link google"
              to="/"
              target="_blank"
              aria-label="google"
            >
              <i className="fab fa-google" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="linkedin"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
