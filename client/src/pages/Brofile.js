import styled from 'styled-components/macro';
import profilepic from '../images/styledprofile.png'

export default function Brofile() {

    const user = JSON.parse(localStorage.getItem('broInfo'));
    const userTags = JSON.parse(localStorage.getItem('userTags'));


    return (
        <body>

            <ProfileCard>
                <img src={profilepic} />
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



        </body>


    )


}

const ProfileCard = styled.section`
display:flex;
flex-direction:row;
align-items:center;
background:var(--otherorange);
margin:10px;
border:var(--mainwhite) 2px solid;
border-radius:5px;
box-shadow:0.5rem 0.5rem 0.5rem rgba(0,0,0, 35%);
margin-top:20px;
`



const UserFullName = styled.div`
display:flex;
background:var(--mainorange);
align-items:center;
color:var(--mainwhite);
border: 2px solid var(--mainblue);
border-radius:5px;
margin:2px;


padding:3px;
`



const UserName = styled.div`
display:flex;
flex-direction:column;
align-items:center;
letter-spacing:0.2rem;
font-size:2rem;
color:var(--mainorange);


`



const UserBroTags = styled.div`
color:var(--mainwhite);
border:var(--mainwhite) 3px solid;

display:flex;
flex-direction:column;
background:var(--mainblue);
align-items:center;
margin-bottom:10px;
border-radius:5px;



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
