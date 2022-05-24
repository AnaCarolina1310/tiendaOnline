import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { RiMailLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="container my-5">
      <hr />
      <div className="redes">
        <a href="https://es-es.facebook.com/">
          {" "}
          <BsFacebook className="redesIcons" />
        </a>
        <a href="https://twitter.com/?lang=es">
          <BsTwitter className="redesIcons" />
        </a>
        <a href="https://www.instagram.com/?hl=es">
          <BsInstagram className="redesIcons" />
        </a>
        <Link to="/contact">
          <RiMailLine className="redesIcons" />
        </Link>
      </div>
    </div>
  );
};
