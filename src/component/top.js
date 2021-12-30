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
        <img className="doodle_72" src={require("../assets/doodle-72.png").default}/>
        <img className="doodle_71" src={require("../assets/doodle-71.png").default}/>
        <img className="doodle_61" src={require("../assets/doodle-61.png").default}/>
        <img className="doughnut_1" src={require("../assets/doughnut-1.png").default}/>
        <img className="doughnut_2" src={require("../assets/doughnut-2.png").default}/>
        <img className="coin_1" src={require("../assets/coin-1.png").default}/>
        <img className="coin_2" src={require("../assets/coin-2.png").default}/>
        <img className="helix_1" src={require("../assets/helix-1.png").default}/>
        <img className="helix_2" src={require("../assets/helix-2.png").default}/>
        <img className="helix_3" src={require("../assets/helix-3.png").default}/>
        <img className="cash" src={require("../assets/cash.png").default}/>
        <img className="hazelnut" src={require("../assets/hazelnut.png").default}/>
        <img className="star" src={require("../assets/star.png").default}/>
        <img className="blur_red" src={require("../assets/blur-red.svg").default}/>
        <img className="blur_yellow" src={require("../assets/blur-yellow.svg").default}/>
        <div className="slogan_frame">
          <div className="slogan_words">
            <span className="slogan_words_title">Creative for FUN! Enjoy and EARN!</span>
            <div className="slogan_words_comment">Digital creation governed by DAO</div>
          </div>
          <div className="slogan_buttons">
            <a href="https://discord.gg/6tArQY6WGu">
              <img className={this.state.button_selected[0] ? "slogan_buttons_join_selected" : "slogan_buttons_join"}
                src={require("../assets/Button-Join.svg").default}
                   style={{cursor: 'pointer'}}
                   onMouseEnter={() => {
                     this.setState({button_selected: [true, false]})
                   }}
                   onMouseLeave={() => {
                     this.setState({button_selected: [false, false]})
                   }}
              />
            </a>
            <a href="https://snapshot.org/#/digifun.eth">
              <img className={this.state.button_selected[1] ? "slogan_buttons_voting_selected" : "slogan_buttons_voting"}
                   src={require("../assets/Button-Voting.svg").default}
                   style={{cursor: 'pointer'}}
                   onMouseEnter={() => {
                     this.setState({button_selected: [false, true]})
                   }}
                   onMouseLeave={() => {
                     this.setState({button_selected: [false, false]})
                   }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
