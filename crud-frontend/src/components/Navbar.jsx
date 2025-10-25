const Navbar = ({ onOpen, onSearch }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm p-4">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Clients</a>
      </div>

      <div className="navbar-center flex-1 justify-center">
        <input
          type="text"
          placeholder="Search by name, email, or job"
          className="input input-bordered w-full max-w-md"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="navbar-end">
        <button className="btn btn-primary" onClick={() => onOpen('add')}>
          Add Client
        </button>
      </div>
    </div>
  )
}

export default Navbar
