import React from "react";
import "./Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { IconButton } from "@material-ui/core";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="col-sm">Contact Priyank Agarwal at:</h3>
            <div className="contact_details">
              <p className="each_detail">
                <a
                  href="https://www.linkedin.com/in/priyank-agarwal-iiita/"
                  target="_blank"
                  className="display_contact"
                  rel="noopener noreferrer"
                  title="Click to open LinkedIn"
                >
                  <IconButton>
                    <LinkedInIcon></LinkedInIcon>
                  </IconButton>
                </a>
              </p>
              <p className="each_detail">
                <a
                  href="https://github.com/priyank-ayron/"
                  target="_blank"
                  className="display_contact"
                  rel="noopener noreferrer"
                  title="Click to open Github"
                >
                  <IconButton>
                    <GitHubIcon></GitHubIcon>
                  </IconButton>
                </a>
              </p>
              <p className="each_detail">
                <a
                  href="https://www.facebook.com/priyank.agarwal.731/"
                  target="_blank"
                  className="display_contact"
                  rel="noopener noreferrer"
                  title="Click to open facebook"
                >
                  <IconButton>
                    <FacebookIcon></FacebookIcon>
                  </IconButton>
                </a>
              </p>
              <li className="display_contact">
                <a
                  href="tel:+91-6386947948"
                  target="_blank"
                  className="display_contact"
                  rel="noopener noreferrer"
                  title="+91-6386947948"
                >
                  <IconButton>
                    <PhoneIcon></PhoneIcon>
                  </IconButton>
                </a>
              </li>
              <li className="display_contact">
                <a
                  href="mailto:priyank.ayron@gmail.com"
                  target="_blank"
                  className="display_contact"
                  rel="noopener noreferrer"
                  title="priyank.ayron@gmail.com"
                >
                  <IconButton>
                    <EmailIcon></EmailIcon>
                  </IconButton>
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
