
import Form from '../components/Form.js';
import styled from 'styled-components/macro';

export default function CreateBrofile({ open }) {

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