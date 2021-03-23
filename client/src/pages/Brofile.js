import styled from 'styled-components/macro';


export default function Brofile() {

    const user = JSON.parse(localStorage.getItem('broInfo'));
    const userTags = JSON.parse(localStorage.getItem('userTags'));


    return (
        <body>
            <h1>Welcome to YOBrofile</h1>
            <ProfileName>
                {user['bro_username']}
                {user['bro_name']}
                {user['bro_location']}
            </ProfileName>

            <h2>Yo selected Brotags!</h2>

            <UserBroTags>

                {userTags.map(tag =>

                    <div>

                        {userTags}
                    </div>
                )}
            </UserBroTags>


        </body>


    );



}




const UserBroTags = styled.section`
color:var(--mainorange);
border:var(--mainorange) 3px solid;
background:white;
`


const ProfileName = styled.section`
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
`
