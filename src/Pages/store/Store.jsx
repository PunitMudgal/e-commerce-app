import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useProductContext } from '../../context/productContext';

export default function Store() {
  // const [posts, setPosts] = useState([]);
 const apiKey = 'https://api.pujakaitem.com/api/products';

 const {myName} = useProductContext()

//  useEffect(() => {
//   axios
//   .get(apiKey)
//   .then((res) => {
//     console.log('response',res)
//     setPosts(res.data)
//     console.log('posts' ,posts)
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//  },[]);

  return (
    <>

    <div className='store-full'>
    <h1>this is my name: {myName}</h1>
    </div>
    </>
  )
}
