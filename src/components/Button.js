import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = ({ name }) => {
  const navigate = useNavigate();

  const handleButton = (name) => {
    navigate(`/results?search_query=${name}`);
  }
  return (
    <div>
      <button 
      onClick={() => handleButton ( name)}
      className="px-4 py-2 m-2 rounded-lg border text-sm font-bold bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 transition duration-300" >
        {name}
      </button>
    </div>
  )
}

export default Button
