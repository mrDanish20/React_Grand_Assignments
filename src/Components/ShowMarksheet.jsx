import React from 'react'


export default function ShowMarksheet(props) {
  return (
    <div className='container'>
        <h1 style={{fontWeight:"bold"}}>ShowMarksheet</h1>
        <br />
        <table className='table table-border' style={{border:"1px solid black" }}>
            <thead>
                <th>Name</th>
                <th>Total</th>
                <th>Percentage</th>
                <th>Grade</th>
            </thead>
            <thead>
                <td>{props.D}</td>
                <td>{props.A}</td>
                <td>{props.B}</td>
                <td style={{color:props.E , fontWeight:"bold"}}>{props.C}</td>
            </thead>
        </table>
    </div>
  )
}
