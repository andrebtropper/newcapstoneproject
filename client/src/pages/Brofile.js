import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import profilepic from '../images/profilepic.svg';
import { ReactComponent as EditTags } from "../icons/edittags.svg";
import { ReactComponent as EditBrofile } from "../icons/editbrofileicon.svg";
import { ReactComponent as Yobrofile } from "../icons/brofilelogo.svg";

export default function Brofile() {

    const user = JSON.parse(localStorage.getItem('broInfo'));
    const userTags = JSON.parse(localStorage.getItem('userTags'));


    return (
        <>

            <ProfileCard>
                <Yobrofile />
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

const ButtonWrap = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
margin:1rem;
cursor:pointer;


`

const TagStyle = styled.div`
padding:10px;
color:var(--mainwhite);
display:flex;
flex-direction:row;
margin:10px;
align-items:center;
flex-wrap: wrap;
border-radius:20px;
box-shadow: 0.2rem 0.4rem 0.2rem rgba(0,0,0, 35%);
background:white;
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
margin-top:2rem;
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

