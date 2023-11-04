import React from 'react';
import FillButton from '../components/FillButton/FillButton';
import Button from '../components/Button/Button';

const SignUp = () => {
    return (
        <div>
            <p className="Text">Register Here</p>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="inputs" id="name" type="text" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="email">
              Email Address
            </label>
            <input className="inputs" id="email" type="email" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="password">
              Password
            </label>
            <input className="inputs" id="password" type="password" />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'center' }}>
            <Button><input className='uppercase' type="submit" value="register" /></Button>
          </div>
          <div className="divider">OR</div>
          <div className='text-center uppercase'>
            <FillButton>connect with google</FillButton>
          </div>
        </div>
    );
};

export default SignUp;