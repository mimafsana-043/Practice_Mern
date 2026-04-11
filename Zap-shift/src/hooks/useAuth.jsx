import { use } from 'react';
import Authcontext from '../contexts/Authcontext/Authcontext';

const useAuth = () => {
    const authInfo = use(Authcontext);
    return authInfo;
};

export default useAuth;