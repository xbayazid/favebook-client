import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../styles.css';
import FillButton from '../../components/FillButton/FillButton';
import Button from '../../components/Button/Button';
import ButtonUnFill from '../../components/ButtonUnFill/ButtonUnFill';


const Login = () => {
    return (
        <div className='w-[30%] mx-auto pt-20'>
            <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Login
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Register
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
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
    </Tabs.Content>
    {/* Register here  */}
    <Tabs.Content className="TabsContent" value="tab2">
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
    </Tabs.Content>
  </Tabs.Root>
        </div>
    );
};

export default Login;