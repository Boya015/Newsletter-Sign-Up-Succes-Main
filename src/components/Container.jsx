import React from "react";
import Header from "./Header";
import Content from "./Content";
import NewsletterForm from "./NewsletterForm";
import ImagesSvg from "./ImagesSvg";


const Container = () => {
  return (
    <div className="Container">
      <div className="Container-text">
        <Header />
        <Content />
        <NewsletterForm />
      </div>
      <ImagesSvg />
    </div>
  );
};

export default Container;
