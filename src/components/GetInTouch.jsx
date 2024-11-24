import React from "react";
import SocialCard from "./SocialCard";

const GetInTouch = () => {
  return (
    <div>
      <h4 className="heading-lg text-primary mb-2">Get in touch</h4>
      <div className="mb-2">
        <SocialCard />
      </div>
      <p className="para-sm text-text-primary">
        Mobile: <a href="tel:+919004409190">9004409190</a>
      </p>
      <p className="para-sm text-text-primary">
        Email:
        <a href="mailto:salunkheshubham0@gmail.com">
          salunkheshubham0@gmail.com
        </a>
      </p>
    </div>
  );
};

export default GetInTouch;
