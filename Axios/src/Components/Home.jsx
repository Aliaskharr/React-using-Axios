import React from 'react';
import { useEffect, useState } from 'react';
import Product from './Product';

import axios from 'axios';
function Home() {


  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState("All")

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(res => {
      // console.log(res.data.products);
      setProducts(res.data.products);
    })

    axios.get('https://dummyjson.com/products/categories').then(res => {
      setCategories(res.data);
    })

  }, [])

  // function categoryChanged(e){
  //   console.log(e.target.innerText.toLowerCase());
  //   setCat(e.target.innerText.toLowerCase());
  // }

  return (
    <div className='row mt-2'>

      <div className="col-md-3">
        <div class="list-group">
        <a href="#" onClick={() => {setCat("All")}} class={"list-group-item list-group-item-action" + (cat == "All" ? " active" : "")}>All</a>
        {
            categories.map(category => {
              console.log(category.name.toLowerCase());
              return <a href="#"  onClick={() => {setCat(category.name.toLowerCase())}} class={"list-group-item list-group-item-action" + (cat == category.name.toLowerCase() ? " active" : "")}>{category.name}</a>
            })
          }
          
        </div>
        {/* <ul class="list-group">
          {
            categories.map(category => {
              return <li class="list-group-item">{category.name}</li>
            })
          }

        </ul> */}
      </div>

      <div className="col-md-9">
        <div className="row">
          {
            products.filter((p) => {
              return p.category == cat || cat == "All"
            }).map(product => {
              return <Product product={product} key={product.id} />
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Home;