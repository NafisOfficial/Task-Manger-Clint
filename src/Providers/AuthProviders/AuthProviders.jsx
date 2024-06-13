import React, { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProviders = ( {children} ) => {



    const AuthInfo = {
        
    }
    return ( 
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;