import { useState } from 'react';
import Form from '../components/Form';

export default function CreateBrofile({ open }) {
    const [brofile, setBrofile] = useState([]);


    return (
        <>
            <Form open={open} ></Form>
        </>
    )
}

