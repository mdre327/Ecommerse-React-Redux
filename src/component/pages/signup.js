import React from 'react'
import {useFormik} from 'formik'
import logo from '../../images/neosoft.svg'

//auth redux
import {connect} from 'react-redux'
import {userSignup} from '../redux/user/userAction'
import {useHistory} from 'react-router-dom'
function SignUp({userSignup}) {
    const history = useHistory()
   const formik= useFormik({
    initialValues:{
           Name:'',
           pass:'',
           email:'',
           add:'',
       },
       onSubmit: (values,{setSubmitting, setFeildError} )=>{
           console.log('formValue', values)
           userSignup( values,history,setFeildError, setSubmitting)
           
       }, 
   })    
    return (
        <div className="login">
            <div className="login-form">
            <img src={logo} alt="logo" className="login-form__img"/>
            <center><h2 className='login-form__heading'>Sign UP</h2></center>
            <form onSubmit={formik.handleSubmit}>
                <div className="login-form__col">
                    <label htmlFor="uName">Full Name</label>
                    <input type="email" id='Name' name ="Name" onChange={formik.handleChange} value={formik.values.Name}/>
                    <span className="login-form__error">Error</span>
                </div>
                <div className="login-form__col">
                    <label htmlFor="pass">Email</label>
                    <input type="email" id='email' name ="email" onChange={formik.handleChange} value={formik.values.email}/>
                    <span className="login-form__error">Error</span>
                </div>
                <div className="login-form__col">
                    <label htmlFor="pass">Address</label>
                    <input type="text" id='add' name ="add" onChange={formik.handleChange} value={formik.values.add}/>
                    <span className="login-form__error">Error</span>
                </div>
                <div className="login-form__col">
                    <label htmlFor="pass">Password</label>
                    <input type="password" id='pass' name ="pass" onChange={formik.handleChange} value={formik.values.pass}/>
                    <span className="login-form__error">Error</span>
                </div>

                <button type ="submit" className="login-form__submit">Register</button>
            </form>
             </div>
        </div>
    )
}
export default connect(null,{userSignup})(SignUp )