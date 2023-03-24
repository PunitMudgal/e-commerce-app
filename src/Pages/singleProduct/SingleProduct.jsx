import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useProductContext} from '../../context/productContext'
import './singleProduct.css'

// const Api = "https://api.pujakaitem.com/api/products";
export default function SingleProduct() {
  const {getSingleProduct, isSingleLoading, singleProduct} = useProductContext();

  const {id: ids} = useParams();
  console.log(ids)
  console.log(singleProduct)


  useEffect(() => {
    getSingleProduct(`https://api.pujakaitem.com/api/products?id=${ids}`)
  }, [])


  return (
    <div>{SingleProduct.company}</div>
  )
}
