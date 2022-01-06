import React from "react";
import './product.css';
import '../../App.css'
import Header from "../header";
import Footer from "../footer";
import { useNavigate } from 'react-router-dom';

global.products = [
  {
    id: 0,
    imgPath: "product1.png",
    detailPath: ["product1_detail1.png","product1_detail2.png","product1_detail3.png","product1_detail4.png","product1_detail5.png"],
    title: "Evil Snowman",
    url: "https://market.decentraland.org/contracts/0x622a009f894bf7c6ba069a31217be23f327e95de/items/0",
    source: "Polygon",
    prize: 25,
    prize_eth: 2,
    class: "class_head.png",
    sex: "sex_all.svg",
    desc: "Evil Snowman Very cool avatar shape",
    width: "50%",
    detail: "Evil snowman is a funny and scary guy, it attracts you with its round body and lovely appearance, but it may bite off your head when you are not paying attention to it."
  },
  {
    id: 1,
    imgPath: "product2.png",
    detailPath: ["product2_detail1.png","product2_detail2.png","product2_detail3.png","product2_detail4.png","product2_detail5.png"],
    title: "Evil Snowman",
    url: "https://market.decentraland.org/contracts/0x622a009f894bf7c6ba069a31217be23f327e95de/items/1",
    source: "Polygon",
    prize: 25,
    prize_eth: 2,
    class: "class_dress.svg",
    sex: "sex_all.svg",
    desc: "Evil Snowman Very cool avatar shape",
    width: "55%",
    detail: "Evil snowman is a funny and scary guy, it attracts you with its round body and lovely appearance, but it may bite off your head when you are not paying attention to it."
  },
  {
    id: 2,
    imgPath: "product3.png",
    detailPath: ["product3_detail1.png","product3_detail2.png","product3_detail3.png","product3_detail4.png","product3_detail5.png"],
    title: "R·G YEARning",
    url: "https://market.decentraland.org/contracts/0xc2c1efd454d4e8c5f91477f63abc53fae74d2ed3/items/0",
    source: "Polygon",
    prize: 50,
    prize_eth: 2,
    class: "class_dress.svg",
    sex: "sex_male.svg",
    desc: "Evil Snowman Very cool avatar shape",
    width: "80%",
    detail: "DigiFun's first NFT collection by our designer R.G. has been sale on Decentraland. Inspiration from Ninjia and Japanese Haori style with fashion tailoring. "
  },
  {
    id: 3,
    imgPath: "product4.png",
    detailPath: ["product4_detail1.png","product4_detail2.png","product4_detail3.png","product4_detail4.png","product4_detail5.png"],
    title: "R·G YEARning",
    url: "https://market.decentraland.org/contracts/0xc2c1efd454d4e8c5f91477f63abc53fae74d2ed3/items/1",
    source: "Polygon",
    prize: 50,
    prize_eth: 2,
    class: "class_pants.png",
    sex: "sex_male.svg",
    desc: "Evil Snowman Very cool avatar shape",
    width: "65%",
    detail: "DigiFun's first NFT collection by our designer R.G. has been sale on Decentraland. Inspiration from Ninjia and Japanese Haori style with fashion tailoring. "
  }
]

class ProductContentList extends React.Component {
  routerTo(v) {
    this.props.navigate(`/product/detail/${v.id}`, {state: v})
  }

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
            {global.products.map((item, idx) => (
              <div onClick={()=>this.routerTo(item)}>
                <div className="product_card">
                  <div className="product_content_img_frame">
                    <img src={require('../../assets/' + item.imgPath).default} width={item.width}/>
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
              </div>
            ))}
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}

function ProductContent(props) {
  let navigate = useNavigate();
  return <ProductContentList {...props} navigate={navigate} />
}

export default ProductContent;