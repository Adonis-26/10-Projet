import { Navigate } from "react-router-dom";


    const AuthGuard = ({children}) => {
        let logged = false 
    
        if(!logged){
            return <Navigate to="/sign"/>
        }
        return children
};

export default AuthGuard;