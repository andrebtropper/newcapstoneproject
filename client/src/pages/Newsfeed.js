import EventButton from '../components/EventButton';
import EventForm from '../components/EventForm';

import styled from 'styled-components/macro';

export default function Newsfeed({ open }) {

    return (
        <body>
            <EventForm open={open} ></EventForm>
            <EventButton open={open} buttonText="+ " > </EventButton>

        </body>
    )
}



