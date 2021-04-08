import styled from 'styled-components';
import PropTypes from 'prop-types';
import DefaultButton from '../components/DefaultButton';
import { Link } from 'react-router-dom';
import Avengers from '../icons/logowhite.svg'


export default function WelcomePage({ open }) {

    return (
        <Wrapper open={open}>
            <h2>  <img src={Avengers} alt="logo" /></h2>
            <Link to='/createbrofile'><DefaultButton buttonText='Create YOBrofile'></DefaultButton></Link>
        </Wrapper>
    )
}
const Wrapper = styled.section`
margin: 2rem;
display: flex;
flex-direction: column;
align-items: center;
opacity: ${({ open }) => open ? '40%' : '100%'};

`


WelcomePage.propTypes = {
    open: PropTypes.bool
}