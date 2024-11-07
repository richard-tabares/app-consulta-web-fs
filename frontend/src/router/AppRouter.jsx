import { Routes, Route, Navigate } from 'react-router-dom'
import { FormSearch } from '../pages/FormSearch'
import { Results } from '../pages/Results'

export const AppRouter = () => {
    return (

        <Routes>

            <Route path='/' element={<FormSearch />} />
            <Route path='/consulta' element={<Results />} />

            <Route path='/*' element={<Navigate to='/' />} />


        </Routes>
    )
}
