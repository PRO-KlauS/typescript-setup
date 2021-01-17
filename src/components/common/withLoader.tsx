import React, { ReactNode } from 'react';
import { FullScreenLoader } from '../index';

interface WithLoaderProps {
  isLoading: boolean;
  children: ReactNode;
}

const WithLoader: React.FC<WithLoaderProps> = ({ isLoading, children }) => {
  return (
    <>
      {children}
      {isLoading && <FullScreenLoader />}
    </>
  );
};
export default WithLoader;
