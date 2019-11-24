import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg";
import Item3 from "../../images/item3.jpg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpg";
import Item6 from "../../images/item6.jpg";

const initState = {
  items: [
    {
      id: 1,
      title: "Check Pattren Shirt",
      color: "black",
      qty: 1,
      style: "MS12345",
      size: "s",
      price: 110,
      img: Item1
    },
    {
      id: 2,
      title: "Men's V-Neck T-shirt",
      color: "grey",
      qty: 1,
      style: "MS12345",
      size: "s",
      price: 80,
      img: Item2
    },
    {
      id: 3,
      title: "Women's long sleeve T-shirt",
      color: "violet",
      qty: 1,
      style: "MS12345",
      size: "s",
      price: 120,
      img: Item3
    },
    {
      id: 4,
      title: "Mens's Casual white Shirt",
      color: "white",
      qty: 1,
      style: "MS12345",
      size: "s",
      price: 260,
      img: Item4
    },
    {
      id: 5,
      title: "Women's Mandrian Collar Dress",
      color: "blue",
      qty: 1,
      style: "MS12345",
      size: "s",
      price: 160,
      img: Item5
    },
    {
      id: 6,
      title: "Men's Ripped Jeans",
      color: "black",
      qty: 1,
      style: "MS12345",
      size: "s",
      price: 90,
      img: Item6
    }
  ]
};

const cartReducer = (state = initState, action) => {
  const { type, payload = [] } = action;
  switch (type) {
    case "EDIT_ITEM":
      return {
        items: [payload, ...state.items.filter(item => item.id !== payload.id)]
      };
    case "REMOVE_ITEM":
      return { items: state.items.filter(item => item.id !== payload.id) };
    default:
      return state;
  }
};

export default cartReducer;
