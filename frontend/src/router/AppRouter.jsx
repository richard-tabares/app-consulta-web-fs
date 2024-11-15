import { Routes, Route, Navigate } from 'react-router-dom'
import { PageFormSearch } from '../pages/PageFormSearch'
import { PageResults } from '../pages/PageResults'

export const AppRouter = () => {
    return (

        <Routes>

            <Route path='/' element={<PageFormSearch />} />
            <Route path='/consulta' element={<PageResults />} />

            <Route path='/*' element={<Navigate to='/' />} />


        </Routes>
    )
}
