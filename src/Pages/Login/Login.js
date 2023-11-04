import React from 'react';
import '../../styles.css';
import FillButton from '../../components/FillButton/FillButton';
import ButtonUnFill from '../../components/ButtonUnFill/ButtonUnFill';

const Login = () => {
  return (
    <div>
      <div>
        <p className="Text">Please Login</p>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Email Address
          </label>
          <input type='email' className="inputs" id="email" defaultValue="" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Password
          </label>
          <input type='password' className="inputs" id="password" defaultValue="" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'center' }}>
          <FillButton><input className='uppercase' type="submit" value="login" /></FillButton>
        </div>
        <div className="divider">OR</div>
        <div className='text-center uppercase'>
          <ButtonUnFill>connect with google</ButtonUnFill>
        </div>
      </div>
    </div>
  );
};

export default Login;