import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function EventTags({ onCreateEventTag, eventtags, onDeleteEventTag, onDeleteLastEventTag }) {

    const [value, setValue] = useState('')

    const handleChange = event =>
        setValue(event.target.value);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onCreateEventTag(value);
            setValue('');
        } else if (event.key === 'Backspace' && value === ('')) {
            event.preventDefault();
            onDeleteLastEventTag(value)
        }
    }
    function handleClick() {
        // onCreateBuzzword(value);
        setValue('');
    }
    return (
        <Wrapper>
            <input
                type='text'
                name='eventtags'
                placeholder='Enter BroTags '
                onChange={handleChange}
                value={value}
                onKeyDown={handleKeyDown} />
            <AddButton
                type='button'
                onClick={handleClick}
            >Add</AddButton>


            <EventTagWrapper>
                {eventtags &&
                    eventtags.map((eventtag, index) => (
                        <TagSpan key={index}>{eventtag}
                            <i onClick={() => onDeleteEventTag(eventtag)}> &times;</i>
                        </TagSpan>
                    ))}
            </EventTagWrapper>
        </Wrapper >
    )
}
const TagSpan = styled.span`
font-family:"Lucida Grande";
`
const AddButton = styled.button`
font-family:"Lucida Grande";
`
const Wrapper = styled.section`
    display:grid;
    grid-template-columns: 4fr 1fr;
    border-radius: 1rem;
   margin-bottom:0.4rem;
    button {
    border: none;
    background: var(--mainorange);
    color: white;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
    border-radius: 1rem;
    height: 40%;
    outline: none;
    cursor: pointer;
    margin-left: 0rem;
    }
    input[type=text]{
    box-shadow: none;
    }
    `
const EventTagWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    span{
        background: var(--mainorange);
        color: white;
        padding:0.1rem;
        border-radius: 0.6rem;
    }

    i{
        cursor: pointer;
    }
    `

EventTags.propTypes = {
    onCreateEventTag: PropTypes.func,
    eventtags: PropTypes.array,
    onDeleteEventTag: PropTypes.func,
    onDeleteLastEventTag: PropTypes.func
}