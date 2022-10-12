import { useRef, useState } from "react";

import "./BookingForm.css";
import PhoneCode from "./PhoneCode";

const BookingForm = () => {
  var roomType;
  var totalCost;

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const allotmentRef = useRef();
  const nightRef = useRef();

  const [inputValue, setInputValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [phoneNumberValue, setPhoneNumberValue] = useState();
  const [addressValue, setAddressValue] = useState();
  const [allotmentIsValid, setAllotmentIsValid] = useState(false);
  const [roomIsValid, setRoomIsValid] = useState(false);

  const [roomValue, setRoomValue] = useState();

  const handleChange = (e) => {
    var getRoomType = e.target.value;
    roomType = getRoomType;
    console.log("Room type : ", roomType);
  };

  const calculateCost = (event) => {
    let enteredAllotment = allotmentRef.current.value;
    let enteredAllotmentNumber = +enteredAllotment;
    let enteredNights = nightRef.current.value;
    console.log("Number of Person", enteredAllotment);
    console.log("Number of nights", enteredNights);
    console.log("Room type for calculation: ", roomType);

    //Single Room
    if (roomType === "Single Bed Room") {
      if (enteredAllotmentNumber === 2) {
        setRoomIsValid(true);
        console.log("Total number of single bed room is 1");
        totalCost = 700 * enteredNights * enteredAllotmentNumber;
        console.log("Total Cost", totalCost);
        alert("Total Cost "+totalCost);
        setAllotmentIsValid(true);
      } else {
        let count = Math.ceil(enteredAllotmentNumber / 2);
        console.log("Total number of single bed room is ", count);
        setRoomIsValid(true);
        totalCost = 700 * enteredNights * count;
        console.log("Total Cost :", totalCost);
        alert("Total Cost "+totalCost);
        setAllotmentIsValid(true);
      }
    }
    //Double Bed Room
    else if (roomType === "Double Bed Room") {
      if (enteredAllotmentNumber === 3) {
        setRoomIsValid(true);
        console.log("Total number of double bed room is 1");
        console.log(enteredNights);
        totalCost = 1200 * enteredNights * enteredAllotmentNumber;
        console.log("Total Cost", totalCost);
        alert("Total Cost "+totalCost);
        setAllotmentIsValid(true);
      } else {
        let count = Math.ceil(enteredAllotmentNumber / 3);
        console.log("Total number of double bed room is ", count);
        setRoomIsValid(true);
        totalCost = 1200 * enteredNights * count;
        console.log("Total Cost", totalCost);
        alert("Total Cost "+totalCost);
        setAllotmentIsValid(true);
      }
    }
    //Executive Room
    else if (roomType === "Executive Room") {
      if (enteredAllotmentNumber === 3) {
        setRoomIsValid(true);
        console.log("Total number of  executive room is 1");
        totalCost = 1400 * enteredAllotmentNumber * enteredNights;
        console.log("Total Cost", totalCost);
        alert("Total Cost "+totalCost);
        setAllotmentIsValid(true);
      } else {
        let count = Math.ceil(enteredAllotmentNumber / 3);
        console.log("Total number of executive room is ", count);
        setRoomIsValid(true);
        totalCost = 1400 * enteredNights * count;
        console.log("Total Cost", totalCost);
        alert("Total Cost "+totalCost);
        setAllotmentIsValid(true);
      }
    }
  };

  //Submitting Form
  const submitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formDataSubmit = Object.fromEntries(data.entries());
    console.log(formDataSubmit);
    alert(JSON.stringify(formDataSubmit));
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
              <input type="number" id="allotment" ref={allotmentRef} />
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
