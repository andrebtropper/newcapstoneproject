
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { ReactComponent as BurgerIcon } from "../icons/burger.svg";
import blueLogo from '../icons/logoblue.svg'
export default function Header({ open, setOpen }) {
    return (
        <Wrapper open={open}>

            <PseudoButton onClick={() => setOpen(!open)}>
                <BurgerIcon />
            </PseudoButton>
            <img src={blueLogo} />

        </Wrapper>
    )
}
const Wrapper = styled.section`

height: 6rem;
padding-top: 1rem;
padding-left: 1.5rem;
color: white;
opacity: ${({ open }) => open ? '40%' : '100%'};
background:var(--mainorange);
display:flex;
gap:3rem;



`

const PseudoButton = styled.button`
background: var(--mainblue);
border: solid 2px var(--mainblue);
padding: 10px;
margin-bottom:10px;




`

Header.propTypes = {
    headline: PropTypes.string,
    setOpen: PropTypes.func,
    open: PropTypes.bool
}