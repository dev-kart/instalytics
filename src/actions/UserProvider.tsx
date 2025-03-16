import React from 'react';
import { UserProvider } from './UserContext';

const ContextLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    );
};

export default ContextLayout;