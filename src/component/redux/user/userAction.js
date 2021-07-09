import axios from 'axios'
import { sessionService } from 'redux-react-session'
export const userLogin =(credential, history,setFeildError,setSubmitting) =>{
 
    axios.post("localhost:3000/user", credential,
        {
            header:{
                "Content-Type":'application/json'
            }
        }

        )
        .then((response) =>{
            const {data} = response
        })
        .catch((err) =>{})
    const user ={
        email:"mdre327@gmail",
        password:"mdre327"
    }
    const status = 'TRUE'
 let token
 let userData;
    if(status === 'TRUE'){
            // access user and redirecct
            sessionService.saveSession(token).then(() =>{

                sessionService.saveUser(userData).then(() =>{
                    history.push('/pannel')
                   
                }).catch(err =>console.log(err))
            }).catch(err =>console.log(err))
    }
    else{
         //return error to the user
    }
}
export const userSignup=(credential,history,setFeildError,setSubmitting) =>{
    axios.post("localhost:3000/user",credential,{
        header:{
            "Content-Type": "application/json"
        }
    })
    .then(response=>{
        console.log(response)
    })
}

export const userLogout =() =>{
    sessionService.deleteSession();
    sessionService.deleteUser();
   /*  history.push('/') */
}

export const gmailLogin =(userData) =>{
    sessionService.saveSession().then(() =>{

        sessionService.saveUser(userData).then(() =>{
            history.push('/pannel')
           
        }).catch(err =>console.log(err))
    }).catch(err =>console.log(err))
    
}