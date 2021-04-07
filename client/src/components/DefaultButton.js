import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function DefaultButton({ buttonText, clickHandler }) {
    return (
        <Button onClick={clickHandler}>{buttonText}</Button>
    )
}
const Button = styled.button`
background: var(--mainorange);
padding: 1rem;
border-radius: 0.4rem;
border: none;
color: white;
text-transform: uppercase;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
cursor: pointer;
width: 230px;
font-size: 1.1rem;
outline:white;
font-family:"Lucida Grande";

`

DefaultButton.propTypes = {
    buttonText: PropTypes.string
}
