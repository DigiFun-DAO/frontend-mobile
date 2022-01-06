import React from "react"
import './product.css'
import '../../App.css'
import '../product/productContent'
import Header from "../header";
import Footer from "../footer";

class ProductDetail extends React.Component {
  constructor(props, context) {
    super(props, context)
    const strs = window.location.href.split('/')
    this.state = global.products.find(iterm => iterm.id == strs[strs.length - 1])
    this.state.button_selected = false
  }

  render() {
    return (
      <div>
        <Header/>
        <div className='product_item_frame'>
          <div className='product_item_frame_absolute'>
            <div className='product_item_photo'>
              <img src={require('../../assets/' + this.state.imgPath).default} width={this.state.width}/>
            </div>
            <div className='product_item_photo_title'>{this.state.title}</div>
            <div className='product_item_icons'>
              <img src={require('../../assets/' + this.state.class).default}
                   className="product_item_icon1"/>
              <img src={require('../../assets/' + this.state.sex).default}
                   className="product_item_icon2"/>
            </div>
            <div className='product_desc' style={{marginTop: '140px'}}>
              DESCRIPTION
            </div>
            <div className='product_words' style={{marginTop: '170px'}}>
              {this.state.desc}
            </div>
            <div className='product_desc' style={{marginTop: '240px'}}>
              NETWORK
            </div>
            <div className='product_words' style={{marginTop: '270px'}}>
              {this.state.source}
            </div>
            <div className='product_desc' style={{marginTop: '340px'}}>
              PRICE
            </div>
            <div className='product_prize_icons'>
              <img src={require('../../assets/prize_icon.png').default}
                   className="product_content_detail_prize_icon"
                   style={{marginLeft: '0px'}}/>
              <span className="product_content_detail_prize_words">{this.state.prize}</span>
              <span className='product_prize_split'>/</span>
              <img src={require('../../assets/prize_eth_icon.png').default}
                   className="product_content_detail_prize_icon"
                   style={{marginLeft: '38px'}}/>
              <span className="product_content_detail_prize_words_eth">{this.state.prize_eth}</span>
            </div>
            <a href={this.state.url}>
              <button className={this.state.button_selected === true ? "buy_button_selected" : "buy_button_empty"}
                      style={{cursor: 'pointer'}}
                      onMouseEnter={() => {
                        this.setState({button_selected: true})
                      }}
                      onMouseLeave={() => {
                        this.setState({button_selected: false})
                      }}>
                <div className="buy_button_words">BUY</div>
              </button>
            </a>
            <div className="line1"/>
            <div className="line2"/>
            <div className="product_details">Product Details</div>
            <div className="product_detail_words">{this.state.detail}</div>
            <div className="product_detail_photos">
              {this.state.detailPath.map(item => (
                <img src={require('../../assets/' + item).default}/>
              ))}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default ProductDetail;