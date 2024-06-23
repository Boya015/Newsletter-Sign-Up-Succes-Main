import React from "react";

const ImagesSvg = () => {
    return (
      <div>
      <div className="svg_image">
        <picture>
        <img 
         src="assets/images/illustration-sign-up-desktop.svg" 
         alt="illustration img" 
         className="photo desktop"
      />
      <img 
         src="assets/images/illustration-sign-up-mobile.svg" 
         alt="illustration img" 
         className="photo mobile"
      />
        </picture>
        </div>
      </div>
    );
  };
  
  export default ImagesSvg;