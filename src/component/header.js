// 页面顶部栏
import React from "react";
import '../App.css';
import {createBrowserHistory} from 'history'
import { Popup, Space, Button } from 'antd-mobile'

const history = createBrowserHistory()


class Header extends React.Component {
  constructor(props) {
    super(props);
    const strs = window.location.href.split('/')
    this.state = {button_selected: [true, false, false]};
    if (strs[strs.length - 1] === "about") {
      this.state = {button_selected: [false, false, true]};
    } else if (strs[strs.length - 1] === "DAO") {
      this.state = {button_selected: [false, true, false]};
    }
    this.state.visible = false
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
      <div className="header">
        <img className="logo" src={require("../assets/logo.svg").default}
             style={{cursor: 'pointer'}}
             onClick={() => {
               history.push('/')
               window.location.reload()
             }}
             alt=""/>
        <div className="menu">
            <img src={require('../assets/menu.svg').default} onClick={() => {
              this.setState({visible: true})
            }}/>
          <Popup
            visible={this.state.visible}
            onMaskClick={() => {
              this.setState({visible: false})
            }}
            position='top'
            bodyStyle={{ minHeight: '150px' }}
          >
            <div className="header_button_frame">
              <button className="button_empty"
                      onClick={() => {
                        history.push('/#/product')
                        window.location.reload()
                      }}>
                <div className={this.state.button_selected[0] === true ? "word_selected" : "word_empty"}>Product</div>
              </button>
              <a href="https://snapshot.org/#/digifun.eth">
                <button className="button_empty"
                  // onClick={() => {
                  //   history.push('/')
                  //   window.location.reload()
                  // }}
                >
                  <div className={this.state.button_selected[1] === true ? "word_selected" : "word_empty"}>DAO</div>
                </button>
              </a>
              <button className="button_empty"
                      onClick={() => {
                        history.push('/#/about')
                        window.location.reload()
                      }}>
                <div className={this.state.button_selected[2] === true ? "word_selected" : "word_empty"}>About</div>
              </button>
            </div>
          </Popup>
        </div>
      </div>
    );
  }
}

export default Header;
