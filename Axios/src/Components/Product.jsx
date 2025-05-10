import React from 'react'
import '../style/card.css'

function Product( {product} ) {
  return (
    <div className='col-md-3 mb-2'>
            <div className="card">
                <img className="card-img-top" src={product.images[0]} alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">{product.title.slice(0, 16)}</h5>
                    <p className="card-text">{product.description.slice(0,60)}</p>
                    <a href="#" className="btn btn-primary">{product.price}</a>
                </div>
            </div>
        </div>
  )
}

export default Product