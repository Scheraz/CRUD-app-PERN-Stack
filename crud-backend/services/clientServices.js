import { query } from '../db/db.js'

export const getClients = async () => {
  const result = await query('SELECT * FROM clients_table')
  return result.rows
}

export const createClient = async (clientData) => {
  const { name, email, job, rate, isactive } = clientData

  const result = await query(
    `INSERT INTO clients_table (name, email, job, rate, isactive)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [name, email, job, Number(rate), isactive === 'true' || isactive === true]
  )
  return result.rows[0]
}

export const updateClient = async (id, clientData) => {
  const { name, email, job, rate, isactive } = clientData

  const result = await query(
    `UPDATE clients_table
     SET name = $1,
         email = $2,
         job = $3,
         rate = $4,
         isactive = $5
     WHERE id = $6
     RETURNING *`,
    [
      name,
      email,
      job,
      Number(rate),
      isactive === 'true' || isactive === true,
      Number(id),
    ]
  )

  return result.rows[0] // undefined if no row matched
}

export const deleteClient = async (clientId) => {
  const { rowCount } = await query(`DELETE FROM clients_table WHERE id = $1`, [
    Number(clientId),
  ])
  return rowCount > 0
}

export const searchClients = async (searchTerm) => {
  const { rows } = await query(
    `SELECT * FROM clients_table 
     WHERE name ILIKE $1 OR email ILIKE $1`,
    [`%${searchTerm}%`]
  )
  return rows
}
