import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    console.log(location);

    if(loading){
        return <span className="loading loading-ring loading-xl"></span>
    }
    if(!user){
        return <Navigate to="/login" state={{from: location.pathname}}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;