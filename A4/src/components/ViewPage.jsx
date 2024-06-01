
import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ViewPage = () => {
  const { id } = useParams()
  const [ticket, setTicket] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const Navigate = useNavigate()

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/tickets/${id}`)
        setTicket(res.data)
      } catch (err) {
        setError('Error fetching ticket data')
      } finally {
        setLoading(false)
      }
    }
    
    fetchTicket()
  }, [id])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/tickets/${id}`)
      Navigate('/')
    } catch (error) {
      setError('Error deleting ticket')
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!ticket) {
    return <div>No ticket data found</div>
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Ticket Details</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Ticket ID: {ticket.id}</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Title</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{ticket.title}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Priority</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{ticket.Priority}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{ticket.description}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Assignee</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{ticket.assignee}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{ticket.status}</dd>
            </div>
          </dl>
        </div>
        <div className="px-4 py-5 sm:px-6 flex justify-end space-x-3">
          
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewPage
