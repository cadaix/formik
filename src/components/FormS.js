import React from 'react';
 import { useFormik } from 'formik';
 import './styles.css'

 import validationSchema from './validations';

 const SignupForm = () => {
   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   const formik = useFormik({
     initialValues: {
       email: '',
       password:'',
       passwordConfirm:''
       
       
     },
     onSubmit: values => {
       console.log(values);
     },
     validationSchema,
     
   });
   
   console.log(formik.errors)
   return (
     <form onSubmit={formik.handleSubmit}>
       <p>Email</p>
       <label htmlFor="email"></label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         onBlur={formik.handleBlur}
       />
      {formik.errors.email && formik.touched.email &&<div className='error'>{ formik.errors.email }</div>}
      
        <label htmlFor="password"></label>
        <p>Password</p>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         onBlur={formik.handleBlur}
       />
      {formik.errors.password && formik.touched.password &&<div className='error'>{ formik.errors.password }</div>}
        <label htmlFor="passwordConfirm"></label>
        <p>Password Confirm</p>
        
        
       <input
         id="passwordConfirm"
         name="passwordConfirm"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.username}
         onBlur={formik.handleBlur}
       /> 
       {formik.errors.passwordConfirm && formik.touched.passwordConfirm &&<div className='error'>{ formik.errors.passwordConfirm }</div>}
       {/* <div>
       <label htmlFor="username"></label>
       <p>Choose your gender</p>
        
       <span> Erkek  </span>
        
       <input
         id="username"
         name="gender"
         type="radio"
         checked={formik.values.gender === 'male'}
         onChange={formik.handleChange}
         value='male'
       /> 
       <br/><br/>
       <span> Kadın </span>
       <input
         id="username"
         name="gender"
         type="radio"
         onChange={formik.handleChange}
         checked={formik.values.gender === 'female'}
         value='female'
       /> 

       <br />
       <br/>
      <span> Football </span>
      <input
      type="checkbox"
      name="hobies"
      value="Football"
      onChange={formik.handleChange}
      
      />
      <br/>
      <span> Cinema </span>
      <input
      type="checkbox"
      name="hobies"
      value="Cinema"
      onChange={formik.handleChange}
      
      />
      <br/>
      <span> Basketball </span>
      <input
      type="checkbox"
      name="hobies"
      value="Basketball"
      onChange={formik.handleChange}
      
      />



       </div>
      <br/><br/>
      <select
      name='country'
      onChange={formik.handleChange}
      >
        <option value="tr">
        Turkey
        </option>
        <option value="en">
          England
        </option>
        <option value="usa">
          America
        </option>
      </select> */}
      <br/>
      <br/>
       <button type="submit">Submit</button>
      <br/><br/>
       <code>
       {JSON.stringify(formik.values)}
       </code>
       
     </form>
   );
 };
 export default SignupForm;