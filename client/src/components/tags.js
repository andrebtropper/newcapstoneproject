import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

export default function Tags({ }) {

    const broTag = {
        brotag_name: ''
    }

    const [broTagName, setBroTagName] = useState(broTag);

    const handleChange = (event) => {
        const field = event.target;
        const value = field.value;
        setBroTagName({
            ...broTagName,
            [field.name]: value,
        });
    };


}
