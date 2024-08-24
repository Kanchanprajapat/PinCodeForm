import React from 'react'

const PincodeDetails = ({pincodeData, filter, setFilter}) => {
  return (
    <div className='pincode-details'>
        <h2>Details</h2>
        <input type='text' value={filter} onChange={(e) => setFilter(e.target.value)} placeholder='Filter'/>
        <div className='pincode-list'>
            {pincodeData.map((office, index) => (
                <div key={index} className='pincode-card'>
                    <p><strong>Name:</strong> {office.Name}</p>
                    <p><strong>Branch type:</strong> {office.BranchType}</p>
                    <p><strong>Delivery Status:</strong> {office.DeliveryStatus}</p>
                    <p><strong>District:</strong> {office.District}</p>
                    <p><strong>Division:</strong> {office.Division}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
export default PincodeDetails