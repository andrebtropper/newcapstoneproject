import styled from 'styled-components';
import PropTypes from 'prop-types';



export default function EventButton({ buttonText, clickHandler }) {
    return (
        <PostEventButton onClick={clickHandler}>{buttonText}</PostEventButton>
    )
}


const PostEventButton = styled.button`
background: var(--mainorange);
bottom:05%;
left:85%;
position:fixed;
height:50px;
width:50px;
cursor: pointer;
font-size: 1.5rem;
font-weight:800;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
font-family:sans Serif;
border-radius: 50%;
border: none;
color:var(--mainwhite);
opacity:70%;
`








EventButton.propTypes = {
    buttonText: PropTypes.string
}