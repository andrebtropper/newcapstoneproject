import { useLocalStorage } from '../hooks/useLocalStorage';
import DefaultButton from '../components/DefaultButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import sportsImages from '../images/sportsImages';
import gamingImages from '../images/gamingImages';
import hobbyImages from '../images/hobbyImages';
import socialImages from '../images/socialImages';
import tagLogo from '../icons/taglogo.svg';

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
            name: 'soccer',
            alt: 'football and cleats'
        },
        {
            name: 'tennis',
            alt: 'playing tennis'
        },
        {
            name: 'volleyball',
            alt: 'playing volleyball'
        },

        {
            name: 'football',
            alt: 'playing football'
        },
        {
            name: 'frisbee',
            alt: 'playing ultimate frisbee'
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
        {
            name: 'fifa',
            alt: 'fifa'
        },
        {
            name: 'fortnite',
            alt: 'fortnite'
        },
        {
            name: 'warzone',
            alt: 'warzone'
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
    const social = [
        {
            name: 'pool',
            alt: 'playing pool'
        },
        {
            name: 'grub',
            alt: 'lots of burgers'
        },
        {
            name: 'grabbeer',
            alt: 'ice cold beer'
        },
        {
            name: 'kicker',
            alt: 'playing kicker'
        },
        {
            name: 'watchthegame',
            alt: 'people watching the game'
        },
        {
            name: 'darts',
            alt: 'dart board'
        },
    ]
    return (
        <>
            <LogoWrap>
                <img src={tagLogo} alt="logo" />
            </LogoWrap>
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

            <Category>SOCIAL</Category>

            <SocialTags>

                {social.map(tag =>
                    <TagImage
                        onClick={e => selectTag(tag.name.toUpperCase())}
                        src={socialImages[tag.name]}
                        alt={tag.alt}
                        className={doesTagExistInUserTags(tag.name.toUpperCase()) ? 'active' : ''} />
                )}

            </SocialTags>

            <LastDiv>
                <Link to='/brofile'> <DefaultButton buttonText='Subimt YOBroTags'></DefaultButton></Link>
            </LastDiv>
        </>
    )
}
const LogoWrap = styled.div`
display:flex;
justify-content:center;
`
const TagImage = styled.img`
cursor:pointer;
margin:0 10px;
border:var(--mainorange) 2px solid;
box-shadow: 0.1rem 0.2rem 0.2rem 0.3rem rgba(0,0,0, 35%);
&:before{
    opacity: 100%;
}
&.active{
    opacity: 30%;  
}
`
const LastDiv = styled.div`
display:grid;
justify-content:center;
margin:3rem;

`
const HobbyTags = styled.section`
display:flex;
flex-direction:row;
margin-top:0.5rem;
overflow-x:scroll;

`
const SportsTags = styled.section`
display:flex;
flex-direction:row;
margin-top:0.5rem;
overflow-x:scroll;
margin:0.5rem;
`
const GamingTags = styled.section`
display:flex;
flex-direction:row;
margin-top:0.5rem;
overflow-x:scroll;
`
const SocialTags = styled.section`
display:flex;
flex-direction:row;
margin-top:0.5rem;
overflow-x:scroll;
`
const Category = styled.h3`
margin:2rem 1rem;
padding:0.7rem;

border-radius:20px;
background:var(--mainorange);
text-align:center;
color:var(--mainwhite);
font-family:"Lucida Grande";
font-weight:900;
font-size:1.5rem;
box-shadow: 0.1rem 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
`



