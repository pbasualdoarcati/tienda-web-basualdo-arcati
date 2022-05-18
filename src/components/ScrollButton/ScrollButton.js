//Elements and modules

import { React, useState, useEffect } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

//Styles

import "./ScrollButton.scss";

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <div className="scrollButton">
          <ArrowCircleUpIcon onClick={scrollToTop} className="button" />
        </div>
      )}
    </>
  );
}

export default ScrollButton;
