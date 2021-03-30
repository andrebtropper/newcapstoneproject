import EventButton from '../components/EventButton';
import EventForm from '../components/EventForm';
import HoggNormal from '../images/FakePostImages/HoggNormal.svg';
import CordeNormal from '../images/FakePostImages/CordeNormal.svg';
import MaizeNormal from '../images/FakePostImages/MaizeNormal.svg';
import StefanNormal from '../images/FakePostImages/StefanNormal.svg';
import SimonNormal from '../images/FakePostImages/SimonNormal.svg';
import MolnarNormal from '../images/FakePostImages/MolnarNormal.svg';
import styled from 'styled-components/macro';

export default function Newsfeed({ open }) {

    return (
        <>
            <EventForm open={open} ></EventForm>
            <PostWrapper>
                <img src={HoggNormal} />
                <img src={MaizeNormal} />
                <img src={StefanNormal} />
                <img src={MolnarNormal} />
                <img src={SimonNormal} />
                <img src={CordeNormal} />
            </PostWrapper>
            <EventButton open={open} buttonText="+ " > </EventButton>

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


