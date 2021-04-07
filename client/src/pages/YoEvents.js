import React, { useState } from 'react'
import { ReactComponent as EventLogo } from "../icons/yoevents.svg";
import styled from 'styled-components/macro';


export default function YoEvents() {

    const likedEvents = JSON.parse(localStorage.getItem('likedEvents') || '{}');
    const userEvent = JSON.parse(localStorage.getItem('newEvent') || '{}');

    const [currentTab, setCurrentTab] = useState('tab1');
    const tabList = [
        {
            name: 'tab1',
            label: 'Your Events',
            content: (
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
                </YourEventsWrap>
            )
        },
        {
            name: 'tab2',
            label: 'Favorites',
            content: (
                <YourEventsWrap>
                    <Title>
                        {likedEvents}
                    </Title>
                </YourEventsWrap>

            )
        }

    ];

    return (
        <div>

            <Category>
                <EventLogo /> </Category>
            <EventWrapper>
                <TabNav>
                    {
                        tabList.map((tab, i) => (
                            <TabButton
                                key={i}
                                onClick={() => setCurrentTab(tab.name)}
                                className={(tab.name === currentTab) ? 'active' : ''}>
                                {tab.label}
                            </TabButton>
                        ))
                    }
                </TabNav>

                {tabList.map((tab, i) => {
                    if (tab.name === currentTab) {
                        return <div key={i}>{tab.content}</div>;
                    } else {
                        return null;
                    }
                })
                }
            </EventWrapper>
        </div>

    )
}

const EventWrapper = styled.div`
padding:5px;
border:var(--mainorange) solid 1px;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
background:var(--darkblue);


`


const Category = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
margin:2rem 0;

`
const About = styled.div`
padding:10px;
color:var(--mainblue);
font-family:"Lucida Grande";
`

const LocateDate = styled.div`
display:flex;
flex-direction:row;
margin:10px;
justify-content:center;
font-family:"Lucida Grande";
`
const Date = styled.div`
background:var(--mainorange);
color:var(--mainwhite);
border-radius:5px;
padding:3px;
margin:0 5px;
font-family:"Lucida Grande";
`
const Title = styled.label`
flex-direction:row;
background:var(--mainorange);
color:var(--mainwhite);
padding:3px;
text-align:center;
font-family:"Lucida Grande";
`
const YourEventsWrap = styled.div`
display:flex;
flex-direction:column;
background:white;
margin:2rem;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
`
const TabNav = styled.div`
display:flex;
flex-direction:row;
justify-content:center;


`
const TabButton = styled.button`

background:var(--mainorange);
color:var(--mainwhite);
font-size:1rem;
padding:05px;
border:solid white 1px;
border-radius:2px;
margin:1rem;
&.active{
    transform: scale(1.3);
    background:var(--mainblue);
    color:var(--mainorange);
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
    border:solid var(--mainorange) 1px;
}

`
