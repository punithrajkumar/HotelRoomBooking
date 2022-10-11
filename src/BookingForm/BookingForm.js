import { useRef, useState } from "react";

import "./BookingForm.css";
import PhoneCode from "./PhoneCode";

const BookingForm = () => {
  var roomType;
  var totalCost;
  var totalData = [];

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const allotmentRef = useRef();
  const nightRef = useRef();

  const [totalCostValue, setTotalCostValue] = useState(1);
  const [inputValue, setInputValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [phoneNumberValue, setPhoneNumberValue] = useState();
  const [addressValue, setAddressValue] = useState();
  const [allotmentIsValid, setAllotmentIsValid] = useState(true);
  const [roomIsValid, setRoomIsValid] = useState(false);

  const [roomValue, setRoomValue] = useState();

  const handleChange = (e) => {
    var getRoomType = e.target.value;
    roomType = getRoomType;
    console.log(roomType);
  };

  const calculateCost = (event) => {
    let enteredAllotment = allotmentRef.current.value;
    let enteredAllotmentNumber = +enteredAllotment;
    let enteredNights = nightRef.current.value;
    console.log(enteredNights);
    console.log(enteredAllotment);
    console.log(roomType);

    if (
      enteredAllotment.trim().length === 0 ||
      enteredAllotmentNumber > 3 ||
      enteredAllotmentNumber < 1 ||
      enteredNights <= 0
    ) {
      setAllotmentIsValid(false);
      setRoomIsValid(false);

      return;
    } else {
      if (roomType === "Single Bed Room") {
        console.log("calculation for single bed room");
        totalCost = 700 * enteredNights * enteredAllotmentNumber;

        console.log(totalCost);

        setRoomIsValid(true);
        return totalCost;
      } else if (roomType === "Double Bed Room") {
        console.log("calculation for double bed room");
        console.log(enteredNights);
        totalCost = 1200 * enteredNights * enteredAllotmentNumber;
        console.log(totalCost);
        setRoomIsValid(true);
        return totalCost;
      } else if (roomType === "Executive Room") {
        console.log("calculation for executive room");
        totalCost = 1400 * enteredAllotmentNumber * enteredNights;
        console.log(totalCost);
        setRoomIsValid(true);
        return totalCost;
      } else {
        console.log("Enter proper value");
        return 0;
      }
    }

    
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(Object.fromEntries(data.entries()));
    // const getFormValue = document.getElementById("form");
    // console.log("submitted");
    // console.log(getFormValue);
    // var formData = new FormData();
    // console.log(formData);

    // console.log(totalData);
  };

  return (
    <section className="container formLayout">
      <div className="row">
        <div className="col-md-12">
          <div className="form">
            <form className="form2" onSubmit={submitHandler}>
              <h4>Booking</h4>
              <label htmlFor="name">Name :</label>
              &nbsp;
              <input
                type="text"
                id="name"
                name="name"
                maxLength="10"
                ref={nameRef}
                value={inputValue}
                placeholder="Enter name"
              />
              <br />
              <label htmlFor="email">Email :</label>
              &nbsp;
              <input
                type="email"
                id="email"
                name="email"
                maxLength="50"
                ref={emailRef}
                value={emailValue}
                placeholder="Enter your mail ID"
              />
              <br />
              <label htmlFor="phone">Phone Number :</label>&nbsp;
              <select name="country_code" id="country_code">
                {PhoneCode.map((option, index) => (
                  <option key={index} value={option.label}>
                    {option.value || option.label}
                  </option>
                ))}
              </select>
              <input
                type="text"
                id="phone"
                name="phone"
                pattern="\d*"
                ref={phoneRef}
                value={phoneNumberValue}
                maxLength="10"
              />
              <br />
              <label htmlFor="address">Address :</label>&nbsp;
              <textarea
                type="text"
                id="address"
                ref={addressRef}
                maxLength="2000"
                value={addressValue}
              ></textarea>
              <br />
              <label htmlFor="allotment">Number of Person Staying :</label>
              &nbsp;
              <input type="number" id="allotment" max="2" ref={allotmentRef} />
              <br />
              <label htmlFor="room_type">Room Type :</label>&nbsp;
              <select
                name="room_type"
                value={roomValue}
                id="room_type"
                onChange={handleChange}
                defaultValue="default"
              >
                <option value="default" disabled>
                  Choose option
                </option>
                <option value="Single Bed Room" id="Single_Bed_Room">
                  Single Bed Room
                </option>
                <option value="Double Bed Room" id="Double_Bed_Room">
                  Double Bed Room
                </option>
                <option value="Executive Room" id="Executive_Room">
                  Executive Room
                </option>
              </select>
              <br />
              <label htmlFor="night">Number of Nights :</label>&nbsp;
              <input type="number" id="night" ref={nightRef} />
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={calculateCost}
              >
                Calculate Cost
              </button>
              &nbsp;
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
