import { Modal } from "antd";
import React, { useState } from "react";
import "./header.scss";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [data, setData] = useState([]);
  const getData = () => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    console.log(favorite);
    setData(favorite);
    getData();
  };

  const handleFavorite = () => {
    showModal();
    const [favData, setFavData] = useState([]);
    const getFavorite = async () => {
      let favorite = JSON.parse(localStorage.getItem("favorite"));
      console.log(favorite);
      setFavData(favorite);
    };
    getFavorite();

    console.log(favData);
  };
  return (
    <div>
      <div className="header">
        <div className="menuBtn">
          <button>
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className="headerLeft">
          <div className="logo">
            <img
              src="https://cdn.shopify.com/s/files/1/0651/3157/7585/files/logo_black-Unsen.svg?v=1658817149"
              alt="unsen-logo"
            />
          </div>
          <div className="navbar">
            <ul>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li className="dropdown">
                <a href="">Lookbook</a>
                {/* <div className="dropdownContent">
                <a href="">Shop the Look</a>
                <a href="">LookBook slider</a>
                <a href="">Lookbook section</a>
              </div> */}
              </li>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="">Buy Theme</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="items">
          <div className="search">
            <button>
              <i class="fa-solid fa-search"></i>
            </button>
          </div>
          <div className="account">
            <button>
              <i class="fa-solid fa-user"></i>
            </button>
          </div>
          <div className="favoirites">
            <button>
              <i class="fa-solid fa-heart" onClick={() => handleFavorite()}></i>
              <Modal
                title="Your Favorite Products"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                {data.map((item) => {
                  return (
                    <div className="favoriteProduct">
                      <div className="favoriteProductImage">
                        <img src={item.image} alt="product" />
                      </div>
                      <div className="favoriteProductDetails">
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                      </div>
                    </div>
                  );
                })}
              </Modal>
            </button>
            <span className="favoiritesCount">0</span>
          </div>
          <div className="basket">
            <button>
              <i class="fa-solid fa-shopping-bag"></i>
            </button>
            <span className="basketCount">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
