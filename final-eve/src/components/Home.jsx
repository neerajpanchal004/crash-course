import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([])
  const [sort, setSort] = useState('asc')
  const [filter, setFilter] = useState('men')
  async function fetchData(){
    let res = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${filter}&sort=price&order=${sort}`)
    let response = res.data;
    setData(response.data)
  }
  useEffect(()=>{
    fetchData()
  },[sort,filter])
  if(data.length == 0){
    return <div>Loading...</div>
  }
  return (
    <div>
      <div className='m-10 flex justify-end gap-10 '>
      <select value={sort} onChange={(e)=>setSort(e.target.value)}>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>

      </select>

      <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
        <option value="home decor">Home decor</option>


      </select>
      </div>
      

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
      
      {data && data.map((product)=>{
        return(
         
          <div key={product.id} className='border-[1px] border-black p-5'>
            <h1>Title:{product.title}</h1>
            <p>Category:{product.category}</p>
            <p>Price:{product.price}</p>
            <Link className='bg-blue-500 py-1 px-2 rounded-lg  mt-10' to={`/productdetails/${product.id}`} >More Details</Link>

          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Home