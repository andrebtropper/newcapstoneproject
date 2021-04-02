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
                <div className="tab-content">
                    <h2>{likedEvents}</h2>
                    <p>anything else.</p>
                    <p>Lorem ipsum dolor sit amet ...</p>
                </div>
            )
        }

    ];

    return (
        <div>

            <Category>
                <EventLogo /> </Category>

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

            {
                tabList.map((tab, i) => {
                    if (tab.name === currentTab) {
                        return <div key={i}>{tab.content}</div>;
                    } else {
                        return null;
                    }
                })
            }
        </div>
    )
}



const Category = styled.div`
display:flex;
flex-direction:row;
justify-content:center;

margin:2rem 0;


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
margin:2rem;
padding-bottom:20px;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
`
const TabNav = styled.div`
display:flex;
flex-direction:row;
justify-content:center;

background:white;
`
const TabButton = styled.button`
background:var(--mainorange);
color:var(--mainwhite);
font-size:0.5rem;
padding:10px;
border:white solid 2px;
margin:0.3rem;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
&.active{
    transform: scale(1.2);
    border:var(--mainorange) 2px solid;
    background:var(--mainblue);
    color:var(--mainorange);
}

`
