import React from 'react';
import { useAuth } from '../AuthProvider/AuthProvider'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
const useRole = () => {
    const { currentUser, loading } = useAuth()


    const { data: role = '', isLoading } = useQuery({
        queryKey: ['role', currentUser?.email],
        enabled: !loading && !!currentUser?.email,
        queryFn: async () => {
            const { data } = await axios(`http://localhost:5000/user/${currentUser?.email}`)
            return data
        },
    })
    return [role, isLoading]
};

export default useRole;