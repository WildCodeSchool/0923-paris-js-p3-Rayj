import React from "react";
import rh from "../../assets/category/8.png";
import technique from "../../assets/category/7.png";
import security from "../../assets/category/6.png";
import "./category.css";

function Category() {
  return (
    <>
      <center>Category</center>
      <section className="categorie">
        <div className="rh">
          <button type="button" className="categories">
            <img src={rh} alt="Ressources Humaines" />
          </button>
        </div>
        <div className="security">
          <button type="button" className="categories">
            <img src={security} alt="Sécurité" />
          </button>
        </div>
        <div className="technique">
          <button type="button" className="categories">
            <img src={technique} alt="Techniques" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Category;
