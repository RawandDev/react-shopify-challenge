import React from "react";

function Header() {
  return (
    <div className="flex justify-around items-center text-lg">
      <img
        src="https://www.vectorlogo.zone/logos/shopify/shopify-ar21.svg"
        alt="shopify"
      />
      <p className="text-2xl">Nominations 0/5</p>
      <img
        className="h-10"
        src="https://image.flaticon.com/icons/png/512/569/569524.png"
        alt="angry-face"
      />
    </div>
  );
}

export default Header;
