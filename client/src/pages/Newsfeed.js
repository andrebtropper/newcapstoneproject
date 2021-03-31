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

    const [isHidden, setHidden] = useState(false);
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
background: var(--mainblue);

img{
    margin:1.5rem;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0);
}

`
const SuccessMessage = styled.div`

background: var(--mainblue);
color: white;
position: relative;
border-radius: 0.3rem;
Width: 100%;
height:100%; 
top:0;
left:0;
position:fixed;
padding:1rem;

`

