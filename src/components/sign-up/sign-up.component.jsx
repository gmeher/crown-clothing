import React, {Component} from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buton.component';
import {signInWithGoogle, auth, createUserProfileDocument} from '../../firebase/firebase.utils';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { displayName:'', email:'', password:'',confirmPassword:'', }
    }

    _handleSubmit = async (event) =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("password do not match")
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,  {displayName} );
           
        } catch(error){
            console.error(error);
        }
    }

    _handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({ [name] : value} )
    }


    render() { 
        return ( 
            <div className="sign-up">
                <h1 className = "title">I do not have an account</h1>
                <span>Sign up with Email and Password</span>
                <form onSubmit = {this._handleSubmit}>
                    
                    <FormInput 
                        name="displayName"
                        type="text" 
                        value={this.state.displayName} 
                        onChange = {this._handleChange} 
                        label = "Display Name"
                        required
                    />

                    
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        onChange = {this._handleChange} 
                        label = "Email"
                        required
                    />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        onChange = {this._handleChange} 
                        label = "Password"
                        required
                    />

                    <FormInput 
                        name="confirmPassword" 
                        type="password" 
                        value={this.state.confirmPassword} 
                        onChange = {this._handleChange} 
                        label = "Confirm Password"
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit" >
                            Sign up
                        </CustomButton>  

                    </div>

                     
                </form>
            </div>
         );
    }
}
 
export default SignUp;