import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import profilepic from '../images/profilepic.svg';

import { ReactComponent as TagLogo } from "../icons/edittags.svg";
import { ReactComponent as Editbrofileicon } from "../icons/editbrofileicon.svg";
export default function Brofile() {

    const user = JSON.parse(localStorage.getItem('broInfo'));
    const userTags = JSON.parse(localStorage.getItem('userTags'));


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
    font-size:0.5rem;
    font-family:"Lucida Grande";
}
`


const ProfilePic = styled.div`
margin-top:1rem;
`
const ProfileCard = styled.section`
display:flex;
flex-direction:column;
align-items:center;
`
const UserFullName = styled.div`
font-family:"Lucida Grande";
background:var(--mainorange);
color:var(--mainwhite);
border-radius:5px;
padding:3px;
margin:0 5px;
`
const UserName = styled.div`
font-size:2rem;
color:var(--mainorange);
margin-top:1rem;

`
const UserBroTags = styled.div`
color:var(--mainwhite);
display:flex;
flex-direction:row;
margin:10px;
align-items:center;
`

