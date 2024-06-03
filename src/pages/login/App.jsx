import style from './style.module.css'
import Header from '../../components/header'
import SecondContainer from '../../components/secondContainer'
import Input from '../../components/input'
import Button from '../../components/button'
import { useEffect, useState } from 'react'


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  
  useEffect(() => {
    if (buttonClicked) {
      const loginValido = ["email@email.com", "12345"];
      setButtonClicked(false);
      if(email == loginValido[0] && password == loginValido[1]) {
      alert(`Email: ${email} \nPassword: ${password}`);
      }else {
        alert("Email ou senha incorreta!")
      }
    }
  }, [buttonClicked, email, password]);

  const emailInput = (event) => {
    setEmail(event.target.value);
  };

  const passwordInput = (event) => {
    setPassword(event.target.value);
  };

  const buttonClick = () => {
    setButtonClicked(true);
  };

  return (
    <>
      <Header />
      <SecondContainer />
      <div className={style.thirdContainer}>
        <div className={style.mainForm}>
          <h2 className={style.entrar}>Entrar <span className={style.spanStyle2}></span></h2>
          <Input title={'E-mail'} type="email" value={email} placeholder='email@email.com' onChange={emailInput}/>
          <Input title={'Senha'} type="password" value={password} placeholder='******' onChange={passwordInput}/>
          <div className={style.checkDiv}>
            <div className={style.check}>
              <input className={style.checkBox} type="checkbox"/>
              <label>Lembre-me</label>
            </div>
            <div className={style.senhaP}>
              <a href="#">Perdeu sua senha?</a>
            </div>
          </div>
          <Button title={'Acessar Conta'} onClick={buttonClick}/>
        </div>
        <div className={style.mainForm2}>
          <h2 className={style.registro}>Registre-se <span className={style.spanStyle2}></span></h2>
          <p className={style.pRegistro}>Se você ainda não possui uma conta, escolha um plano da Origamid e preencha o cadastro</p>
          <Button title={'Escolher Plano'}/>
        </div>
      </div>
    </>
  )
}

export default App
