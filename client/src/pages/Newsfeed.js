import EventButton from '../components/EventButton';
import EventForm from '../components/EventForm';
import HoggNormal from '../images/FakePostImages/HoggNormal.svg';
import CordeNormal from '../images/FakePostImages/CordeNormal.svg';
import MaizeNormal from '../images/FakePostImages/MaizeNormal.svg';
import StefanNormal from '../images/FakePostImages/StefanNormal.svg';
import SimonNormal from '../images/FakePostImages/SimonNormal.svg';
import MolnarNormal from '../images/FakePostImages/MolnarNormal.svg';
import styled from 'styled-components/macro';
import { useState } from 'react';

export default function Newsfeed({ open }) {

    const [isHidden, setHidden] = useState(true);
    function toggleHidden() {
        setHidden(!isHidden)
    }
    function isClosed() {
        setHidden(true)
    }
    function handleChild(value) {
        setHidden(value)
    }

    return (
        <>
            {isHidden && <SuccessMessage> <EventForm open={open} onChildEvent={handleChild} ></EventForm></SuccessMessage>}
            <PostWrapper>
                <img src={HoggNormal} />
                <img src={MaizeNormal} />
                <img src={StefanNormal} />
                <img src={MolnarNormal} />
                <img src={SimonNormal} />
                <img src={CordeNormal} />
            </PostWrapper>

            <EventButton open={open} buttonText="+ " clickHandler={() => toggleHidden()} > </EventButton>

        </>
    )
}


const PostWrapper = styled.section`
display:flex;
flex-direction: column;
background: var(--darkblue);


img{
    margin:1.5rem;
    box-shadow: 0.2rem 0.2rem 0.2rem 0.4rem var(--otherorange);
}

`
const SuccessMessage = styled.div`
background: var(--mainblue);
color: white;
padding: 1rem;
margin: 1rem;
position: fixed;
border-radius: 0.3rem;
top:0%;
bottom:0%;
left:auto;
right:auto;
overflow-y:scroll;
`

