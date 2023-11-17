import './app-info.css'
import React from 'react'

const AppInfo = ({increased, employees}) => {
  return (
    <div className="app-info">
      <h1>Employee accounting in the company</h1>
      <h2>Total number of employees: {employees}</h2>
      <h2>Receive a bonus: {increased}</h2>

    </div>
  )
}

export default AppInfo;