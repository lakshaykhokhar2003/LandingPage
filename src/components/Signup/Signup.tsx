import classes from './Signup.module.scss';
import {toast} from 'react-toastify';

const Signup = () => {
    const handleSubmit = () => {
        toast.success('You have successfully signed up for our exclusive special deals', {
            autoClose: 2000
        });
    }
    return <div className={classes.Signup}>
        <h1>Sign up and get exclusive special deals</h1>
        <div className={classes.Input}>
            <input type="text"/>
            <button onClick={handleSubmit}>Sign Up</button>
        </div>
    </div>
}

export default Signup