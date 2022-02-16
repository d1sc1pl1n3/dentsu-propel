import React, { useState, useEffect } from "react";
import styled from "styled-components";
import styles from "../styles/Home.module.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   console.log(firstName);
  // }, [firstName]);

  // useEffect(() => {
  //   console.log(lastName);
  // }, [lastName]);

  // useEffect(() => {
  //   console.log(email);
  // }, [email]);

  // useEffect(() => {
  //   console.log(phoneNumber);
  // }, [phoneNumber]);

  // useEffect(() => {
  //   console.log(country);
  // }, [country]);

  // useEffect(() => {
  //   console.log(message);
  // }, [message]);

  // useEffect(() => {
  //   console.log(checked);
  // }, [checked]);

  const submitForm = async (e) => {
    e.preventDefault();
    //console.log(values);
    //const { firstName, lastName, email, message } = values;
    // alert("sending");
    try {
      const payload = {
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
        email_address: email,
        // message: message,
      };
      await axios.post("/api/mailchimpContact", payload);
      alert("Thank you for your message.");
      //return false;
    } catch (error) {
      console.log(error);
      console.log(error.response.status);
      alert(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handling");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setCountry("");
    setMessage("");
    setChecked(false);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    //console.log(firstName);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    //console.log(lastName);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    //console.log(email);
  };

  // const handlePhoneNumber = (e) => {
  //   //setPhoneNumber(e.target.value);
  //   //console.log(e.target.value);
  // };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleChecked = (e) => {
    setChecked(!checked);
    console.log("checked");
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={submitForm}>
          <Row>
            <FormLabel htmlFor="firstNameInput">First Name </FormLabel>

            <InputField
              type="text"
              id="firstNameInput"
              name="firstname"
              placeholder="Enter first name"
              autoComplete="off"
              value={firstName}
              onChange={handleFirstName}
            />
          </Row>

          <Row>
            <FormLabel htmlFor="lastNameInput">Last Name</FormLabel>
            <InputField
              type="text"
              id="lastNameInput"
              name="lastname"
              placeholder="Enter last name..."
              autoComplete="off"
              value={lastName}
              onChange={handleLastName}
            />
          </Row>
          <Row>
            <FormLabel htmlFor="emailInput">Email</FormLabel>
            <InputField
              type="email"
              id="emailInput"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={email}
              onChange={handleEmail}
            />
          </Row>

          <Row>
            <FormLabel htmlFor="phoneInput">Phone Number</FormLabel>

            <PhoneInput
              country={"nl"}
              id="phoneInput"
              //autoComplete="off"
              // value={phoneNumber}
              // onChange={handlePhoneNumber}
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </Row>

          <FormLabel htmlFor="countryInput">Country</FormLabel>
          <Row>
            <select
              type="text"
              id="countryInput"
              name="country"
              // placeholder="The Netherlands >>> set Def"
              autoComplete="off"
              value={country}
              onChange={handleCountry}
            >
              <option value="Afghanistan">Afghanistan</option>
              <option value="Åland Islands">Åland Islands</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">
                British Indian Ocean Territory
              </option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">
                Cocos (Keeling) Islands
              </option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo, The Democratic Republic of The">
                Congo, The Democratic Republic of The
              </option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote D'ivoire">Cote D&apos;ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands (Malvinas)">
                Falkland Islands (Malvinas)
              </option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">
                French Southern Territories
              </option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-bissau">Guinea-bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard Island and Mcdonald Islands">
                Heard Island and Mcdonald Islands
              </option>
              <option value="Holy See (Vatican City State)">
                Holy See (Vatican City State)
              </option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran, Islamic Republic of">
                Iran, Islamic Republic of
              </option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, Democratic People's Republic of">
                Korea, Democratic People&apos;s Republic of
              </option>
              <option value="Korea, Republic of">Korea, Republic of</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao People's Democratic Republic">
                Lao People&apos;s Democratic Republic
              </option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">
                Libyan Arab Jamahiriya
              </option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macao">Macao</option>
              <option value="Macedonia, The Former Yugoslav Republic of">
                Macedonia, The Former Yugoslav Republic of
              </option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia, Federated States of">
                Micronesia, Federated States of
              </option>
              <option value="Moldova, Republic of">Moldova, Republic of</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">
                Northern Mariana Islands
              </option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestinian Territory, Occupied">
                Palestinian Territory, Occupied
              </option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russian Federation">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Helena">Saint Helena</option>
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Pierre and Miquelon">
                Saint Pierre and Miquelon
              </option>
              <option value="Saint Vincent and The Grenadines">
                Saint Vincent and The Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Sao Tome and Principe
              </option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia and The South Sandwich Islands">
                South Georgia and The South Sandwich Islands
              </option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen">
                Svalbard and Jan Mayen
              </option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syrian Arab Republic">Syrian Arab Republic</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania, United Republic of">
                Tanzania, United Republic of
              </option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-leste">Timor-leste</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos Islands">
                Turks and Caicos Islands
              </option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="United States Minor Outlying Islands">
                United States Minor Outlying Islands
              </option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Viet Nam">Viet Nam</option>
              <option value="Virgin Islands, British">
                Virgin Islands, British
              </option>
              <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
              <option value="Wallis and Futuna">Wallis and Futuna</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </Row>

          <FormLabel htmlFor="textarea">Message</FormLabel>
          <Text
            id="textarea"
            rows="10"
            placeholder="Enter your message for us here"
            value={message}
            onChange={handleMessage}
          />

          <EndLabel>
            <Check type="checkbox" checked={checked} onChange={handleChecked} />
            Select this box if you would also like to subscribe to the Propel
            newsletter.
          </EndLabel>

          <Submitter
            value="Submit"
            type="submit"
            onClick={(e) => submitForm(e, firstName, lastName, email)}
          >
            Submit
          </Submitter>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.section`
  /* border: 1px solid black; */
  padding: 25px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  min-height: max-content;
  @media only screen and (max-width: 767px) and (min-width: 375px) {
  }
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    //background: yellow;
    width: 50%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  //border: 1px solid yellow;
  min-height: min-content;
  select {
    padding: 15px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    margin-top: 10px;
    //appearance: none;
  }
`;

const InputField = styled.input`
  border: 1px solid #cccccc;
  color: #242424;
  padding: 10px;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  :focus {
    outline-width: 0;
  }
  ::placeholder {
    color: #000;
  }
`;

const Check = styled.input`
  border: 1px solid #ccc;
  background-color: #eee;
  margin: 15px;
  /*
    Hide the browser's default checkbox 
    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    Create a custom checkbox 
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
}

    }
  */
`;

const Submitter = styled.button`
  // background: var(--primary-charcoal);
  background: #242424;
  width: 277px;
  height: 50px;
  color: white;
  border-radius: 25px;
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 0.9rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
`;

const FormLabel = styled.label`
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin: 0px 0px 10px 0px;
  ::before {
    content: "[ ";
  }
  ::after {
    content: " ]";
  }
`;

// const PhoneInputStyle = styled(PhoneInput)`
//   color: red;
// `;

const EndLabel = styled.div`
  text-transform: uppercase;
  margin: 0px 0px 10px 0px;
`;

const Text = styled.textarea`
  font-family: "Arial", sans-serif;
  border: 1px solid #ccc;
  width: 100%;
  padding: 15px;
  font-size: 13.3333px;
  color: #242424;
  overflow: auto;
  outline: none;
  box-shadow: none;
  margin-top: 10px;
  resize: none; /*remove the resize handle on the bottom right*/
  ::placeholder {
    color: #000;
  }
`;

export default Form;
