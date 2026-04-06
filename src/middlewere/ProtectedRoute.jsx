import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ allowedRoles }) => {

    const { user, isAuth } = useSelector((state) => state.auth);

    if (!isAuth) {

        // check login
        return <Navigate to="/auth" replace />;
    }

    if (!allowedRoles.includes(user?.role)) {
        // check isAdmin
        return <Navigate to="/" replace />;
    }

    // Nếu thỏa mãn thì cho phép vào (render các Route con)
    return <Outlet />;
};