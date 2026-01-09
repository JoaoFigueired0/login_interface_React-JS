import React, { useState } from 'react';
import './App.css';
import ButtonGray from './components/ButtonGray';
import Input from './components/input';
import ButtonWhite from './components/ButtonWhite';
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

function App() {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  // const [mostrarCadastro, setMostrarCadastro] = useState(true);
  const [inputType, setInputType] = useState("password");

  const handleAlternarCard = () => {
    setMostrarLogin(prev => !prev);
    // setMostrarCadastro(prev => !prev);
  };

  function seePassword() {
    setInputType(prev =>
      prev === "password" ? "text" : "password"
    )
  }

  return (
    <div className="flex flex-col justify-center container-center items-center">
      <section className="bg-[#454444] text-white w-[760px] h-[280px] py-[25px] px-[35px] content-center justify-center absolute">
        <div style={{ display: 'block' }}>
          {mostrarLogin ? (
            <div className="flex text-warp flex-col w-[100%] h-[225px] gap-[18px] text-right justify-end ">
              <h2 className="text-[20px] text-warp text-[#fff]">Já tem conta ?</h2>
              <p className="text-[15px] text-right w-[235px] h-[160px] self-end text-[#fff]">Entre na sua conta para ver se tem algum imovel novo de seu interesse.</p>
              <ButtonGray name="Login" onClick={handleAlternarCard} />
            </div>
          ) : (
            <div className="flex text-warp flex-col w-[100%] h-[225px] gap-[18px] content-center justify-end">
              <h2 className="text-[20px] text-warp w-[235px] text-[#fff]">Não tem uma conta ainda?</h2>
              <p className="text-[15px] text-left text-warp w-[235px] h-[160px] justify-end text-[#fff]">Faça uma conta agora e acompanhe todos os imoveis e terrenos que estão sendo vendidos.</p>
              <ButtonGray name="cadastrar" onClick={handleAlternarCard} /> {/* Botão para alternar para o login */}
            </div>
          )}
        </div>
      </section>
      <section
        className={`flex justify-center flex-col container-center bg-[#fff] no-underline w-[380px] h-[330px] px-[20px] py-[30px] relative left-[135px] gap-[10px] ${mostrarLogin ? 'cardMovidoEsquerda' : 'cardMovidoDireita'}`}
      >
        <h2 className="text-[20px] text-warp m-[0] mb-[2%] w-[100%] ml-[5%]">Login</h2>
        <Input
          label="E-mail"
          placeholder="Coloque o seu e-mail de acesso"
          linkImg="./assets/e-mail.png"
          type="text"
        />
        <MdOutlineEmail className="flex h-[15px] w-[15px] relative left-[320px] bottom-[35px] cursor-pointer" alt="" />

        <Input id="password"
          label="Senha"
          placeholder="Coloque sua senha de login"
          linkImg="./assets/senha.png"
          type={inputType}
        />

        <TbLockPassword className="flex h-[15px] w-[15px] relative left-[320px] bottom-[35px]" alt="" onClick={seePassword} />

        <ButtonWhite name="Entrar" nameLink="Esqueci a senha" link="#" />
      </section>
    </div>
  );
}

export default App;

