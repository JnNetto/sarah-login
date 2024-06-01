import React from "react";
import { StyledLogin } from "./styles";

export default function Login() {
  return (
    <StyledLogin>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </StyledLogin>
  );
}
