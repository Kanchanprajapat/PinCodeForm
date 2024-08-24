import React, { useState } from 'react'

const PincodeForm = ({onLookup}) => {
    const [pincode, setPincode] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(pincode.length !== 6 || isNaN(pincode)){
            alert('please enter a valid 6-digit pincode');
            return;
        }
        onLookup(pincode);
    }
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor='pincode'>Enter Pincode</label>
        <input type='text' id='pincode' value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder='Pincode'/>
        <button type='submit'>Lookup</button>
      </form>
  )
}

export default PincodeForm
