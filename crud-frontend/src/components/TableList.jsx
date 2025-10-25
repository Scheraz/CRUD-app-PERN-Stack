import axios from 'axios'
import { useState, useEffect } from 'react'

const TableList = ({ handleOpen }) => {
  const [clients, setClients] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/clients')
        setClients(response.data)
      } catch (error) {
        console.error('Error fetching clients:', error.message)
      }
    }
    fetchData()
  }, [])

  // Filter clients based on search term
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.job.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      {/* Search input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by name, email, or job"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => {
              const { id, name, email, job, rate, isactive } = client
              return (
                <tr className="hover:bg-base-300" key={id}>
                  <th>{id}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{job}</td>
                  <td>{rate}</td>
                  <td>
                    <button
                      className={`btn rounded-full w-20 ${
                        isactive ? 'btn-primary' : 'btn-outline-primary'
                      }`}
                    >
                      {isactive ? 'Active' : 'Inactive'}
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleOpen('edit', client)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => console.log('Delete', id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableList
