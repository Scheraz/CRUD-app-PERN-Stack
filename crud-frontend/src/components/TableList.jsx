const TableList = ({ handleOpen, handleClose }) => {
  let clients = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      job: 'Developer',
      rate: '130',
      isActive: true,
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@gmail.com',
      job: 'Designer',
      rate: '90',
      isActive: false,
    },
    {
      id: 3,
      name: 'Peter Pan',
      email: 'peter@gmail.com',
      job: 'Architect',
      rate: '105',
      isActive: true,
    },
  ]

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => {
            const { id, name, email, job, rate, isActive } = client

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
                      isActive ? 'btn-primary' : 'btn-outline-primary'
                    }`}
                  >
                    {isActive ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleOpen('edit')}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-error">Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default TableList
