import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    // Fetch data from backend API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:5000/test')
        setApiData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <h2>Welcome to PulseVote</h2>
      {apiData && (
        <div>
          <p>Backend Status: {apiData.status}</p>
          <p>Message: {apiData.message}</p>
          <p>Timestamp: {apiData.timestamp}</p>
        </div>
      )}
    </>
  )
}

export default App
