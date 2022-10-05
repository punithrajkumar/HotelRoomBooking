import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <section className="head">
      <div className="container flex1">
        <div className="logo">
          <span>Hotel Room Booking</span>
          &nbsp;
          <img
            src="https://cdn.pixabay.com/photo/2022/05/10/16/13/building-7187496_960_720.jpg"
            alt="logo"
          />
        </div>
        <div className="address">
          <span>
            <FontAwesomeIcon icon={faLocationDot} color="blue" />
            &nbsp; No 8, XXX Street, YYY Road, ZZZ.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
