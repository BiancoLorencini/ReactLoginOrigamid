import style from '../pages/login/style.module.css'


function Input({title, ...rest}) {
  return (
  <>
    <label>{title}</label>
    <input {...rest} className={style.input}/>
  </>
  );
}


export default Input;





