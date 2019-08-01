import React from 'react';
import './sign-in.styles.scss';
import InputForm from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event=>{
        const{ value,name } =event.target;
        this.setState({[name]: value})
    }


    render() {
        return(
                <div className='sign-in'>
                    <h2>Have an account</h2>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <InputForm name="email" type="email"  value={this.state.email} handleChange= {this.handleChange} required  label="Email"/>
                        <InputForm name="password" type="password" value={this.state.password}  handleChange= {this.handleChange}  required  label="Password" />
                        <CustomButton type="submit" > Sign in</CustomButton> 
                    </form>
                </div>    
                )
            }
}

export default SignIn;