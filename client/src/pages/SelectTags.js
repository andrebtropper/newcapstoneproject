import { useLocalStorage } from '../hooks/useLocalStorage';
import DefaultButton from '../components/DefaultButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components/macro';

import sportsImages from '../images/sportsImages';

import playstation from '../images/playstation.png';
import xbox from '../images/xbox.png';
import nintendo from '../images/nintendo.png';
import computer from '../images/computer.png';
import hiking from '../images/hiking.png';
import fishing from '../images/fishing.png';
import camping from '../images/camping.png';
import jamming from '../images/jamming.png';
import travel from '../images/travel.png';
import photography from '../images/photography.png';


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
        }
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

                {/* <TagImage onClick={e => saveTag([...userTag, 'BADMINTON'])}
                    src={badminton} alt='Badminton rackets' />

                <TagImage onClick={e => saveTag([...userTag, 'WEIGHTLIFTING'])}
                    src={weightlifting} alt='fitness studio' />

                <TagImage onClick={e => saveTag([...userTag, 'BASKETBALL'])}
                    src={basketball} alt='' />

                <TagImage onClick={e => saveTag([...userTag, 'FOOTBALL'])}
                    src={football} alt='' />

                <TagImage onClick={e => saveTag([...userTag, 'TENNIS'])}
                    src={tennis} alt='' /> */}

            </SportsTags>

            <Category>GAMING</Category>
            <SportsTags>
                <img src={playstation}></img>
                <img src={xbox}></img>
                <img src={nintendo}></img>
                <img src={computer}></img>
            </SportsTags>
            <Category>HOBBIES</Category>

            <SportsTags>

                <img src={hiking}></img>
                <img src={fishing}></img>
                <img src={camping}></img>
                <img src={jamming}></img>
                <img src={travel}></img>
                <img src={photography}></img>
            </SportsTags>
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


const SportsTags = styled.section`
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



