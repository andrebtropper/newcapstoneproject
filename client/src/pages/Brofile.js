import styled from 'styled-components/macro';
import profilepic from '../images/styledprofile.png'
import EventButton from '../components/EventButton';

export default function Brofile() {

    const user = JSON.parse(localStorage.getItem('broInfo'));
    const userTags = JSON.parse(localStorage.getItem('userTags'));
    const userEvent = JSON.parse(localStorage.getItem('newEvent'));
    //const userEvents = JSON.parse(localStorage.getItem('newEvent'));//


    return (
        <body>

            <img src={profilepic} />
            <ProfileCard>

                <UserBroTags>
                    <UserName>
                        {user['bro_username']}
                    </UserName>

                    <UserFullName>
                        {user['bro_name']}
                    </UserFullName>
                    <UserFullName>
                        {user['bro_location']}
                    </UserFullName>

                </UserBroTags>
            </ProfileCard>

            <h2>Yo selected Brotags!</h2>



            {userTags.filter(tag =>
                <UserBroTags>


                    {tag}


                </UserBroTags>
            )}

            <label>
                {userEvent['event_title']}
            </label>




        </body>


    )


}

const ProfileCard = styled.section`
display:flex;
flex-direction:row;
align-items:center;
background:white;
margin:10px;
border:var(--mainorange) 2px solid;


margin-top:20px;
`



const UserFullName = styled.div`

background:var(--mainorange);

color:var(--mainwhite);

border-radius:5px;
margin:10px;


padding:3px;
`



const UserName = styled.div`
display:flex
flex-direction:column;
align-items:center;
letter-spacing:0.2rem;
font-size:2rem;
color:var(--mainorange);
border: 2px solid var(--mainmainorange);
border-radius:5px;
background:white;

`



const UserBroTags = styled.div`
color:var(--mainwhite);
border:var(--mainorange) 2px solid;
display:flex;
flex-direction:column;
background:var(--mainblue);
align-items:center;
margin-bottom:10px;




padding:10px;
`


/*const ProfileName = styled.section`
display:flex;
justify-content: space-between;
flex-wrap: wrap;
flex-direction:column;
width:10rem;
border: 3px var(--mainorange) solid;
margin-top: 5rem;
color:var(--mainorange);
background: var(--mainwhite);




;
`*/
