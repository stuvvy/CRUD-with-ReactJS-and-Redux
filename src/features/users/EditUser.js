import React, {useState} from 'react';
import TextField from "../../components/TextField"
import Button from "../../components/Button"
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from './userSlice';

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    const navigate = useNavigate();
    const exisitingUser = users.filter(user => user.id === params.id);
    const { name, email } = exisitingUser[0];
    const [values, setValues] = useState({
        name,
        email
    });
    
    const handleEditUser = () => {
        setValues({ name: '', email: ''})
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email: values.email
        }));
        navigate('/');
    }

  return (
    <div className="mt-10 max-w-x1 mx-auto">
    <TextField 
        label="Name"
        value={values.name}
        onChange={(e) => setValues({...values, name: e.target.value})}
        inputProps={{ type: 'text', placeholder: 'John Doe'}}
    />
    <br />
    <TextField 
        label="Email"
        value={values.email}
        onChange={(e) => setValues({...values, email: e.target.value})}
        inputProps={{ type: 'email', placeholder: 'johndoe@gmail.com'}}
    />

    <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser;