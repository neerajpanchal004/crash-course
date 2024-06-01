// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'

// const Ticket = () => {
//   const [data, setData] = useState([])
//   async function fetchData() {
//     try {
//       let res = await axios.get('http://localhost:3000/tickets')
//       let response = res.data;
//       setData(response)
//       console.log(response)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   useEffect(() => {
//     fetchData()
//   }, [])
//   if(data.length==0){
//     return <h1>no data</h1>
//   }
//   const {id,title,priority}=data;
//   return (
//     <div>
//       <div><Link to='/createticket'>Create Ticket</Link></div>
//       <div>
        
//         <p>{id}</p>
//         <h2>{title}</h2>
//         <h2>{priority}</h2>
//       </div>
//     </div>
//   )
// }

// export default Ticket


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Ticket = () => {
  const [data, setData] = useState([])

  async function fetchData() {
    try {
      let res = await axios.get('http://localhost:3000/tickets')
      let response = res.data
      setData(response)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (data.length === 0) {
    return <h1 className="text-center text-2xl mt-5">No data</h1>
  }

  return (
    <div className="container mx-auto p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <Link
          to='/createticket'
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Ticket
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Title</th>
              <th className="px-4 py-2 border-b">Priority</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{ticket.id}</td>
                <td className="px-4 py-2 border-b">{ticket.title}</td>
                <td className="px-4 py-2 border-b">{ticket.Priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Ticket
