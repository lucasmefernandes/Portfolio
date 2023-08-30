import React, { createContext, useContext, useState, useEffect } from 'react';

const NameContext = createContext();

export function NameProvider({ children }) {
  const [name, setName] = useState("En línea");

  useEffect(() => {
    // Este useEffect irá atualizar o contexto sempre que o nome for alterado
    const contextValue = { name, setName };
    NameContext.Provider.value = contextValue;
  }, [name]);

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}

export function useName() {
  return useContext(NameContext);
}