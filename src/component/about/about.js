import React from "react";
import './about.css';
import '../../App.css'
import Header from "../header";
import Footer from "../footer";

class About extends React.Component {
  render() {
    return (
      <div className="product_content_frame">
        <Header/>
        <div className="product_content">
          <div className="product_content_words">
            <div className="product_content_words_title">About Us</div>
            <div className="subtitle">
              Dress to EARN, Creative for FUN!
            </div>
            <div className="words">
              Everyone can be a creator. Suggest your idea, vote for your favorite creative product and make them a
              reality.Everyone can be a creator. Suggest your idea, vote for your favorite creative product and make
              them a reality.Everyone can be a creator. Suggest your idea, vote for your favorite creative product and
              make them a reality.Everyone can be a creator. Suggest your idea, vote for your favorite creative product
              and make them a reality.Everyone can be a creator. Suggest your idea, vote for your favorite creative
              product and make them a reality.
            </div>
            <div className="subtitle">
              Dress to EARN, Creative for FUN!
            </div>
            <div className="words">
              Everyone can be a creator. Suggest your idea, vote for your favorite creative product and make them a
              reality.Everyone can be a creator. Suggest your idea, vote for your favorite creative produ can be a
              creator. Suggest your idea, vote for your favorite creative product and make them a reality.
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;