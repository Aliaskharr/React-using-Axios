import React from 'react';
import { useEffect, useState } from 'react';
import Product from './Product';

import axios from 'axios';
function Home() {


  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState("All");
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(res => {
      console.log(res.data.products);
      setProducts(res.data.products);
    })

    axios.get('https://dummyjson.com/products/categories').then(res => {
      setCategories(res.data);
    })

  }, []);



  // function categoryChanged(e){
  //   console.log(e.target.innerText.toLowerCase());
  //   setCat(e.target.innerText.toLowerCase());
  // }

  return (
    <div className='row mt-2'>

      <div className="col-md-3">
        <div className="list-group">
          <a href="#" onClick={() => { 
            setCat("All");
            setPage(0);
            setSearchText("");
            }} class={"list-group-item list-group-item-action" + (cat == "All" ? " active" : "")}>All</a>
          {
            categories.map(category => {
              return <a href="#" onClick={() => { 
                setCat(category.name.toLowerCase());
                setPage(0);
                setSearchText("");

              }} class={"list-group-item list-group-item-action" + (cat == category.name.toLowerCase() ? " active" : "")}>{category.name}</a>
            })
          }

        </div>

      </div>

      <div className="col-md-9">
        <div className="row">

          <form className="d-flex mb-3">
                <div className="input-group">
                    <input className="searchBox form-control form-control-lg" type="search" placeholder="Search" aria-label="Search"/>
                    <button onClick={() => { 
                      setSearchText(document.querySelector('.searchBox').value);
                      document.querySelector('.searchBox').value = "";
                      setPage(0);
                    }}
                      className="btn btn-primary px-4" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                </div>
            </form>
          {
            products.filter((p) => {
              return p.category == cat || cat == "All"
            }).filter((prod) => {
              return searchText == "" ? prod  : prod.title.ToLowerCase().startsWith(searchText);
            }).slice(page * 6, page * 6 + 6).map(product => {
              return <Product product={product} key={product.id} />
            })
          }
        </div>
        <ul className="pagination mt-3">
          {
            [...Array(Math.ceil(products.filter((p) => {
              return p.category == cat || cat == "All"
            }).filter((prod) => {
              return searchText == "" ? prod  : prod.title.ToLowerCase().startsWith(searchText);
            }).length/6))].map((i, index) => {
              return <li onClick={() => {setPage(index)}} className={"page-item" + (page == index ? " active" : "")}><a class="page-link" href="#">{index+1}</a></li>
            })
          }
        </ul>
      </div>


    </div>
  )
}

export default Home;