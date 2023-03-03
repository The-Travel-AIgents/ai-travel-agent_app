import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "./Layout";

const App = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    data.activities = data.activities.split(',')
    data.dates_and_places = data.dates_and_places.split(',')
    const response = await axios.post('https://travel-aigent.herokuapp.com/api/guide', data);
    console.log(response.data)
  }

  return (
    <>
      <Layout>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-1/2 my-10">            
            <div className="my-3">
              <label for="destination" class="block font-medium text-gray-700 text-base">
                Destination Country
              </label>
              <select
                {...register("destination", { required: true })}
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 block w-full sm:text-sm border py-1 border-gray-300 rounded-md"
              >
                <option disabled value="" selected>Country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Aland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua & Barbuda</option>
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
                <option value="Bonaire, Sint Eustatius and Saba">Caribbean Netherlands</option>
                <option value="Bosnia and Herzegovina">Bosnia & Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo - Brazzaville</option>
                <option value="Congo, Democratic Republic of the Congo">Congo - Kinshasa</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'Ivoire">Côte d’Ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Curacao">Curaçao</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czechia</option>
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
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Islas Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
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
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard & McDonald Islands</option>
                <option value="Holy See (Vatican City State)">Vatican City</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran</option>
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
                <option value="Korea, Democratic People's Republic of">North Korea</option>
                <option value="Korea, Republic of">South Korea</option>
                <option value="Kosovo">Kosovo</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, the Former Yugoslav Republic of">North Macedonia</option>
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
                <option value="Micronesia, Federated States of">Micronesia</option>
                <option value="Moldova, Republic of">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar (Burma)</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Curaçao</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestine</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn Islands</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Réunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Barthelemy">St. Barthélemy</option>
                <option value="Saint Helena">St. Helena</option>
                <option value="Saint Kitts and Nevis">St. Kitts & Nevis</option>
                <option value="Saint Lucia">St. Lucia</option>
                <option value="Saint Martin">St. Martin</option>
                <option value="Saint Pierre and Miquelon">St. Pierre & Miquelon</option>
                <option value="Saint Vincent and the Grenadines">St. Vincent & Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">São Tomé & Príncipe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Serbia and Montenegro">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Sint Maarten">Sint Maarten</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and the South Sandwich Islands">South Georgia & South Sandwich Islands</option>
                <option value="South Sudan">South Sudan</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard & Jan Mayen</option>
                <option value="Swaziland">Eswatini</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syria</option>
                <option value="Taiwan, Province of China">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad & Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks & Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">U.S. Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Vietnam</option>
                <option value="Virgin Islands, British">British Virgin Islands</option>
                <option value="Virgin Islands, U.s.">U.S. Virgin Islands</option>
                <option value="Wallis and Futuna">Wallis & Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
              {errors.destination && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="my-3">
              <label for="hotel_area" class="block font-medium text-gray-700 text-base">
                Hotel Area
              </label>
              <input
                {...register("hotel_area", { required: true })}
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 block w-full sm:text-sm border py-1 border-gray-300 rounded-md"
              />
              {errors.hotel_area && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="my-3">
              <label for="start_date" class="block font-medium text-gray-700 text-base">
                Start Date
              </label>
              <input
                {...register("start_date", { required: true })}
                type="date"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 block w-full sm:text-sm border py-1 border-gray-300 rounded-md"
              />
              {errors.start_date && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="my-3">
              <label for="duration" class="block font-medium text-gray-700 text-base">
                Stay duration (in days)
              </label>
              <input
                {...register("duration", { required: true })}
                type="number"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 block w-full sm:text-sm border py-1 border-gray-300 rounded-md"
              />
              {errors.duration && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="my-3">
              <label for="start_time" class="block font-medium text-gray-700 text-base">
                What time do you want to start your day?
              </label>
              <input
                {...register("start_time", { required: true })}
                type="time"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 block w-full sm:text-sm border py-1 border-gray-300 rounded-md"
              />
              {errors.start_time && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="my-3">
              <label for="end_time" class="block font-medium text-gray-700 text-base">
                What time do you want to end your day?
              </label>
              <input
                {...register("end_time", { required: true })}
                type="time"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 block w-full sm:text-sm border py-1 border-gray-300 rounded-md"
              />
              {errors.end_time && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="my-3">
              <label for="activities" class="block font-medium text-gray-700 text-base">
                Activites you'd like to try? (comma separated)
              </label>
              <input
                {...register("activities", { required: true })}
                placeholder="e.g bowling, picnic, attend concert"
                type="text"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 block w-full sm:text-sm border py-1 border-gray-300 rounded-md"
              />
              {errors.activities && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="my-3">
              <label for="dates_and_places" class="block font-medium text-gray-700 text-base">
                Custom schedule? (comma separated)
              </label>
              <input
                {...register("dates_and_places")}
                placeholder="e.g August 9 in Manchester, July 10 in Brentford"
                type="text"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 block w-full sm:text-sm border py-1 border-gray-300 rounded-md"
              />
              {errors.dates_and_places && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <button
              type="submit"
              class="inline-flex my-3 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Explore
            </button>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default App;

// import React, {useState, useEffect} from 'react';
// import { CssBaseline, Grid } from '@material-ui/core';

// import { getPlacesData } from './api';
// import Header from './components/Header/Header';
// import List from './components/List/List';
// import Map from './components/Map/Map';


// const App = () => {
//   const [places, setPlaces] = useState([]);

//   const [coordinates, setCoordinates] = useState({});
//   const [bounds, setBounds] = useState(null);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
//       setCoordinates({lat: latitude, lng: longitude});
//     })
//   },[]);

//     useEffect(() => {

//         console.log(coordinates, bounds)

//       getPlacesData(bounds.sw, bounds.ne)
//         .then((data) => {
//           console.log(data)
//           setPlaces(data);
//         })
//     }, [coordinates, bounds]);

//  return (
//    <div>
//      <CssBaseline />
//      <Header />
//      <Grid container spacing={3} style={{ width: '100%' }}>
//        <Grid item xs={12} md={4}>
//          <List places={places}/>
//        </Grid>
//        <Grid item xs={12} md={8}>
//        <Map
//        setCoordinates={setCoordinates}
//        setBounds={setBounds}
//        coordinates={coordinates}
//        />
//        </Grid>
//      </Grid>
//    </div>
//  );
// }


// export default App;