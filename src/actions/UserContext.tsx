"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAccessToken, logout as removeTokens } from '@/utils/auth';
import axios from 'axios';

interface User {
    id: string; 
    username: string;
    email: string; 
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>; 
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const accessToken = getAccessToken();
                if (accessToken) {
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/me`, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });
                    setUser(response.data);
                }
            } catch (error) {
                console.error('Failed to fetch user:', error);
                setUser(null);
            }
        };

        fetchUser();
    }, []);

    const logout = () => {
        removeTokens(); // This will remove the tokens from cookies
        setUser(null);  // This will clear the user state
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};