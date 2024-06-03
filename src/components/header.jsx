import style from '../pages/login/style.module.css';
import logoOrigamid from '../assets/logoOrigamid.png';

function Header() {
  return (
    <div className={style.header}>
      <a href="https://www.origamid.com/" target="_blank" rel="noopener noreferrer">
        <img src={logoOrigamid} alt="Origamid logo" />
      </a>
    </div>
  );
}

export default Header;