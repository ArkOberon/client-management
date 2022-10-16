import React from 'react'

function Client({data}) {

  const { nombre, telefono, email, empresa, id } = data
     
  return (
    <>
      <tr className='border-b'>
        <td className='p-6'>
          {nombre}
        </td>
        <td className='p-6'>
          {telefono}
        </td>
        <td className='p-6'>
          {empresa}
        </td>
      </tr>                              
    </>
  )
}

export default Client