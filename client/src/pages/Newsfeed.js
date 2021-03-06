import EventButton from '../components/EventButton';
import EventForm from '../components/EventForm';
import fakePosts from '../images/FakePosts';
import styled from 'styled-components/macro';
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Yonewsfeed from "../icons/newsfeedlogo.svg";

export default function Newsfeed({ open }) {

    const [likedEvents, saveEvent] = useLocalStorage('likedEvents', []);
    const isEventLiked = (liked) => likedEvents.some(likedEvent => likedEvent === liked)

    const selectEvent = (liked) => {
        if (isEventLiked(liked)) {
            saveEvent(likedEvents.filter(likedEvent => likedEvent !== liked));

        } else {
            saveEvent([...likedEvents, liked])
        }
    }
    const [isVisible, setVisible] = useState(false);
    function callbackFunction() {
        setVisible(!isVisible);
    }

    function toggleVisible() {
        setVisible(!isVisible);
    }
    const likedPosts = [
        {
            name: 'HoggNormal',
            alt: 'Post from Hoggwarts'
        },
        {
            name: 'MaizeNormal',
            alt: 'Post from Maizewindu'
        },
        {
            name: 'CordeNormal',
            alt: 'Post from CuttheCorde'
        },
        {
            name: 'StefanNormal',
            alt: 'Post from Korderbro'
        },
        {
            name: 'SimonNormal',
            alt: 'Post from Simonsays'
        },
        {
            name: 'MolnarNormal',
            alt: 'Post from MrMolnar'
        },
    ]
    return (
        <>
            <LogoWrap>
                <img src={Yonewsfeed} alt="logo" />
            </LogoWrap>
            {isVisible && <SuccessMessage> <EventForm open={open} parentCallback={callbackFunction} ></EventForm></SuccessMessage>}
            <PostWrapper>

                {likedPosts.map(liked =>
                    <EventImage
                        onClick={e => selectEvent(liked.name)}
                        src={fakePosts[liked.name]}
                        alt={liked.alt}
                        className={isEventLiked(liked.name) ? 'active' : ''} />
                )}
            </PostWrapper>

            <EventButton
                open={open}
                buttonText="post event"
                clickHandler={() => toggleVisible()}
            >
                {" "}
            </EventButton>
        </>
    )
}
const LogoWrap = styled.label`
display:flex;
justify-content:center;
margin-top:1rem;
`
const EventImage = styled.img`
cursor:pointer;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0);
&:before{
    opacity: 100%;
}
&.active{
    opacity: 30%;  
}
`
const PostWrapper = styled.section`
display: flex;
flex-direction: column;
background: var(--mainblue);
img{
    margin: 1rem;  
}
`
const SuccessMessage = styled.div`
margin-top:1rem;
background: var(--mainblue);
color: white;
margin-left:2.5rem;
border - radius: 0.3rem;
Width: 100 %;
height: 100 %;
position: fixed;
top:5%;
`

