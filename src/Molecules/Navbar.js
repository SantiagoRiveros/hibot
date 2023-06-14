import logo from '../assets/PNGweb_Mesa de trabajo 1 copia 2 (1).png'

export default function Navbar() {
  return (
    <div className="NavBar-Container">
      <img
        className='logo'
        src={logo}
        alt="logo"
      />
      <button className="contactButton">contacto</button>
    </div>
  );
}
