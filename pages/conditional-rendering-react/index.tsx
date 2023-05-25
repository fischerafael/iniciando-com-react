import React, { useState } from "react";

// if
// ternário
// short circuit
// helper functions

type ILogStatus = "logado" | "deslogado";

const index = () => {
  const [isLogado, setIsLogado] = useState<ILogStatus>("logado");

  console.log(isLogado);

  const handleToggleIsLogado = () => {
    if (isLogado === "logado") {
      setIsLogado("deslogado");
      return;
    }
    setIsLogado("logado");
  };

  const componentsMap = {
    logado: <p>Seu saldo é R$ 500.000</p>,
    deslogado: <p>Você só pode ver esse saldo se estiver logado</p>,
  };

  const buttonLabel = isLogado === "logado" ? "LogOut" : "LogIn";

  return (
    <div>
      {componentsMap[isLogado]}
      <button onClick={handleToggleIsLogado}>{buttonLabel}</button>
    </div>
  );
};

export default index;

const getButtonLabel = (state: boolean) => (state ? "Log Out" : "Log In");
