import { useState } from 'react';
import {auth , googleProvider} from '../config/firebase-config';
import { createUserWithEmailAndPassword , signInWithPopup , signOut} from 'firebase/auth';
import {useNavigate } from 'react-router-dom'

export const Auth = () => {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const navigate = useNavigate(); // Add the useHistory hook

    console.log(auth?.currentUser?.email)
    
   

    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            
            setPassword('');
            setEmail('');
            navigate('/archive');
        }catch(err){
            console.error(err);
        }
        
        
    };

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth,googleProvider);
            
            setPassword('');
            setEmail('');
            navigate('/archive');
        }catch(err){
            console.error(err);
        }
    }

    const LogOut = async () => {
        try{
            await signOut(auth);
            

            navigate('/archive');
        }catch(err){
            console.error(err);
        }
    }
 
    return ( 
        <div className="form-container">
            <h2 className="text-center">Registration Form</h2>
            <p className='text-center'>sign in and start exploring!</p>
            <input className="form-input" placeholder="Email..." type='email' value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input className="form-input" placeholder="Password..."
            type='password' value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            
            <div className='buttons-sign'>
                <button className="signin-button form-button" onClick={signIn}>Sign In</button>
                <button className="google-button form-button" onClick={signInWithGoogle}>
                    <img
                        src="google-icon.png" /* Replace with the path to your Google icon image */
                        alt="Google Icon"
                        className="google-icon"
                    />
                </button>
                <button className="logout-button form-button" onClick={LogOut}>Logout</button>
            </div>
            
        </div>
     );
};
