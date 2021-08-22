import React, { useState, useEffect } from "react";
import "../scss/components/header-image.scss";
export default function HeaderImage() {
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 600 ? true : false,
  });
  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 600px)");
    mediaQuery.addEventListener("change", (e) => {
      setMQuery({ matches: e.matches });
    });
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener("change", setMQuery);
  }, []);
  return (
    <div className="header-image mt-2">
      <a href="#:)">
        {mQuery.matches ? (
          <img src="https://mediacdn.grabone.co.nz/asset/o29AuSG0ve" alt="local business" />
        ) : (
          <img src="https://mediacdn.grabone.co.nz/asset/jbCBqDPdrb" alt="local business" />
        )}
      </a>
    </div>
  );
}
