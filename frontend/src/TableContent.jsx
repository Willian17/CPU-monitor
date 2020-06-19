import React from 'react'

function TableContent({proces}){
    return(
        <tr>
        <td>{proces.pid}</td>
        <td>{proces.name}</td>
        <td>{proces.cpu}%</td>
        <td>{proces.memoria}%</td>
        <td>{proces.time}</td>
      </tr>
    )
}

export default TableContent