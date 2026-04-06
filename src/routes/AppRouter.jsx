import { Routes, Route, Link } from 'react-router'

//from views
import { Home } from '@/views/Home'
import { Rooms } from '@/views/Rooms'
import { Explore } from '@/views/explore/Explore'
import { Contact } from '@/views/Contact'
import { Auth } from '@/views/Auth'
import { AdminDashboard } from '@/views/admin/AdminDashboard'

//from middlewere
import { ProtectedRoute } from '@/middlewere/ProtectedRoute'

//from components
import Navigation from '@/components/Navigaton'
import { ExploreDetail } from '@/views/explore/ExploreDetail'

export const AppRouter = () => {
    return (
        <>
            <Navigation />

            <main className="pt-20">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/rooms' element={<Rooms />} />
                    <Route path='/explore' element={<Explore />} />
                    <Route path='/explore/:id' element={<ExploreDetail />} />

                    <Route path='/contact' element={<Contact />} />
                    <Route path='/auth' element={<Auth />} />


                    {/* Route for admin */}
                    <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                    </Route>
                </Routes>
            </main>
        </>
    )
}