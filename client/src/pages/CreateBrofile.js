/*import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';*/
import Form from '../components/Form.js';
import styled from 'styled-components/macro';

export default function CreateBrofile({ open }) {

    /*const [brofile, setBrofile ] = useLocalStorage([])
    
    const addToBrofile = (brofile) => {
    getLocalStorage
        bro_username = brofile.bro_username,
        bro_name = brofile.bro_name,
        bro_location = brofile.bro_location,
        image = brofile.image
    
    }*/


    return (
        <Wrapper>
            <Form open={open} ></Form>
        </Wrapper>
    )
}

const Wrapper = styled.section`
margin: 7rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 3rem;
opacity: ${({ open }) => open ? '40%' : '100%'};

h2{
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    line-height: 2.1rem;
}
`