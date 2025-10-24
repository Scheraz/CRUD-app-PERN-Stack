import { useState } from 'react'
import './App.css'
import ModelForm from './components/ModelForm'
import Navbar from './components/Navbar'
import TableList from './components/TableList'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalMode, setModalMode] = useState('add')

  const handleOpen = (mode) => {
    setIsOpen(true)
    setModalMode(mode)
  }

  const handleSubmit = () => {
    if (modalMode === 'add') {
      console.log('Modal mode add')
    } else {
      console.log('Modal mode edit')
    }
  }

  return (
    <>
      <Navbar onOpen={() => handleOpen('add')} />
      <TableList handleOpen={handleOpen} />
      <ModelForm
        isOpen={isOpen}
        mode={modalMode}
        onSubmit={handleSubmit}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default App
