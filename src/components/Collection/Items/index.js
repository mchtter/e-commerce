import React, { Component } from "react";
import Cart from "../../../Cart/Cart";
import "./index.css";
import $ from "jquery";
import ItemsState from "./state";

class Items extends Component {
  state = ItemsState;

  addItem = e => {
    // Element seçimi
    var pickedElement = e.target.parentElement.children[1].innerHTML;
    // State'e kopyala
    var copyState = { ...this.state };
    // Seçim boşsa diziyi döndürme
    var updateCopy = copyState.items.filter(el => {
      return el.title !== pickedElement;
    });
    // Seçim doluysa diziyi döndür
    var updateCopyCart = copyState.items.filter(el => {
      return el.title === pickedElement;
    });

    // Sepet State Güncelle
    copyState.cart.push(updateCopyCart[0]);

    // Öğenin fiyatını toplam dizisine ekle
    copyState.sum.push(updateCopyCart[0].price);

    // Toplam öğe fiyatını hesapla
    var sum = copyState.sum.reduce((a, b) => a + b, 0);

    // Toplam öğe fiyatını güncelle
    copyState.cartTotal = sum;

    this.setState({
      items: updateCopy,
      cart: copyState.cart,
      cartTotal: copyState.cartTotal
    });
  };

  deleteItemFromCart = e => {
    // Seçilen öğeyi bir değişkene kaydet
    var pickedElement = e.target.parentElement.children[0].alt;
    // Düzenlemek için durumu kopyala
    var copyState = { ...this.state };

    // Yeni sepet ürünlerini bir değişkene kaydet
    var updatedItems = copyState.cart.filter(el => {
      return el.title !== pickedElement;
    });
    // Sepetten çıkarmak için seçilen öğe
    var pickedItem = copyState.cart.filter(el => {
      return el.title === pickedElement;
    });

    // Seçilen öğenin fiyatını seç
    var itemPrice = pickedItem[0].price;
    // Fiyatı toplam dizisinden çıkar
    var sumArr = copyState.sum.filter(el => {
      return el !== itemPrice;
    });
    // Yeni toplam fiyatı hesapla
    var sum = sumArr.reduce((a, b) => a + b, 0);

    // Son durum için copyState güncelle
    copyState.cartTotal = sum;
    copyState.sum = sumArr;
    copyState.cart = updatedItems;
    copyState.items.push(pickedItem[0]);

    // Güncellenmiş durumu uygula
    this.setState({
      cart: copyState.cart,
      sum: copyState.sum,
      cartTotal: copyState.cartTotal,
      items: copyState.items
    });
  };

  addClassHover = function(e) {
    $(e.target).addClass("jello");
  };
  removeClassHover = function(e) {
    $(e.target).removeClass("jello");
  };

  shouldComponentUpdate() {
    return true;
  }
  render() {
    var rendering = this.state.items.map(el => {
      return (
        <div>
          
          <div className="wrap-item" key={el.title}>
            
            <img src={el.img} alt={el.title} />
            <p className="title-item">{el.title}</p>
            <p className="price-item">Price</p>
            <p className="actual-price-item">{el.price}$</p>
            <p
              onMouseLeave={this.removeClassHover}
              onMouseEnter={this.addClassHover}
              onClick={this.addItem}
              className="add-cart-item animated"
            >
              Add to CART
            </p>
          <a href="/favorites" className="favorite">&#9734;</a>
          </div>
        </div>
      );
    });
    return (
      <Cart>
        {rendering}
        <div className="break-row"></div>
        <div className="my-cart-div">
          <p className="cart-title">CART</p>
          <p className="cart-price">
            Total Price: <span>{this.state.cartTotal}$</span>
          </p>
          <div className="cart-picking-item">
            {this.state.cart.map(el => {
              return (
                <div key={el.title2} className="cart-picking-inside">
                  <img src={el.img} alt={el.title} />
                  <p
                    onClick={this.deleteItemFromCart}
                    className="some-bul-text"
                  >
                    -
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Cart>
    );
  }
}

export default Items;
