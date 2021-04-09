import React, { useState } from 'react';
import { ReactComponent as EventLogo } from "../icons/yoevents.svg";
import styled from 'styled-components/macro';
import { ReactComponent as YOCreatedEvent } from "../images/FakePostImages/createdevent.svg";
import { ReactComponent as Favorites } from "../images/FakePostImages/fakefavs.svg";


export default function YoEvents() {

    // const likedEvents = JSON.parse(localStorage.getItem('likedEvents') || '{}');//
    //  const userEvent = JSON.parse(localStorage.getItem('newEvent') || '{}');//

    const [currentTab, setCurrentTab] = useState('tab1');
    const tabList = [
        {
            name: 'tab1',
            label: 'Your Events',
            content: (
                <YourEventsWrap>
                    <YOCreatedEvent />
                </YourEventsWrap>
            )
        },
        {
            name: 'tab2',
            label: 'Favorites',
            content: (
                <YourEventsWrap>
                    <Favorites />
                </YourEventsWrap>


            )
        }
    ];

    return (
        <div>
            <Category> <EventLogo /> </Category>
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

        </div>
    )
}

const Category = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
background:var(--darkblue);
padding:20px 0px 10px 0px;
`
const YourEventsWrap = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin:1.5rem 1rem 1rem 1rem;;

`
const TabNav = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
background:var(--darkblue);
`
const TabButton = styled.button`
opacity:60%;
background:var(--mainorange);
color:var(--mainwhite);
font-size:1rem;
margin:0 5px 0 0px;
&.active{
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
    opacity:100%;
}
`
