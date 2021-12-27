import React from "react";
import './product.css';
import '../../App.css'
import Header from "../header";
import Footer from "../footer";

const products = [
  {
    imgPath: "../../assets/digi/product1.png", title: "Evil Snowman",
    source: "Polygon", prize: 100, class: "../assets/digi/class_dress.svg", sex: "../assets/digi/sex_male.svg"
  },
  {
    imgPath: "../../assets/digi/product2.png", title: "Evil Snowman",
    source: "Polygon", prize: 100, class: "../assets/digi/class_dress.svg", sex: "../assets/digi/sex_male.svg"
  },
  {
    imgPath: "../../assets/digi/product3.png", title: "Evil Snowman",
    source: "Polygon", prize: 100, class: "../assets/digi/class_dress.svg", sex: "../assets/digi/sex_male.svg"
  },
  {
    imgPath: "../../assets/digi/product1.png", title: "Evil Snowman",
    source: "Polygon", prize: 100, class: "../assets/digi/class_dress.svg", sex: "../assets/digi/sex_male.svg"
  },
]

class ProductContent extends React.Component {
  render() {
    return (
      <div className="product_content_frame">
        <Header/>
        <div className="product_content" hidden={false}>
          <div className="product_content_words">
            <div className="product_content_words_title">Our products</div>
            <div className="product_content_words_comment">
              The creative products of DigiFun are the result of the collective wisdom of the community.
            </div>
          </div>
          <div className="product_card_frame">
            {/*{products.map((item, idx) => (*/}
            <a href="https://market.decentraland.org/contracts/0x622a009f894bf7c6ba069a31217be23f327e95de/items/0">
              <div className="product_card">
                <div className="product_content_img_frame">
                  <img src={require('../../assets/product1.png').default} width="40%"/>
                </div>
                <div className="product_content_detail_comments">
                  <div className="product_content_detail_comments_intro">
                    <div className="product_content_detail_comments_intro_title">Evil Snowman</div>
                    <div className="product_content_detail_comments_intro_source">Polygon</div>
                    <img src={require('../../assets/class_head.png').default}
                         className="product_content_detail_comments_intro_class"/>
                    <img src={require('../../assets/sex_all.svg').default}
                         className="product_content_detail_comments_intro_sex"/>
                    <img src={require('../../assets/prize_icon.png').default}
                         className="product_content_detail_prize_icon"/>
                    <span className="product_content_detail_prize_words">100</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://market.decentraland.org/contracts/0x622a009f894bf7c6ba069a31217be23f327e95de/items/1">
              <div className="product_card">
                <div className="product_content_img_frame">
                  <img src={require('../../assets/product2.png').default} width="50%"/>
                </div>
                <div className="product_content_detail_comments">
                  <div className="product_content_detail_comments_intro">
                    <div className="product_content_detail_comments_intro_title">Evil Snowman</div>
                    <div className="product_content_detail_comments_intro_source">Polygon</div>
                    <img src={require('../../assets/class_dress.svg').default}
                         className="product_content_detail_comments_intro_class"/>
                    <img src={require('../../assets/sex_all.svg').default}
                         className="product_content_detail_comments_intro_sex"/>
                    <img src={require('../../assets/prize_icon.png').default}
                         className="product_content_detail_prize_icon"/>
                    <span className="product_content_detail_prize_words">100</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://market.decentraland.org/contracts/0xc2c1efd454d4e8c5f91477f63abc53fae74d2ed3/items/0">
              <div className="product_card">
                <div className="product_content_img_frame">
                  <img src={require('../../assets/product3.png').default} width="80%"/>
                </div>
                <div className="product_content_detail_comments">
                  <div className="product_content_detail_comments_intro">
                    <div className="product_content_detail_comments_intro_title">R·G YEARning</div>
                    <div className="product_content_detail_comments_intro_source">Polygon</div>
                    <img src={require('../../assets/class_dress.svg').default}
                         className="product_content_detail_comments_intro_class"/>
                    <img src={require('../../assets/sex_male.svg').default}
                         className="product_content_detail_comments_intro_sex"/>
                    <img src={require('../../assets/prize_icon.png').default}
                         className="product_content_detail_prize_icon"/>
                    <span className="product_content_detail_prize_words">100</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://market.decentraland.org/contracts/0xc2c1efd454d4e8c5f91477f63abc53fae74d2ed3/items/1">
              <div className="product_card">
                <div className="product_content_img_frame">
                  <img src={require('../../assets/product4.png').default} width="60%"/>
                </div>
                <div className="product_content_detail_comments">
                  <div className="product_content_detail_comments_intro">
                    <div className="product_content_detail_comments_intro_title">R·G YEARning</div>
                    <div className="product_content_detail_comments_intro_source">Polygon</div>
                    <img src={require('../../assets/class_pants.png').default}
                         className="product_content_detail_comments_intro_class"/>
                    <img src={require('../../assets/sex_male.svg').default}
                         className="product_content_detail_comments_intro_sex"/>
                    <img src={require('../../assets/prize_icon.png').default}
                         className="product_content_detail_prize_icon"/>
                    <span className="product_content_detail_prize_words">100</span>
                  </div>
                </div>
              </div>
            </a>
            {/*))}*/}

          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default ProductContent;