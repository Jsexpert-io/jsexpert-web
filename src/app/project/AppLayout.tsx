'use client'
import React from 'react';
import { logout } from '@/State/features/auth.feature';
import { useAppSelector } from '@/State/store';
import { useEffect } from 'react';

export const AppLayout = ({ children }: any) => {
  const { token } = useAppSelector(state => state.userState);
  useEffect(() => {
    if (!token) {
      logout();
      window.location.href = '/auth/login';
    }

    return () => {
    };
  }, [token]);

  return <div>
    {children}
  </div>;
};
