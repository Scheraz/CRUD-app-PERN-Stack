const Navbar = ({ onOpen }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm p-4">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Clients</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-48 md:w-auto"
          />
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary" onClick={() => onOpen('add')}>
          Add Client
        </a>
      </div>
    </div>
  )
}
export default Navbar
