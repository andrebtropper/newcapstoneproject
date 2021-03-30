import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import EventTags from '../components/EventTags';


export default function YoEvents() {
    const userEvent = JSON.parse(localStorage.getItem('newEvent') || '{}');

    return (
        <>

            <Category>YoEvents</Category>
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
                    </Date>
                    <Date>
                        {userEvent['event_day']}
                    </Date>
                </LocateDate>
                <About>
                    {userEvent['event_description']}
                </About>
                <TagStyle>
                    {userEvent['eventtags']}
                </TagStyle>
            </YourEventsWrap>

        </>
    )
}
const TagStyle = styled.div`
padding:5px;

width: 100%;
color:var(--mainblue);
display:flex;
flex-direction:row;
margin:8px;
align-items:center;
flex-wrap: wrap;
span {
    margin: 0.2rem;
    background:var(--mainorange); 
    border-radius:20px;
    padding:5px;
    font-size:0.5rem;
}
`

const Category = styled.h3`
margin-top:1.8rem;
margin-bottom:10px;
width:9rem;
margin-left:1rem;
border-radius:20px;
background:var(--mainorange);

color:var(--mainwhite);
padding:5px;
size:1rem;
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

const YourEventsWrap = styled.div`
display:flex;
flex-direction:column;
background:white;
margin-bottom:3rem;
padding-bottom:20px;
margin-left:20px;
margin-right:20px;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);

`
