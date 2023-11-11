import React, { useContext, useState } from 'react';
import '../../styles.css';
import FillButton from '../../components/FillButton/FillButton';
import ButtonUnFill from '../../components/ButtonUnFill/ButtonUnFill';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {signIn} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // console.log(token)
  // console.log(loginUserEmail)

  if(token){
    // console.log('token founded')
    // console.log(from)
    // navigate(from, {replace: true});
    
  }

  const handleLogin = data => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setLoginUserEmail(data.email)
      navigate(from, {replace: true});
      
    })
    .catch(error => {
      console.log(error.message);
      setLoginError(error.message);
    });
  }
  return (
    <div>
      <div>
        <p className="Text">Please Login</p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Email</span></label>
            <input {...register("email", { required: "Email Address is required" })} defaultValue="admin@gmail.com" type="text" className="input input-bordered w-full" />
            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Password</span></label>
            <input defaultValue="bayazid" {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be 6 characters or longer' } })} type="password" className="input input-bordered w-full" />
            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            {/* <label className="label"><span className="label-text">Forget Password?</span></label> */}
          </div>
          <input className='btn btn-accent w-full my-3' value="Login" type="submit" />
          {loginError && <p className='text-red-600'>{loginError}</p>}
        </form>
        <div className="divider">OR</div>
        <div className='text-center uppercase'>
          <ButtonUnFill>connect with google</ButtonUnFill>
        </div>
      </div>
    </div>
  );
};

export default Login;