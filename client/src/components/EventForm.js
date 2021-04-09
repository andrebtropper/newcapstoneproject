import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import isValidEvent from '../lib/validateEventForm';
import DefaultButton from '../components/DefaultButton';
import EventTags from '../components/EventTags';

export default function EventForm({ open, parentCallback }) {
    const createEvent = {
        event_title: '',
        event_location: '',
        event_month: '',
        event_day: '',
        event_description: '',
        eventtags: []
    }
    const [newEvent, setNewEvent] = useState(createEvent)
    const [valid, setValid] = useState(false)
    const handleChange = event => {
        const field = event.target;
        const value = field.value;

        setNewEvent({
            ...newEvent,
            [field.name]: value,
        });

    };

    function submitForm(event) {
        event.preventDefault();
        if (isValidEvent(newEvent)) {
            setValid(true);
            localStorage.setItem('newEvent', JSON.stringify(newEvent));
            parentCallback(false);
        }
    }
    const addEventTag = eventtag => {
        if (eventtag.length >= 1) {
            setNewEvent({
                ...newEvent,
                eventtags: [...newEvent.eventtags, eventtag]
            })
        }
    }

    function deleteEventTag(eventtagToDelete) {
        const remainingEventTags = newEvent.eventtags.filter(
            (eventtag) => eventtagToDelete !== eventtag);
        setNewEvent({ ...newEvent, eventtags: remainingEventTags })
    }

    function deleteLastEventTag() {
        const remainingEventTags = newEvent.eventtags.filter((_, index) =>
            index !== newEvent.eventtags.length - 1)
        setNewEvent({
            ...newEvent,
            eventtags: remainingEventTags
        })
    }

    return (
        <>
            <FormWrapper open={open} valid={valid} onSubmit={submitForm}>

                <label>Event</label>
                <input
                    type='text'
                    name='event_title'
                    placeholder='Name your Event'
                    onChange={handleChange}
                    value={newEvent.event_title} />
                <label>Location</label>
                <input
                    type='text'
                    name='event_location'
                    placeholder='Location of Event'
                    onChange={handleChange}
                    value={newEvent.event_location} />
                <label>Event Date</label>
                <select
                    type='text'
                    name='event_month'
                    onChange={handleChange}
                    value={newEvent.event_month}>

                    <option value=''>Month</option>
                    <option value='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December'>December</option>
                </select>


                <select
                    type='text'
                    name='event_day'
                    onChange={handleChange}
                    value={newEvent.event_day}>

                    <option value=''>Day</option>
                    {
                        createDaysOptions()
                    }
                </select>
                <label>Brief Description</label>
                <textarea
                    minLength="100"
                    maxLength="750"
                    type='text'
                    name='event_description'
                    placeholder='Describe your EVENT. Activity, location, and any
                    other information to promote your Event (use 100 - 750 characters)'
                    onChange={handleChange}
                    value={newEvent.event_description}
                />
                <EventTags
                    eventtags={newEvent.eventtags}
                    onCreateEventTag={addEventTag}
                    onDeleteEventTag={deleteEventTag}
                    onDeleteLastEventTag={deleteLastEventTag}>
                </EventTags>
                <DefaultButton valid={valid} type='submit' buttonText='POST NEW EVENT' ></DefaultButton>
            </FormWrapper>
        </>
    )
}
function createDaysOptions(numberOfDays = 31) {
    let options = [];
    for (let i = 1; i <= numberOfDays; i++) {
        options.push(<option value={i}>{i}</option>);
    }
    return options;
}
const FormWrapper = styled.form`
display:flex;
flex-direction: column;
opacity: ${({ open, valid }) => open || valid ? '40%' : '100%'};
border:solid 2px var(--mainorange);
padding:2rem;
box-shadow: 0.2rem 0.3rem 0.3rem 0.5rem rgba(0,0,0, 35%);
height:100%;
width:100%;
input, select, textarea{
    margin-bottom: 1rem;
    border-radius: 7px;
    font-family:"Lucida Grande";
    border: none;
    padding: 0.6rem;
    background: white;
    font-style: italic;
    color: var(--mainblue);
    }
    textarea{
        height: auto;
    }
    label{
        font-family:"Lucida Grande";
        margin-left: 0.5rem;
        color: var(--mainorange);  
    }

    `
EventForm.propTypes = {
    submitFunction: PropTypes.func,
    onChildEvent: PropTypes.func
}
