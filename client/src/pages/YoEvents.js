import { Route, Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import { ReactComponent as EventLogo } from "../icons/yoevents.svg";

export default function YoEvents() {

    const likedEvents = JSON.parse(localStorage.getItem('likedEvents') || '{}');
    const userEvent = JSON.parse(localStorage.getItem('newEvent') || '{}');
    return (
        <>


            <Category>    <EventLogo /></Category>

            <YourEventsWrap>

                <Title>
                    {userEvent['event_title']}
                </Title>
                <LocateDate>
                    <Date>
                        {userEvent['event_location']}
                    </Date>
                    <Date>
                        {userEvent['event_month']}

                        {userEvent['event_day']}
                    </Date>
                </LocateDate>
                <About>
                    {userEvent['event_description']}
                </About>

                {likedEvents}

            </YourEventsWrap>
        </>
    )
}


const YourEventsWrap = styled.div`
display:flex;
flex-direction:column;
background:white;
margin:2rem;
padding-bottom:20px;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
`

const Category = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
background:var(--mainwhite);
margin:0.5rem;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);

`
const About = styled.div`
padding:10px;
color:var(--mainblue);
`
const LocateDate = styled.div`
display:flex;
flex-direction:row;
margin:10px;
justify-content:center;
`


const Date = styled.div`
background:var(--mainorange);
color:var(--mainwhite);
border-radius:5px;
padding:3px;
margin:0 5px;

`


const Title = styled.label`
flex-direction:row;
background:var(--mainorange);
color:var(--mainwhite);

padding:3px;

text-align:center;
`