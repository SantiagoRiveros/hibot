import partner from "../assets/Group 18.png";
import logos from "../assets/social media icon.png"

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-subContainer">
        <div className="footer-text">Unimos personas y tecnología</div>
        <div className="footer-subText">Hablemos@hibot.ar</div>
        <div className="footer-bottomContainer">
          <div className="footer-partner">
            <img className="footer-partner" src={partner} alt="partner" />
            
          </div>
          <div className="footer-logos"><img  className="footer-logos" src={logos} alt="logos"/></div>
        </div>
      </div>
    </div>
  );
}
