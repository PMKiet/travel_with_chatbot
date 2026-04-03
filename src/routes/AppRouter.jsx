import { Routes, Route, Link } from 'react-router'

//from views
import { Home } from '@/views/Home'
import { Rooms } from '@/views/Rooms'
import { Explore } from '@/views/Explore'
import { Contact } from '@/views/Contact'


//from components
import Navigation from '@/components/Navigaton'

export const AppRouter = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/rooms' element={<Rooms />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}