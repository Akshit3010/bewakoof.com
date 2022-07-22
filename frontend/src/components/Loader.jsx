import React from "react";

const Loader = () => {
  return (
    <>
      <div className="absolute z-[100] rounded-lg border bg-white top-[42%] left-[50%]">
        <img
          className="w-[140px]"
          src="https://images.bewakoof.com/web/bwkf-loading-anim-common.gif"
          alt="loading..."
        />
      </div>
    </>
  );
};

export default Loader;
