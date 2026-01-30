import { IconButton, Tooltip, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";

const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 22px;
  right: 22px;
  padding: 8px;
`;

const StyledArrowIcon = styled(MdKeyboardArrowUp)`
  background-color: var(--accent);
  color: #0c111a;
  border-radius: 50%;
  padding: 5px;
  box-shadow: var(--shadow-sm);
`;

function ScrollToTop() {
  const [open, setOpen] = React.useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const handleClick = () => {
    setOpen(false);
    scroll.scrollToTop({ duration: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500;
      if (window.scrollY > scrollThreshold) setShouldRender(true);
      else setShouldRender(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return (
    shouldRender && (
      <Tooltip
        title="Scroll to top"
        placement="top"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <StyledIconButton size="large" aria-label="scroll to top" onClick={handleClick}>
          <StyledArrowIcon fontSize={36} />
        </StyledIconButton>
      </Tooltip>
    )
  );
}

export default ScrollToTop;
