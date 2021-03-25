import styled from 'styled-components';
import PropTypes from 'prop-types';
import DefaultButton from '../components/DefaultButton';


export default function WelcomePage({ open }) {

    return (
        <Wrapper open={open}>


            <h2>YOBro! Lets get started by setting up your Brofile!</h2>

            <a href='/createbrofile'><DefaultButton buttonText='Create YOBrofile'></DefaultButton></a>
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
    color:var(--mainorange);
    border: 2px solid var(--mainorange);
    padding: 2.5rem;
    border-radius:50%;
    height:14rem;
    width:18rem;
    background: var(--mainwhite);
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
    text-shadow:0.1rem 0.1rem 0.1rem rgba(0,0,0, 35%);

}
`

WelcomePage.propTypes = {
    open: PropTypes.bool
}