//from react router
import { NavLink } from 'react-router-dom'


const Navigation = () => {
    return (
        <>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </>
    )
}

export default Navigation