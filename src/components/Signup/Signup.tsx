import {useRef} from "react";
import {toast} from 'react-toastify';
import classes from './Signup.module.scss';

const Signup = () => {
    const textRef = useRef<HTMLInputElement>(null);
    const handleSubmit = () => {
        if (!textRef.current?.value || !textRef.current?.value.trim()) {
            return toast.error('Please enter your email', {
                autoClose: 2000
            });
        }
        toast.success('You have successfully signed up for our exclusive special deals', {
            autoClose: 2000
        });
    }
    return <div className={classes.Signup}>
        <h1>Sign up and get exclusive special deals</h1>
        <div className={classes.Input}>
            <input type="text" ref={textRef}/>
            <button onClick={handleSubmit}>Sign Up</button>
        </div>
    </div>
}

export default Signup