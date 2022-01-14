import * as React from 'react';
import Product from "./product";

class DAO extends React.Component {
  render() {
    return (
      <div className="DAO_frame" id="DAO" name="DAO">
        <div className="DAO_words_frame">
          <div className="DAO_inner_words_frame">
            <div className="DAO_title">DAO</div>
            <div className="DAO_comments">Everyone can be a creator.</div>
            <div className="DAO_comments">Suggest your idea, vote for your favorite</div>
            <div className="DAO_comments">creative product and make them a reality.</div>
          </div>
        </div>
        <img className="comment2" src={require("../../assets/comment2.png").default}/>
        <img className="comment3" src={require("../../assets/comment3.png").default}/>
        <img className="saly" src={require("../../assets/saly1.png").default}/>
        <a href="https://snapshot.org/#/digifun.eth">
          <img className="DAO_button"
               src={require("../../assets/Button-DAO-Voting.svg").default}
          />
        </a>
      </div>
    );
  }
}
export default DAO;