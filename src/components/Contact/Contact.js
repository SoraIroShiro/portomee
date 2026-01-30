import React, { useState } from "react";
import { ContactWrapper, Email, ContactActions } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("fiqifahrudillah@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact" className="Section Section--contact">
      <div className="Container">
        <div className="SectionTitle">Let's Connect</div>
        <div className="SectionSubtitle">
          Open for collaboration, internships, and thoughtful conversations.
        </div>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="BigCard">
            <Email>
              <div className="contact-email">
                <span>fiqifahrudillah@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard}>
                    <MdContentCopy size={20} style={{ cursor: "pointer", color: "#e8ebf0" }} />
                  </IconButton>
                </Tooltip>
              </div>
            </Email>
            <ContactActions>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:fiqifahrudillah@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
              <a
                className="btn SecondaryBtn"
                href="https://linkedin.com/in/fiqi-fahrudillah-5bbb51311"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </ContactActions>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
