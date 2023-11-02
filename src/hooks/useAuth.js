import React, { useState, useContext, createContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext(); // ESTADO PARA LA AUTENTICACIÓN

// DENTRO DE ESTE COMPONENTE ENCAPSULAMOS TODA NUESTRA APLICACIÓN
// PARA PODER PROVEER DE INFORMACIÓN A CHILDREN, QUE SERÁN TODOS
// LOS DEMÁS COMPONENTES
export default function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null); // ESTADO PARA EL USUARIO

  const signIn = async (email, password) => {
    setUser("login");
  };

  return {
    user,
    signIn,
  };
}
