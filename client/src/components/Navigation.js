import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { ReactComponent as EventIcon } from "../icons/eventnav.svg";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as NewsIcon } from "../icons/news.svg";
import { ReactComponent as BrofileIcon } from "../icons/profile.svg";
import { ReactComponent as TagIcon } from "../icons/tag.svg";
import { Link } from 'react-router-dom';


export default function Navigation({ open, setOpen }) {

    return (
        <StyledNavigation open={open}>
            <PseudoButton open={open} onClick={() => setOpen(!open)}>
                &#10005; </PseudoButton>
            <Link exact path to='/'>
                <HomeIcon /> Home</Link>
            <Link to='/newsfeed'>
                <NewsIcon /> Newsfeed </Link>
            <Link to='/brofile'>
                <BrofileIcon /> Brofile </Link>
            <Link to='/selecttags'>
                <TagIcon /> BroTags </Link>

            <Link to='/yoevents'>
                <EventIcon /> YoEvents </Link>

        </StyledNavigation>
    )
}

const StyledNavigation = styled.nav`
background: var(--mainorange);
display:flex;
flex-direction: column;
gap: 1.7rem;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
height: 100vh;
text-align: left;
padding: 2rem;
position: absolute;
top: 0;
left: 0;
transition: transform 0.4s ease-in-out;
z-index: 1;

a{
text-transform: uppercase;
text-decoration: none;
color: white;
letter-spacing: 0.2rem;
}

svg{
    margin-right: 1rem;
}
`

const PseudoButton = styled.button`
background: none;
border: none;
text-align: left;
color: white;
outline: none;
`

Navigation.propTypes = {
    setOpen: PropTypes.func,
    open: PropTypes.bool
}


