import React from "react";
import Header from "./Header";
import Content from "./Content";
import NewsletterForm from "./NewsletterForm";
import ImagesSvg from "./ImagesSvg";

const Container = () => {
  return (
    <div className="Container">
      <ImagesSvg />
      <div className="Container-text">
        <Header />
        <Content />
        <NewsletterForm />
      </div>
    </div>
  );
};

export default Container;
