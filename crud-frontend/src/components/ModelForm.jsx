import { useState, useEffect } from 'react'

const ModelForm = ({ isOpen, onClose, mode, onSubmit, clientData }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [job, setJob] = useState('')
  const [rate, setRate] = useState('')
  const [status, setStatus] = useState(false)

  // Pre-fill form in edit mode
  useEffect(() => {
    if (mode === 'edit' && clientData) {
      setName(clientData.name)
      setEmail(clientData.email)
      setJob(clientData.job)
      setRate(clientData.rate)
      setStatus(clientData.isactive)
    } else {
      // reset form on add
      setName('')
      setEmail('')
      setJob('')
      setRate('')
      setStatus(false)
    }
  }, [mode, clientData, isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name,
      email,
      job,
      rate: Number(rate),
      isactive: status,
    }
    onSubmit(data)
  }

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg py-4">
          {mode === 'edit' ? 'Edit Client' : 'Add Client'}
        </h3>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />

          <div className="flex gap-3">
            <input
              type="number"
              className="input input-bordered w-full"
              placeholder="Rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <select
              className="select select-bordered w-full"
              value={status ? 'Active' : 'Inactive'}
              onChange={(e) => setStatus(e.target.value === 'Active')}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="modal-action">
            <button type="button" className="btn" onClick={onClose}>
              Close
            </button>
            <button type="submit" className="btn btn-success">
              {mode === 'edit' ? 'Save Changes' : 'Add Client'}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default ModelForm
