import { createContext, useState } from "react";
import {PropTypes} from 'prop-types'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.cofig";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    //const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authentications ={ loading,  createUser, signInUser};
    return (
        <div>
            <AuthContext.Provider value={authentications}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.object.isRequired
}
export default AuthProvider;