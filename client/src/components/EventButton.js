import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function EventButton({ buttonText, clickHandler, isStatic }) {
    return (
        <PostEventButton isStatic={isStatic} onClick={clickHandler}>{buttonText}</PostEventButton>
    )
}
const PostEventButton = styled.button`
background: var(--mainorange);
bottom: 5%;
left:85%;
position:${(props) => (props.isStatic ? "static" : "fixed")};
height:50px;
width:50px;
cursor: pointer;
font-size: 1rem;
font-weight:800;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
border-radius: 50%;
border: none;
color:var(--mainwhite);
opacity:70%;
font-family:"Lucida Grande";
font-size:0.8rem;
`
EventButton.propTypes = {
    buttonText: PropTypes.string,

}
