import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import isValidEvent from '../lib/validatFunction';
import DefaultButton from '../components/DefaultButton';


export default function EventForm({ open }) {
    const [valid, setValid] = useState(false)

    const createEvent = {
        event_title: '',
        event_location: '',
        event_month: '',
        event_day: '',
        event_description: '',
    }
    const [newEvent, setNewEvent] = useState(createEvent);

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

        }
    }

    return (
        <>
            <FormWrapper open={open} valid={valid} onSubmit={submitForm}>
                <input
                    type='text'
                    name='event_title'
                    placeholder='Name your Event'
                    onChange={handleChange}
                    value={newEvent.event_title} />

                <input
                    type='text'
                    name='event_location'
                    placeholder='Location of Event'
                    onChange={handleChange}
                    value={newEvent.event_location} />

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
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                    <option value='24'>24</option>
                    <option value='25'>25</option>
                    <option value='26'>26</option>
                    <option value='27'>27</option>
                    <option value='28'>28</option>
                    <option value='29'>29</option>
                    <option value='30'>30</option>
                    <option value='31'>31</option>
                </select>

                <textarea
                    minLength="100"
                    maxLength="750"
                    type='text'
                    name='about'
                    placeholder='Describe your EVENT. Activity, location, and any
                    other information to promote your Event (use 100 - 750 characters)'
                    onChange={handleChange}
                    value={newEvent.event_description} />

                <DefaultButton valid={valid} type='submit'>POST NEW EVENT</DefaultButton>

            </FormWrapper>
        </>
    )
}

const FormWrapper = styled.div``


EventForm.propTypes = {
    submitFunction: PropTypes.func
}

