import './app-filter.css'
import React from 'react';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button 
        className="btn btn-light"
        type="button">
          All employers
        </button>
        <button 
        className="btn btn-outline-light"
        type="button">
          For promotion
        </button>
        <button 
        className="btn btn-outline-light"
        type="button">
          Salary more than 1,000 dollars
        </button>
    </div>
  )
}
export default AppFilter;