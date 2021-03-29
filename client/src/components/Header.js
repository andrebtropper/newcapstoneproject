
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { ReactComponent as BurgerIcon } from "../icons/burger.svg";

export default function Header({ open, setOpen, headline }) {
    return (
        <Wrapper open={open}>
            <PseudoButton onClick={() => setOpen(!open)}>
                <BurgerIcon />
            </PseudoButton>
            <h1>{headline}</h1>
        </Wrapper>
    )
}
const Wrapper = styled.section`
background-color: var(--mainorange);
height: 7rem;
padding-top: 2rem;
padding-left: 1.5rem;
color: white;
opacity: ${({ open }) => open ? '40%' : '100%'};

h1{
    margin:0;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-size: 1.6rem;
    text-align:center;
}
`

const PseudoButton = styled.button`
background: var(--mainblue);
border: solid 2px var(--mainblue);
padding: 10px;
`

Header.propTypes = {
    headline: PropTypes.string,
    setOpen: PropTypes.func,
    open: PropTypes.bool
}