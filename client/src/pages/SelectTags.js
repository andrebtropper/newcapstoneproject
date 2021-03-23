import { useLocalStorage } from '../hooks/useLocalStorage';
import DefaultButton from '../components/DefaultButton';
import { Link } from 'react-router-dom';

import styled from 'styled-components/macro';

import sportsImages from '../images/sportsImages';
import gamingImages from '../images/gamingImages';
import hobbyImages from '../images/hobbyImages';


export default function SelectTags() {

    const [userTags, saveTag] = useLocalStorage('userTags', []);

    const doesTagExistInUserTags = (tag) => userTags.some(userTag => userTag === tag)

    const selectTag = (tag) => {
        if (doesTagExistInUserTags(tag)) {
            saveTag(userTags.filter(userTag => userTag !== tag));
        } else {
            saveTag([...userTags, tag])
        }
    }

    const tags = [
        {
            name: 'spikeball',
            alt: 'playing spikeball'
        },
        {
            name: 'badminton',
            alt: 'Badminton rackets'
        },
        {
            name: 'weightlifting',
            alt: 'fitness studio'
        },
        {
            name: 'basketball',
            alt: 'playing basketball'
        },
        {
            name: 'football',
            alt: 'football and cleats'
        },
        {
            name: 'tennis',
            alt: 'playing tennis'
        },
    ]

    const gameTags = [
        {
            name: 'playstation',
            alt: 'playstation'
        },
        {
            name: 'xbox',
            alt: 'xbox'
        },
        {
            name: 'nintendo',
            alt: 'nintendo'
        },
        {
            name: 'computer',
            alt: 'computer'
        },
    ]
    const hobbies = [
        {
            name: 'hiking',
            alt: 'people hiking'
        },
        {
            name: 'fishing',
            alt: 'fishing rod'
        },
        {
            name: 'camping',
            alt: 'tent'
        },
        {
            name: 'jamming',
            alt: 'band playing'
        },
        {
            name: 'travel',
            alt: 'suitcase'
        },
        {
            name: 'photography',
            alt: 'camera'
        },




    ]
    return (


        <body>

            <Category>SPORTS</Category>
            <SportsTags>

                {tags.map(tag =>
                    <TagImage
                        onClick={e => selectTag(tag.name.toUpperCase())}
                        src={sportsImages[tag.name]}
                        alt={tag.alt}
                        className={doesTagExistInUserTags(tag.name.toUpperCase()) ? 'active' : ''} />
                )}



            </SportsTags>

            <Category>GAMING</Category>
            <GamingTags>
                {gameTags.map(tag =>
                    <TagImage
                        onClick={e => selectTag(tag.name.toUpperCase())}
                        src={gamingImages[tag.name]}
                        alt={tag.alt}
                        className={doesTagExistInUserTags(tag.name.toUpperCase()) ? 'active' : ''} />
                )}


            </GamingTags>
            <Category>HOBBIES</Category>

            <HobbyTags>
                {hobbies.map(tag =>
                    <TagImage
                        onClick={e => selectTag(tag.name.toUpperCase())}
                        src={hobbyImages[tag.name]}
                        alt={tag.alt}
                        className={doesTagExistInUserTags(tag.name.toUpperCase()) ? 'active' : ''} />
                )}

            </HobbyTags>
            <LastDiv>
                <Link to='/brofile'> <DefaultButton buttonText='FINALIZE YOBrofile!'></DefaultButton></Link>
            </LastDiv>
        </body>
    )
}

const TagImage = styled.img`
cursor:pointer;
&:before{
    opacity: 100%;
}
&.active{
    opacity: 50%;
}

`
const LastDiv = styled.div`
margin:4rem;
align-content:center;
`


/*const Button = styled.button`
background:none;
&:before{
    background:none;
}
a{
    background:var(--mainorange);
    opacity:50%;
}
`*/



/*const DefaultTag = styled.img`
a{
    opacity:30%;
}
`*/

const HobbyTags = styled.section`
display:flex;
flex-direction:row;
margin-top:0.5rem;
flex-wrap:wrap;
`



const SportsTags = styled.section`
display:flex;
flex-direction:row;
margin-top:0.5rem;
flex-wrap:wrap;



`
const GamingTags = styled.section`
display:flex;
flex-direction:row;
margin-top:0.5rem;
flex-wrap:wrap;
`


const Category = styled.h3`
margin-top:1rem;
border:3px var(--mainorange) solid;
width:7rem;
margin-left:1rem;
border-radius:20px;
padding:1px;
background:var(--mainwhite);
text-align:center;
color:var(--mainorange);
`



