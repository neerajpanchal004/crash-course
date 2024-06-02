import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState([])
    const {id}= useParams();
    console.log(id)
    async function fetchData(){
        try {
            let res = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
            let response = res.data
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    const open = ()=>setIsOpen(true)
    const close = ()=>setIsOpen(false)

    const confirm = ()=>{
        close()
        alert("Item is added in cart")
    }


  
    if(!data){
        return <h1>Loading....</h1>
    }
  return (
    <div className='w-96 h-96 p-10 rounded-xl bg-slate-400 m-auto'>
        <h1>Product-Details</h1>
        
         <div> 
                <h1>TITLE: {data.title}</h1>
                <p>CATEGORY: {data.category}</p>
                <p>PRICE: {data.price}</p>
                <button className='bg-blue-500 py-1 px-3 rounded-lg' onClick={open}>Add to Cart</button>

                
               {isOpen && <div className=' flex justify-end mt-20 '>
                <p>you want to product in cart</p>
                <button className='bg-red-500 px-2 py-1 rounded-lg mx-5' onClick={close}>cancel</button>
                <button className='bg-blue-500 px-2 py-1 rounded-lg' onClick={confirm}>Confirm</button>

                </div>}
            </div>
        
    </div>
  )
}

export default ProductDetails