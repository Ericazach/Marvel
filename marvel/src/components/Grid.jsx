import React from "react";

function Grid({ children }) {
  return (
    <div className="d-flex justify-content-evenly flex-wrap gap-5 text-center">
      {children}
    </div>
  );
}

export default Grid;
