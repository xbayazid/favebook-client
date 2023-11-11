import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import FillButton from '../components/FillButton/FillButton';
import { AuthContext } from '../context/AuthProvider';
const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {createUser, updateUser} = useContext(AuthContext)

  const handleSignUp = (data) => {
    const userInfo = {
      displayName: data.name
    }
    createUser(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      updateUser( userInfo )
      .then(() => {
        saveUser(data.name, data.email);
      })
      .catch( err => console.log(err));
    })
    .catch(error => console.log(error));
  }


  const saveUser = (name, email) => {
    const user = {name, email, role: 'Member'};
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        // setCreatedUserEmail(email);
        // getUserToken(email)
      })
  }

  return (
    <div>
      <p className="Text">Register Here</p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-control w-full">
          <label className="label"><span className="label-text">Name</span></label>
          <input {...register("name", { required: "Name is required" })} type="text" className="input input-bordered w-full" />
          {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
        </div>
        <div className="form-control w-full">
          <label className="label"><span className="label-text">Email</span></label>
          <input {...register("email", { required: "Email Address is required" })} type="text" className="input input-bordered w-full" />
          {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
        </div>
        <div className="form-control w-full">
          <label className="label"><span className="label-text">Password</span></label>
          <input {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be 6 characters or longer' } })} type="password" className="input input-bordered w-full" />
          {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
        </div>
        <input className='btn btn-accent w-full my-3' value="Sign Up" type="submit" />
        {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
        <div>
        </div>
      </form>
      <div className="divider">OR</div>
      <div className='text-center uppercase'>
        <FillButton>connect with google</FillButton>
      </div>
    </div>
  );
};

export default SignUp;