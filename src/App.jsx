import React, { useState } from 'react';
import './App.css';
import ButtonGray from './components/ButtonGray';
import Input from './components/input';
import ButtonWhite from './components/ButtonWhite';
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";

function App() {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [inputType, setInputType] = useState("password");

  const handleAlternarCard = async (e) => {
    e.preventDefault();
    setMostrarLogin(prev => !prev);
  }

  const sendBack = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: user, password, email })
      });

    } catch (err) {
      console.error(err);
      alert("Erro ao enviar os dados!");
    }
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
              <ButtonGray name="cadastrar" onClick={handleAlternarCard} />
            </div>
          )}
        </div>
      </section>
      <section
        className={`flex justify-center flex-col container-center bg-[#fff] no-underline w-[380px] h-[330px] px-[20px] py-[30px] relative left-[135px] gap-[10px] ${mostrarLogin ? 'cardMovidoEsquerda' : 'cardMovidoDireita'}`}
      >
        {mostrarLogin ? (
          <>
            <h2 className="text-[20px] text-warp m-[0] mb-[2%] w-[100%] ml-[5%]">Cadastro</h2>
            <div>
              <Input id="Name"
                label="Nome"
                placeholder="Escreva seu nome"
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <IoPersonSharp className="flex h-[15px] w-[15px] relative left-[320px] bottom-[25px]" />
            </div>
            <div>
              <Input
                label="E-mail"
                placeholder="Coloque o seu e-mail de acesso"
                img="./src/assets/frame.svg"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdOutlineEmail className="flex h-[15px] w-[15px] relative left-[320px] bottom-[25px]" />
            </div>

            <div>
              <Input id="password"
                label="Senha"
                placeholder="Coloque sua senha de login"
                value={password}
                type={inputType}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TbLockPassword className="flex h-[15px] w-[15px] relative left-[320px] bottom-[25px]" onClick={seePassword} />
            </div>
            <ButtonWhite name="Cadastro" nameLink="Esqueci a senha" link="https://react-icons.github.io/react-icons/search/#q=Person" onClick={sendBack} />
          </>
        ) : (
          <>
            <h2 className="text-[20px] text-warp m-[0] mb-[2%] w-[100%] ml-[5%]">Login</h2>
            <div>
              <Input
                label="E-mail"
                placeholder="Coloque o seu e-mail de acesso"
                img="./src/assets/frame.svg"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdOutlineEmail className="flex h-[15px] w-[15px] relative left-[320px] bottom-[25px]" />
            </div>

            <div>
              <Input id="password"
                label="Senha"
                placeholder="Coloque sua senha de login"
                value={password}
                type={inputType}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TbLockPassword className="flex h-[15px] w-[15px] relative left-[320px] bottom-[25px]" onClick={seePassword} />
            </div>
            <ButtonWhite name="Entrar" nameLink="Esqueci a senha" link="#" onClick={sendBack} />
          </>
        )}
      </section>
    </div>
  );
}

export default App;

