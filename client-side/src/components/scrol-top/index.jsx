import React, { useEffect } from "react";
import "./index.scss";
const ScrolTop = () => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   }, []);
  return (
    <>
      <div style={{ height: "1rem" }} />
      <button
        className="scroll-top"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default ScrolTop;
