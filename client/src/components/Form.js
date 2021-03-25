import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isValidBrofile from '../lib/validatFunction';
/*import { useLocalStorage } from '../hooks/useLocalStorage';*/

export default function Form({ submitFunction, open }) {

    const userBrofile = {
        bro_username: '',
        bro_name: '',
        bro_location: '',
        image: ''
    }
    const [newBrofile, setNewBrofile] = useState(userBrofile);
    const [valid, setValid] = useState(false)

    const handleChange = event => {
        const field = event.target;
        const value = field.value;
        setNewBrofile({
            ...newBrofile,
            [field.name]: value
        })

        function submitForm(event) {
            event.preventDefault();
            if (isValidBrofile(newBrofile)) {
                setValid(true);
                submitFunction(newBrofile);
                setNewBrofile(userBrofile);
            }
        }
        return (
            <>
                <FormWrapper open={open} valid={valid} onSubmit={submitForm}>
                    <input
                        type='text'
                        name='bro_username'
                        placeholder='Enter your desired Username'
                        onChange={handleChange}
                        value={newBrofile.bro_username} />

                    <input
                        type='text'
                        name='bro_name'
                        placeholder='Enter your full name'
                        onChange={handleChange}
                        value={newBrofile.bro_name} />
                    <input
                        type='text'
                        name='bro_location'
                        placeholder='Enter your city'
                        onChange={handleChange}
                        value={newBrofile.bro_location} />

                    <label>Add image
        </label>
                    <input
                        type='file'
                        name='image'
                        placeholder='Add image'
                        onChange={handleChange}
                        value={newBrofile.image}
                    />
                    <CreateBrofileButton valid={valid} type='submit'> Create Profile</CreateBrofileButton>
                </FormWrapper>
            </>
        )
    }
}

const FormWrapper = styled.form`
display:flex;
flex-direction: column;
margin: 1.2rem 2.3rem;
gap: 0.2rem;
opacity: ${({ open, valid }) => open || valid ? '40%' : '100%'};
position: absolute;

input, select, textarea{
    margin-bottom: 1rem;
    border-radius: 1rem;
    box-shadow: 0.1rem 0.2rem 0.2rem 0.1rem rgba(0,0,0, 35%);
    border: none;
    padding: 0.6rem;
    background: white;
    outline: none;
    font-style: italic;
    color: var(--mainwhite);
    }

    /*input:valid,
select:valid,
textarea:valid{
  box-shadow: 0 0 5px 1px var(--mainwhite);
}*/
/*textarea{
    height: 6rem;
    padding: 0.8rem;
}
label{
    margin-left: 0.5rem;
    color: var(--mainwhite);
}

`
const CreateBrofileButton = styled.button`
background: ${({ valid }) => valid ? 'var(--red)' : 'var(--lightgrey)'};
padding: 1rem;
border-radius: 0.4rem;
border: none;
color: white;
text-transform: uppercase;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 35%);
cursor: pointer;
width: 230px;
font-size: 1.1rem;
`

Form.propTypes = {
    submitFunction: PropTypes.func
}
