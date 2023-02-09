import React from 'react'

const FormField = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">{labelName}</label>
      {isSurpriseMe && (<button onClick={handleSurpriseMe} className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black">Surprise me</button> )}

      </div>
      <input type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className='bg-gray-200 border text-gray-900 text-sm rounded-lg focus:ring-[#6469FF] focus:border-[#6469FF] outline-none block w-full p-3'
      id={name} />

    </div>
  )
}

export default FormField