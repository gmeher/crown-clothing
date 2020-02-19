import React, {Component} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buton.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { email:'', password:'' }
    }

    _handleSubmit = (event) =>{
        this.preventDefault(event);
        this.setState({email:'',password:''})
    }

    _handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({ [name] : value} )
    }


    render() { 
        return ( 
            <div className="sign-in">
                <h1 className = "title">I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit = {this._handleSubmit}>
                    
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        onChange = {this._handleChange} 
                        label = "email"
                        required
                    />

                    
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        onChange = {this._handleChange} 
                        label = "password"
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit" >
                            Sign In
                        </CustomButton>  

                        <CustomButton type="submit" onClick = {signInWithGoogle} googleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>

                     
                </form>
            </div>
         );
    }
}
 
export default SignIn;