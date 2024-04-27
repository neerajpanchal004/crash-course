import axios from 'axios'
import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'

const App = () => {
  const [data, setData] = useState([])
  async function fetchData(){
    try {
      let res = await axios.get('https://fakestoreapi.com/products')
      setData(res.data)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
})
if(data.length==0){
  return <h1>Loading...</h1>
}
  
  return (
    <>
    <Navbar/>
    <div className='grid grid-cols-4 gap-10 m-10 '>
      {data.map((product)=>{
        const {id,title,image,price}=product;
        return <div key={id} className='border-2 border-black rounded-xl p-8'>
           <img src={ image} alt="product-image" className='w-72 h-72 '/>
           <h1>{title}</h1>
           <h1>price:{price}</h1>
          </div>
      })}
    </div>
    </>
  )
}

export default App