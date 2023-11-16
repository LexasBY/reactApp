import React from 'react'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import './app.css'
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

function App() {

const data = [
  {name: 'John C.', salary: 800, increase: true },
  {name: 'Alex M.', salary: 3000, increase: false},
  {name: 'Carl Gr.', salary: 5000, increase: false}
]

  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployersList data={data}/>
      <EmployersAddForm/>

    </div>
  );
}


export default App;