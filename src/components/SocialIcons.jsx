import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react';

const SocialIcons = () => (
  <div className="d-flex gap-2 social_icon justify-content-center">
    <Link
      // to="https://wa.me/+201155272634"
      target="_blank"
      className="whats"
      aria-label="whatsapp"
    >
      <FaWhatsapp />
    </Link>
    <Link
      // to="https://www.facebook.com/profile.php?id=100085207638746&sk=map"
      target="_blank"
      className="facebook"
      aria-label="facebook"
    >
      <FaFacebook />
    </Link>
    <Link
      // to="https://www.instagram.com/your-profile"
      target="_blank"
      className="insta"
      aria-label="instagram"
    >
      <FaInstagram />
    </Link>
    <Link
      // to="https://www.youtube.com/channel/UCEe7z4oudHx8GaCA0DZJbWQ"
      target="_blank"
      className="youtube"
      aria-label="youtube"
    >
      <FaYoutube />
    </Link>
    <Link
      // to="https://www.linkedin.com/company/najezsoft/"
      target="_blank"
      className="linkedin"
      aria-label="linkedin"
    >
      <FaLinkedin />
    </Link>
    <Link
      // to="https://twitter.com/your-profile"
      target="_blank"
      className="twitter"
      aria-label="twitter"
    >
      <FaXTwitter />
    </Link>
  </div>
);

export default SocialIcons;
