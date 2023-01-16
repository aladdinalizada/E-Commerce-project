import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// import { increment } from "../../redux/slice/addTiFavorite";
import "./index.scss";
const TopProducts = () => {
  // Fetch data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    try {
      setLoading(true);
      let response = await axios.get("http://localhost:8080/products");
      setLoading(false);
      setData(await response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  // Redux
  // const count = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  // handle Add to Favorite
  const handleAddToFavorite = (e) => {
    // dispatch(increment());
    // console.log(e.target.parentElement.parentElement.id);
    // console.log(data);
    let id = e.target.parentElement.parentElement.id;
    console.log(id);
    console.log(data[id - 1]);
    let favorite = data[id - 1];
    localStorage.setItem("favorite", JSON.stringify(favorite));
  };
  return (
    <div>
      <div className="topProducts">
        <div className="topProductsHead">
          <div className="left">
            <h4>Top</h4>
            <h4>products</h4>
          </div>
          <div className="right">
            <ul>
              <li>Dresses</li>
              <li>Tops</li>
              <li>Basics</li>
              <li>Shirts & Blouses</li>
              <li>Pants</li>
            </ul>
          </div>
        </div>
        <div className="topProductsbody">
          <div className="cards">
            {data.slice(0, 4).map((elem) => {
              return (
                <div className="card" key={elem.id} id={elem.id}>
                  <div className="addtoFavorite">
                    <i
                      class="fa-regular fa-heart"
                      onClick={(e) => handleAddToFavorite(e)}
                    ></i>
                  </div>
                  <img src={elem.image} alt={elem.title} />
                  <div className="cardTitle">
                    <h4>{elem.title}</h4>
                    <p>${elem.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="viewAll">
            <button>
              {/* <NavLink to="/details" t>View All</NavLink> */}
              {/* Naviagte To Details Page */}
              <Link to="/details">View All</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
