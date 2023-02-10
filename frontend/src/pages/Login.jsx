
import {useState, useEffect} from "react"
import { FaSignInAlt} from "react-icons/fa"
 function Login(){
    const [formData, setFormData] = useState({
        email: '',
        password: '',

    })
    const {email,password} = formData
    
    const OnChange = (e) => {


      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,


    })) 
  }
    const onSubmit = (e) => {
    e.preventDefault()
  }
    return<>
        <section className="heading">
            <h1>
                <FaUser/> Login
            </h1>
        <p> </p>Login and start setting goals
        </section>
    
      <section className="form">
            <form>
            <div className=" form-group">
            <input
                type="text" 
                className="form control"
                id="email"
                name="email" 
                valeu={email} 
                placeholder="Enter your email" 
                onChange={onChange} 
            />
                
            </div>
            <div className=" form-group">
            <input
                type="password" 
                className="form control"
                id="password"
                name="password" 
                valeu={password} 
                placeholder="Enter your password" 
                onChange={onChange} 
            />

            </div>
            
        <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
            </div>
        </form>
    </section>
    </>

}

export default Login



