import React from 'react'
import {useFormik} from 'formik'
import logo from '../../images/neosoft.svg'
import {Link} from 'react-router-dom'

//auth redux
import {connect} from 'react-redux'
import {userLogin} from '../redux/user/userAction'
import {useHistory} from 'react-router-dom'
function Login({userLogin}) 
{
    const history = useHistory()
    const formik= useFormik({
        initialValues:{
            uName:'',
            pass:''
        },
       onSubmit: (values,{setSubmitting, setFeildError} )=>{
           console.log('formValue', values)
           userLogin( values,history,setFeildError, setSubmitting)
           
       }, 
   })    
    return (
        <div className="login">
            <div className="login-form">
            <img src={logo} alt="logo" className="login-form__img"/>
            <center><h2 className='login-form__heading'>Log-In</h2></center>
            <form onSubmit={formik.handleSubmit}>
                <div className="login-form__col">
                    <label htmlFor="uName">UserName</label>
                    <input type="email" id='uName' name ="uName" onChange={formik.handleChange} value={formik.values.uName}/>
                    <span className="login-form__error">Error</span>
                </div>
                <div className="login-form__col">
                    <label htmlFor="pass">password</label>
                    <input type="password" id='pass' name ="pass" onChange={formik.handleChange} value={formik.values.pass}/>
                    <span className="login-form__error">Error</span>
                </div>
                <button type ="submit" className="login-form__submit">Login</button>
            </form>
             </div>
             <div className="login-route">
                <span><Link to='/signup'> Register </Link></span>
                <span><Link to='/forgot Password'> Forgot Password </Link></span>
             </div>
        </div>
    )
}
export default connect(null,{userLogin}) (Login )