import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { Admin } from './Admin'
import { UserSignUp } from './UserSignUp'
import { UserLogin } from './UserLogin'
import { Dashboard } from './Dashboard'
import { BookPage } from './BookPage'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>

            <Route path='/' element={<HomePage />}/>
            <Route path='/admin' element={<Admin />} />
            <Route path='/user/signup' element={<UserSignUp />} />
            <Route path='/user/login' element={<UserLogin />} />
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/user/bookpage' element={<BookPage />} />

        </Routes>
    </div>
  )
}
