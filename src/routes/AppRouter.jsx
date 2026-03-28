import { Routes, Route, Link } from 'react-router'

//from views
import { Home } from '@/views/Home'
import { Contact } from '@/views/Contact'

//from components
import Navigation from '@/components/Navigaton'

export const AppRouter = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </>
    )
}