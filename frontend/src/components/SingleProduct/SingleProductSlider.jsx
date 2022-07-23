import React, { useState } from "react";

const SingleProductSlider = ({ imgArray }) => {
  const [url, setUrl] = useState(imgArray[0]);
  return (
    <>
      <div className="px-2 py-2">
        <div className="flex">
          <div className="w-[20%]">
            {imgArray.map((img, i) => {
              return (
                <div className="w-[70px] h-[86.5px] mb-3" key={i}>
                  <img
                    className="w-full"
                    src={img}
                    alt=""
                    onClick={() => setUrl(img)}
                  />
                </div>
              );
            })}
          </div>
          <div className="w-[80%]">
            <div className="w-[400px]">
              <img src={url} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductSlider;
