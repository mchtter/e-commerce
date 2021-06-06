import Cap from "../../../images/cap.png";
import Shirt from "../../../images/shirt.png";
import Shoes from "../../../images/shoes.png";
import Pants from "../../../images/pants.png";
import Short from "../../../images/short.png";
import Tunic from "../../../images/tunic.png";
import Jacket from "../../../images/jacket.png";
import Glasses from "../../../images/glasses.png";
import Scarf from "../../../images/scarf.png";

const ItemsState = {
  items: [
    {
      img: Cap,
      price: 49.90,
      title: "Cap",
      title2: "cap-cart"
    },
    {
      img: Shirt,
      price: 79.50,
      title: "T-Shirt",
      title2: "shirt-cart"
    },
    {
      img: Pants,
      price: 99.50,
      title: "Pant",
      title2: "pant-cart"
    },
    {
      img: Shoes,
      price: 130,
      title: "Shoes",
      title2: "shoe-cart"
    },
    {
      img: Tunic,
      price: 85,
      title: "Tunic",
      title2: "tunic-cart"
    },
    {
      img: Jacket,
      price: 149.90,
      title: "Jacket",
      title2: "jacket-cart"
    },
    {
      img: Glasses,
      price: 350,
      title: "Glasses",
      title2: "glass-cart"
    },
    {
      img: Scarf,
      price: 25.50,
      title: "Scarf",
      title2: "scarf-cart"
    },
    {
      img: Short,
      price: 34.90,
      title: "Short",
      title2: "short-cart"
    }
  ],
  cart: [],
  cartTotal: 0,
  sum: []
};

export default ItemsState;
