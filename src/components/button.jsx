import style from '../pages/login/style.module.css'

function Button({title, onClick}) {
  return (
    <button className={style.buttonReg} onClick={onClick} >{title}</button>
  );
}


export default Button;
