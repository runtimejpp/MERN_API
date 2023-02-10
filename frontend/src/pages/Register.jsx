
import {useState, useEffect} from "react"
import { FaUser} from "react-icons/fa"
 function Register(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const {name,email,password,password2} = formData
    
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
            <FaUser/> Register
        </h1>
        <p> Please create an account</p>
    </section>
    
    <section className="form">
        <form>
            <div cassName=" form-group">
           <input
                type="text" 
                className="form control"
                id="name"
                name="name" 
                valeu={name} 
                placeholder="Enter Name" 
                onChange={onChange} 
            />
            </div>
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
            <div className='form-group'>
            <input

                type="password2" 
                className="form control"
                id="password2"
                name="password2" 
                valeu={password2} 
                placeholder="Confirm password" 
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

export default Register



