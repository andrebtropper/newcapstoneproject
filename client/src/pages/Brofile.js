import { Route, Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import profilepic from '../images/profilepic.svg';
import { ReactComponent as EventLogo } from "../icons/yoevents.svg";
/*import EventButton from '../components/EventButton';*/
/*import tagLogo from '../icons/edittags.svg';*/
/*import editbrofileicon from '../icons/editbrofileicon.svg';*/
/*import EventTags from '../components/EventTags';*/
import { ReactComponent as TagLogo } from "../icons/edittags.svg";
import { ReactComponent as Editbrofileicon } from "../icons/editbrofileicon.svg";
export default function Brofile() {

    const user = JSON.parse(localStorage.getItem('broInfo'));
    const userTags = JSON.parse(localStorage.getItem('userTags'));
    const userEvent = JSON.parse(localStorage.getItem('newEvent') || '{}');
    //const userEvents = JSON.parse(localStorage.getItem('newEvent'));//


    return (
        <>

            <ProfileCard>
                <ProfilePic>
                    <img src={profilepic} />
                </ProfilePic>
                <UserName>
                    {user['bro_username']}
                </UserName>
                <UserBroTags>
                    <UserFullName>
                        {user['bro_name']}
                    </UserFullName>
                    <UserFullName>
                        {user['bro_location']}
                    </UserFullName>
                </UserBroTags>
                <TagStyle>
                    {userTags.map(tag => (<span>{tag}</span>))}
                </TagStyle>
            </ProfileCard>


            <ButtonWrap>
                <Link to='/selecttags'>  <TagLogo /> </Link>

                <Link to='/createbrofile'>  <Editbrofileicon /> </Link>
            </ButtonWrap>


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

            </YourEventsWrap>


        </>
    )
}

const ButtonWrap = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
margin:1rem;

`

const TagStyle = styled.div`
padding:10px;
color:var(--mainwhite);
display:flex;
flex-direction:row;
margin:10px;
align-items:center;
flex-wrap: wrap;
border:2px solid var(--mainorange);
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
span {
    margin: 0.2rem;
    background:var(--mainorange); 
    border-radius:20px;
    padding:5px;
    font-size:0.2rem;
}
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


const ProfilePic = styled.div`
margin-top:1rem;
`


const YourEventsWrap = styled.div`
display:flex;
flex-direction:column;
background:white;
margin:2rem;
padding-bottom:20px;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
`
const ProfileCard = styled.section`
display:flex;
flex-direction:column;
align-items:center;
`



const UserFullName = styled.div`

background:var(--mainorange);
color:var(--mainwhite);
border-radius:5px;
padding:3px;
margin:0 5px;
`



const UserName = styled.div`
font-size:2rem;
color:var(--mainorange);

`



const UserBroTags = styled.div`
color:var(--mainwhite);
display:flex;
flex-direction:row;
margin:10px;
align-items:center;
`

const ToTagsButton = styled.button`
margin:1rem;
cursor: pointer;
border-radius:20px;

`