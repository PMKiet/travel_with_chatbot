//from react router
import { NavLink } from 'react-router-dom'


const Navigation = () => {
    return (
        <>
            <h1 className='text-red-500'>123123</h1>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </>
    )
}

export default Navigation