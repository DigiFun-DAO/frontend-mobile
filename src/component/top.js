// 页面顶部栏
import React from "react";
import '../App.css';
import Header from "./header";

class Top extends React.Component {
  state = {
    button_selected: [false, false]
  }

  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  }

  render() {
    return (
      <div className="home">
        <div className="home_content">
          <img className="blur_red" src={require("../assets/blur-red.svg").default}/>
          <img className="blur_yellow" src={require("../assets/blur-yellow.svg").default}/>
        </div>
        <div className="slogan_frame">
          <div className="slogan_words">
            <span className="slogan_words_title">Creative for FUN! Enjoy and EARN!</span>
            <div className="slogan_words_comment">Digital creation governed by DAO</div>
          </div>
          <a href="https://discord.gg/6tArQY6WGu" style={{width: "100vw"}}>
            <button className="slogan_buttons_join">
              <div className="slogan_buttons_words">
                Join us
              </div>
            </button>
          </a>
          <a href="https://snapshot.org/#/digifun.eth" style={{width: "100vw"}}>
            <button className="slogan_buttons_voting">
              <div className="slogan_buttons_words">
                Voting
              </div>
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Top;
