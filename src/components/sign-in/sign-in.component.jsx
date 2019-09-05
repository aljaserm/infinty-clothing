import React from 'react';
// import './sign-in.styles.scss';
import { SignInContainer, TitleContainer , ButtonsContainer } from './sign-in.styles';
import InputForm from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';

import { auth } from '../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email:'',
            password:''
        }
    }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.setState({email:'', password:''})
    // }

    handleSubmit = async  event =>{
        event.preventDefault();
        const{ email, password } =this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event=>{
        const{ value,name } =event.target;
        this.setState({[name]: value})
    }


    render() {
        const { googleSignInStart } = this.props;
        return(
                <SignInContainer>
                    <TitleContainer>Have an account</TitleContainer>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <InputForm name="email" type="email"  value={this.state.email} handleChange= {this.handleChange} required  label="Email"/>
                        <InputForm name="password" type="password" value={this.state.password}  handleChange= {this.handleChange}  required  label="Password" />
                        <ButtonsContainer>
                        <CustomButton type="submit" > Sign in</CustomButton> 
                        <CustomButton type='button' onClick = {googleSignInStart} isGoogleSignIn> Sign in with Google</CustomButton> 
                        </ButtonsContainer>
                    </form>
                </SignInContainer>    
                )
            }
}

const mapDispatchToProps =  dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);