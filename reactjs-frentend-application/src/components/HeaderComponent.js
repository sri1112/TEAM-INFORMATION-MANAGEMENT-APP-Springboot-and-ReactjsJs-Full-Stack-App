import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
      <header>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div>
            <a href='https://example.com' className='navbar-brand'>Employee Management Application</a> 
            <Link to="/add-employee" className="btn btn-dark mb-2">Add Employee</Link>

            </div>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
