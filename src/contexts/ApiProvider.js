import { createContext, useContext } from 'react';
import LfzApiClient from '../LfzApiClient';

const ApiContext = createContext();

export default function ApiProvider({ children }) {
  const api = new LfzApiClient();

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}