import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import profilepic from '../images/profilepic.svg';
import { ReactComponent as EditTags } from "../icons/edittags.svg";
import { ReactComponent as EditBrofile } from "../icons/editbrofileicon.svg";
import { ReactComponent as Yobrofile } from "../icons/brofilelogo.svg";
import tagLogo from '../icons/taglogo.svg';

export default function Brofile() {

    const user = JSON.parse(localStorage.getItem('broInfo'));
    const userTags = JSON.parse(localStorage.getItem('userTags'));
    return (
        <>
            <TopLabel>
                <Yobrofile />
            </TopLabel>
            <ProfileCard>

                <ProfilePic>
                    <img src={profilepic} alt="profile" />
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
                <LogoWrap>
                    <img src={tagLogo} alt="logo" />
                </LogoWrap>
                <TagStyle>
                    {userTags.map(tag => (<span>{tag}</span>))}
                </TagStyle>
            </ProfileCard>

            <ButtonWrap>
                <Link to="/selecttags">
                    <EditTags />
                </Link>
                <Link to="/createbrofile">
                    <EditBrofile />
                </Link>
            </ButtonWrap>
        </>
    )
}
const TopLabel = styled.label`
display:flex;
flex-direction:row;
justify-content:center;
background:var(--darkblue);
padding:20px;
`
const ButtonWrap = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
margin:1rem 0rem 0rem 0rem;
cursor:pointer;
box-shadow: 0.1rem 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
background:var(--darkblue);
`
const TagStyle = styled.div`
padding:15px;
color:var(--mainwhite);
display:flex;
flex-direction:row;
align-items:center;
flex-wrap: wrap;
border-radius:20px;
border:var(--mainorange) 2px solid;
span {
    margin: 0.2rem;
    background:var(--mainorange); 
    border-radius:20px;
    padding:5px;
    font-size:0.7rem;
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
margin:0.7rem 1rem 1rem 1rem;
border:var(--mainorange) 5px solid;
padding:10px
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
const LogoWrap = styled.div`
display:flex;
justify-content:center;
padding-top:1rem;
height:75px;
`
