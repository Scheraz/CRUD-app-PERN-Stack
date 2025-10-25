import * as clientService from '../services/clientServices.js'

export const getClients = async (req, res) => {
  try {
    const clients = await clientService.getClients()
    res.status(200).json(clients)
  } catch (error) {
    console.error('Error fetching clients:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const createClient = async (req, res) => {
  try {
    const clientData = req.body
    const newClient = await clientService.createClient(clientData)
    res.status(201).json(newClient)
  } catch (error) {
    console.error('Error creating client:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const updateClient = async (req, res) => {
  try {
    const clientId = Number(req.params.id)
    if (isNaN(clientId)) {
      return res.status(400).json({ message: 'Invalid client ID' })
    }

    const clientData = req.body
    const updatedClient = await clientService.updateClient(clientId, clientData)

    if (!updatedClient) {
      return res.status(404).json({ message: 'Client not found' })
    }

    res.status(200).json(updatedClient)
  } catch (error) {
    console.error('Error updating client:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const deleteClient = async (req, res) => {
  try {
    const clientId = Number(req.params.id)
    if (isNaN(clientId)) {
      return res.status(400).json({ message: 'Invalid client ID' })
    }

    const deleted = await clientService.deleteClient(clientId)
    if (!deleted) {
      return res.status(404).json({ message: 'Client not found' })
    }

    res.status(200).json({ message: 'Client deleted successfully' })
  } catch (error) {
    console.error('Error deleting client:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const searchClients = async (req, res) => {
  try {
    const searchTerm = req.query.q || '' // default empty string if missing
    const clients = await clientService.searchClients(searchTerm)
    res.status(200).json(clients)
  } catch (error) {
    console.error('Error searching clients', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
