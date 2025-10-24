import { useState } from 'react'

const ModelForm = ({ isOpen, onClose, mode, onSubmit }) => {
  const [rate, setRate] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [job, setJob] = useState('')
  const [status, setStatus] = useState(false)

  const handleStatusChange = (e) => {
    setStatus(e.target.value === 'Active')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg py-4">
          {mode === 'edit' ? 'Edit client' : 'Client details'}
        </h3>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <div className="form-control w-full">
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>

            <div className="form-control w-full">
              <select
                value={status ? 'Active' : 'Inactive'}
                className="select select-bordered w-full"
                onChange={handleStatusChange}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div className="modal-action">
            <button type="button" className="btn" onClick={onClose}>
              Close
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                onSubmit({ name, email, job, rate, status })
                onClose()
              }}
            >
              {mode === 'edit' ? 'Save changes' : 'Add client'}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default ModelForm
