import { Routes, Route, Link } from 'react-router'

//from views
import { Home } from '@/views/Home'
import { Rooms } from '@/views/Rooms'
import { Explore } from '@/views/explore/Explore'
import { Contact } from '@/views/Contact'
import { Auth } from '@/views/Auth'


//from components
import Navigation from '@/components/Navigaton'
import { ExploreDetail } from '@/views/explore/ExploreDetail'

export const AppRouter = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/rooms' element={<Rooms />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/explore/:id' element={<ExploreDetail />} />

                <Route path='/contact' element={<Contact />} />
                <Route path='/auth' element={<Auth />} />
            </Routes>
        </>
    )
}