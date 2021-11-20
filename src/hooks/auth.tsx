import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react';

import { api } from '../services/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  user: any;
  escolas: {}
  signIn: (login: any, password: any) => void;
}

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState();
  const [escolas, setEscolas] = useState({});

  async function signIn(login: any, password: any){
    try {
      const response = await api.post('/api/v1/Acesso/login', {
        "login": login,
        "senha": password,
        "nomeApp": "br.com.eem.teste",
        "versaoApp": "10",
        "versaoSO": "10",
        "idDispositivo": "teste-mobile"
      });

      if(!response) return false;
      
      setUser(login);
      setEscolas(response.data.conteudo);

    } catch(error: any) {
      throw new Error(error);
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      escolas,
      signIn,
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }