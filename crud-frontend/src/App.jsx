import { useState } from 'react'
import './App.css'
import ModelForm from './components/ModelForm'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import axios from 'axios'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalMode, setModalMode] = useState('add')
  const [searchTerm, setSearchTerm] = useState('')
  const [clientData, setClientData] = useState(null)

  const handleOpen = (mode, data = null) => {
    setModalMode(mode)
    setClientData(data)
    setIsOpen(true)
  }

  const handleSubmit = async (data) => {
    try {
      if (modalMode === 'add') {
        const response = await axios.post(
          'http://localhost:5000/api/clients',
          data
        )
        console.log('Client added:', response.data)
      } else if (modalMode === 'edit' && clientData) {
        const response = await axios.put(
          `http://localhost:5000/api/clients/${clientData.id}`,
          data
        )
        console.log('Client updated:', response.data)
      }
    } catch (error) {
      console.error('Error submitting client:', error)
    }
    setIsOpen(false)
  }

  return (
    <>
      <Navbar onOpen={() => handleOpen('add')} onSearch={setSearchTerm} />
      <TableList handleOpen={handleOpen} searchTerm={searchTerm} />
      <ModelForm
        isOpen={isOpen}
        mode={modalMode}
        clientData={clientData}
        onSubmit={handleSubmit}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default App
