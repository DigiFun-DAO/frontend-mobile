import React from "react";
import './product.css';
import '../../App.css'
import Header from "../header";
import Footer from "../footer";

const products = [
  {
    imgPath: "product1.png",
    title: "Evil Snowman",
    url: "https://market.decentraland.org/contracts/0x622a009f894bf7c6ba069a31217be23f327e95de/items/0",
    source: "Polygon",
    prize: 100,
    class: "class_head.png",
    sex: "sex_all.svg"
  },
  {
    imgPath: "product2.png",
    title: "Evil Snowman",
    url: "https://market.decentraland.org/contracts/0x622a009f894bf7c6ba069a31217be23f327e95de/items/1",
    source: "Polygon",
    prize: 100,
    class: "class_dress.svg",
    sex: "sex_all.svg"
  },
  {
    imgPath: "product3.png",
    title: "R·G YEARning",
    url: "https://market.decentraland.org/contracts/0xc2c1efd454d4e8c5f91477f63abc53fae74d2ed3/items/0",
    source: "Polygon",
    prize: 100,
    class: "class_dress.svg",
    sex: "sex_male.svg"
  },
  {
    imgPath: "product4.png",
    title: "R·G YEARning",
    url: "https://market.decentraland.org/contracts/0xc2c1efd454d4e8c5f91477f63abc53fae74d2ed3/items/1",
    source: "Polygon",
    prize: 100,
    class: "class_pants.png",
    sex: "sex_male.svg"
  }
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
            {products.map((item, idx) => (
                <a href={item.url}>
                  <div className="product_card">
                    <div className="product_content_img_frame">
                      <img src={require('../../assets/' + item.imgPath).default} width="40%"/>
                    </div>
                    <div className="product_content_detail_comments">
                      <div className="product_content_detail_comments_intro">
                        <div className="product_content_detail_comments_intro_title">{item.title}</div>
                        <div className="product_content_detail_comments_intro_source">{item.source}</div>
                        <img src={require('../../assets/' + item.class).default}
                             className="product_content_detail_comments_intro_class"/>
                        <img src={require('../../assets/' + item.sex).default}
                             className="product_content_detail_comments_intro_sex"/>
                        <img src={require('../../assets/prize_icon.png').default}
                             className="product_content_detail_prize_icon"/>
                        <span className="product_content_detail_prize_words">{item.prize}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default ProductContent;