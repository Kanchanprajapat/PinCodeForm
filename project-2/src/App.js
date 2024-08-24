import React, { useState } from 'react'
import PincodeForm from './Components/PincodeForm'
import PincodeDetails from './Components/PincodeDetails'
import './App.css'

const App = () => {
  const [pincodeData, setPincodeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');
  const fetchPincodeData = async (pincode) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await response.json();
      if(data[0].Status === 'Error') {
        setError("No data found for this pincode.");
        setPincodeData([]);
      } else {
        setPincodeData(data[0].PostOffice);
      }
    } catch (error) {
      setError("An error occured while fetching the data.");
    } finally {
      setLoading(false);
    }
  }
  const filteredData = pincodeData.filter(PostOffice => PostOffice.Name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div className='App'>
      <PincodeForm onLookup={fetchPincodeData} />
      {loading && <div className='loader'>Loading...</div>}
      {error && <div className='error'>{error}</div>}
      {!loading && !error && (
        <PincodeDetails pincodeData = {filteredData} filter = {filter} setFilter = {setFilter} />
      )}
      {!loading && !error && filteredData.length === 0 && pincodeData.length > 0 && (
        <div className='no-results'>Couldn't find the postal data you're looking for...</div>
      )}
    </div>
  )
}

export default App
