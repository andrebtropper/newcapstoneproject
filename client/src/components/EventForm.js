import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';


export default function EventForm() {

    const createEvent = {
        event_title: '',
        event_date: '',
        event_description: '',
    }
    const [newEvent, setNewEvent] = useState(createEvent);

}

