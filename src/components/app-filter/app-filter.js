import './app-filter.css'
import React from 'react';

const AppFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'All employers'},
    {name: 'rise', label: 'For promotion'},
    {name: 'moreThen1000', label: 'Salary more than 1000 dollars'}

  ]

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button 
        className={`btn ${clazz}`} 
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}>
          {label}
        </button>
    )
  })
  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}
export default AppFilter;