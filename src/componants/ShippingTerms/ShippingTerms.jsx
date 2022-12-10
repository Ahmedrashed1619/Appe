import React, { useContext, useEffect } from 'react';
import { langContext } from '../context/store';
import trunk from '../../images/shippingTerms/truck-fast.png';
import trunkshipping from '../../images/shippingTerms/Free shipping-pana 1.png';
import { RiArrowDropDownLine } from 'react-icons/ri';
import $ from 'jquery';



export default function ShippingTerms() {

  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  let { isEng } = useContext(langContext);


  return (
    <>
      <section className='pb-5' dir={isEng ? 'ltr' : 'rtl'}>
        <div className="mt-fixed">
          <div className="container-fluid container-xl special-w">
            <h2 className='alert alert-main py-2 fw-bold text-center'>Appe Shipping Terms</h2>

            <div className="row g-4 d-flex justify-content-center align-items-center flex-lg-row flex-column-reverse mt-3 mb-5">
              <div className="col-lg-6 col-11">
                <div className="shipping-to d-flex justify-content-between align-items-center bg-light px-3 py-2 rounded-4 mb-5">
                  <div className="truck d-flex align-items-center">
                    <img src={trunk} alt="trunk-fast" />
                    <h6 className={`fw-bold mb-0 ${isEng ? 'ms-2' : 'me-2'} `}>Shipping to</h6>
                  </div>
                  <div className="selectCountries position-relative">
                    <select name="country" id="country" className={`form-control m-0 ${isEng ? 'text-end  ms-auto pe-5' : 'text-start  me-auto ps-5'}  w-50 fw-bold main-color bg-transparent border-0`}>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antartica">Antarctica</option>
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
                        <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                        <option value="Brunei Darussalam">Brunei Darussalam</option>
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
                        <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo">Congo, the Democratic Republic of the</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                        <option value="Croatia">Croatia (Hrvatska)</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="East Timor">East Timor</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt" selected>Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="France Metropolitan">France, Metropolitan</option>
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
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                        <option value="Holy See">Holy See (Vatican City State)</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran (Islamic Republic of)</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                        <option value="Korea">Korea, Republic of</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao">Lao People's Democratic Republic</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macau">Macau</option>
                        <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
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
                        <option value="Micronesia">Micronesia, Federated States of</option>
                        <option value="Moldova">Moldova, Republic of</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
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
                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
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
                        <option value="Russia">Russian Federation</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
                        <option value="Saint LUCIA">Saint LUCIA</option>
                        <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome and Principe</option> 
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia (Slovak Republic)</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                        <option value="Span">Spain</option>
                        <option value="SriLanka">Sri Lanka</option>
                        <option value="St. Helena">St. Helena</option>
                        <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syrian Arab Republic</option>
                        <option value="Taiwan">Taiwan, Province of China</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania, United Republic of</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos">Turks and Caicos Islands</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Viet Nam</option>
                        <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                        <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                        <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                    <RiArrowDropDownLine className={`h3 main-color ${isEng ? 'end-0' : 'start-0'}`} 
                      style={{position : 'absolute', top : '50%' , transform : 'translateY(-50%)' , marginTop : '2px'}}
                    />
                  </div>
                </div>
                <div className="table-shipping">
                  <table className="table text-center table-hover">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Shipping Method</th>
                        <th scope="col">Shipping Time</th>
                        <th scope="col">Coast</th>
                      </tr>
                    </thead>
                    <tbody className='fw-bold'>
                      <tr>
                        <td>Express Shipping</td>
                        <td>Estimated to be delivered on 30/10 To 06/11/2022</td>
                        <td>50 EGP</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-6 col-11">
                <div className="img-shipping-trunk">
                  <img src={trunkshipping} className='w-100' alt="shipping-trunk" />
                </div>
              </div>
            </div>

            <div className="parag-bolg">
              <h3 className='fw-bold mb-4'>Shipping Details</h3>
              <p style={{fontSize : '18px' , color : '#656565'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis laudantium accusamus totam, esse sequi maxime voluptatem voluptatum dolore deserunt, saepe quas. Eaque aut recusandae perferendis dolorem ipsam laudantium eligendi.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repellendus possimus itaque officiis aliquid aut asperiores iusto delectus ducimus maiores at aspernatur, consectetur dolores debitis culpa ut modi est nihil.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, doloribus. Inventore quas consequatur nostrum ex quae, ut odit laborum repellendus cum ipsam maxime eos quis nihil id deserunt numquam fuga!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto mollitia excepturi autem atque sit? Animi labore corporis assumenda ipsa non obcaecati deleniti mollitia quisquam qui sit fuga fugit, officia recusandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum, odio porro facere aperiam vitae illo vero, atque consectetur delectus reiciendis molestiae eius sed sapiente, laboriosam culpa perferendis similique sequi minus. Inventore esse maiores, perspiciatis incidunt itaque quis, fuga exercitationem vel sed omnis, autem aliquam quaerat! Unde dolorem numquam quidem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dicta delectus cupiditate quasi dolor accusantium nostrum labore voluptates reiciendis ut vero libero accusamus sapiente suscipit culpa excepturi, sequi doloribus earum totam ab in impedit non! Ipsam explicabo magnam vel necessitatibus temporibus esse quae vitae voluptatum velit, fugit aliquam. Non, aperiam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis magni voluptatibus nemo cupiditate consequuntur, accusantium quod, nisi magnam numquam eum? Voluptates molestias consequatur magnam dolorum perferendis ex atque earum id quaerat pariatur! Reiciendis voluptate dolor sed? Deleniti necessitatibus dolorem inventore! Optio quod dolore voluptate, fugiat quidem veniam pariatur nihil illum odit enim temporibus saepe ea ab accusamus amet sapiente nam quisquam iste architecto quos rerum? Culpa earum animi minus sit exercitationem eveniet laudantium nulla blanditiis aut deserunt eligendi, accusamus, autem natus praesentium voluptas deleniti dicta nihil quidem eos corporis assumenda quam nisi temporibus? Magni asperiores vel autem fuga accusamus ratione quibusdam ad corrupti! Nesciunt, iste et ut dolore iure sequi recusandae impedit nulla omnis officiis dignissimos id, labore quibusdam blanditiis perferendis minus sed voluptate nisi incidunt quaerat nobis consectetur cumque tempore assumenda. Molestiae aut corrupti nesciunt a! Ullam provident quasi iusto id temporibus labore! Sapiente corporis atque aspernatur modi, magni iure consectetur tempora perferendis odio suscipit minima cum laboriosam nihil voluptatem ipsum asperiores quaerat quibusdam maxime explicabo assumenda. Natus iusto aliquid sequi minima sit delectus sapiente quae repellendus reprehenderit blanditiis possimus, voluptatem, itaque, fuga enim expedita beatae numquam magni. Nesciunt omnis iure neque non amet sit porro iusto explicabo?
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
