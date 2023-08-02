import React ,{useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open,setOpen]= useState(false);
  const products =useSelector(state=>state.cart.products);


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
        
          <div className="item">
            <Link className ="link" to="/products/3">Nam</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/4">Nữ</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/5">Trẻ Em</Link>
          </div>
          
        </div>
        <div className="center">
          <Link className ="link" to="/">G U C C I</Link>
        </div>
        <div className="right">
       
          <div className="item">
            <Link className ="link" to="/">Chúng Tôi</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Liên Hệ</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;