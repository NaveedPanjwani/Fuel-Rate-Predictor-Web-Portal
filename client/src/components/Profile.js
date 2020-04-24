import React, {useState,  useEffect} from 'react';
import ProfileService from '../Services/ProfileService';
// import {AuthContext} from '../context/AuthContext';
// import ProfileItem from './ProfileItem';
import Message from './Message';
import {
  Button,
  Form, 
  FormGroup,
  Label, 
  Input,
  Row, 
  Col
} from 'reactstrap';

const Profile = props =>{
  const [profile, setProfile] = useState({
    fullname: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zipcode: 0, 
  });

  const [message, setMessage] = useState(null);

  const onChange = e =>{
      e.preventDefault();
      setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
    e.preventDefault();
    ProfileService.postProfile(profile).then(data => {
        const {message} = data;
        if(!message.msgError){
            setMessage(message);
        }
        else{
            setMessage(message);
        }
    })
  }

    return(
      <div>    
        <Form onSubmit = {onSubmit} className="profile" > 
            <FormGroup>
              <Label for = "fullname">Full Name</Label>
                <Input
                     type = "text"
                     name = "fullname"
                     value = {profile.fullname}
                     placeholder = "Full Name"
                     className = "mb-3"
                     onChange = {onChange}
                     required
                     minlength = "5"
                />
              <FormGroup>
                 <Label for="exampleAddress">Address 1</Label>
                 <Input 
                     type="text" 
                     name="address" 
                     value = {profile.address}
                     placeholder="1234 Main St"
                     onChange = {onChange}
                     required
                     minlength = "7"
                 />
              </FormGroup>
              <FormGroup>
                <Label for="exampleAddress2">Address 2</Label>
                <Input 
                  type="text" 
                  name="address2" 
                  value = {profile.address2}
                  onChange ={onChange}
                 />
            </FormGroup>
                 <Row form>
                     <Col md={6}>
                     <FormGroup>
                     <Label for="exampleCity">City</Label>
                     <Input 
                         type="text"
                         name="city"
                         value = {profile.city}
                         onChange = {onChange} 
                         required      
                     />
                     </FormGroup>
                     </Col>
                     <Col md={4}>
                     <FormGroup>
                         <Label for="exampleState">State</Label>
                         <Input 
                             type='select'
                             name= 'state'
                             value = {profile.state}
                             onChange = {onChange}>
                         <option>Select State</option>
                         <option value="AL">AL</option>
                         <option value="AK">AK</option>
                         <option value="AR">AR</option>	
                         <option value="AZ">AZ</option>
                         <option value="CA">CA</option>
                         <option value="CO">CO</option>
                         <option value="CT">CT</option>
                         <option value="DC">DC</option>
                         <option value="DE">DE</option>
                         <option value="FL">FL</option>
                         <option value="GA">GA</option>
                         <option value="HI">HI</option>
                         <option value="IA">IA</option>	
                         <option value="ID">ID</option>
                         <option value="IL">IL</option>
                         <option value="IN">IN</option>
                         <option value="KS">KS</option>
                         <option value="KY">KY</option>
                         <option value="LA">LA</option>
                         <option value="MA">MA</option>
                         <option value="MD">MD</option>
                         <option value="ME">ME</option>
                         <option value="MI">MI</option>
                         <option value="MN">MN</option>
                         <option value="MO">MO</option>	
                         <option value="MS">MS</option>
                         <option value="MT">MT</option>
                         <option value="NC">NC</option>	
                         <option value="NE">NE</option>
                         <option value="NH">NH</option>
                         <option value="NJ">NJ</option>
                         <option value="NM">NM</option>			
                         <option value="NV">NV</option>
                         <option value="NY">NY</option>
                         <option value="ND">ND</option>
                         <option value="OH">OH</option>
                         <option value="OK">OK</option>
                         <option value="OR">OR</option>
                         <option value="PA">PA</option>
                         <option value="RI">RI</option>
                         <option value="SC">SC</option>
                         <option value="SD">SD</option>
                         <option value="TN">TN</option>
                         <option value="TX">TX</option>
                         <option value="UT">UT</option>
                         <option value="VT">VT</option>
                         <option value="VA">VA</option>
                         <option value="WA">WA</option>
                         <option value="WI">WI</option>	
                         <option value="WV">WV</option>
                         <option value="WY">WY</option>
                         required
                         </Input>
                     </FormGroup>
                     </Col>
                     <Col md={2}>
                     <FormGroup>
                     <Label for="exampleZip">Zip</Label>
                     <Input 
                         type="text"
                         name="zipcode" 
                         value= {profile.zipcode}
                         onChange = {onChange}
                         required
                         minlength = "5"
                         maxlength = "9"
                     />
                     </FormGroup>  
                     </Col>
                 </Row>
                <Button type="submit" color = "success"  block>Submit</Button>
            </FormGroup>
        </Form>
        {message ? <Message message = {message} /> : null }
      </div>
    )
}

export default Profile;
