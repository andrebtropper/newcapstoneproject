import styled from 'styled-components/macro';


export default function Brofile() {

    const user = JSON.parse(localStorage.getItem('broInfo'));


    return (
        <div>
            { user['bro_username']}


        </div>
    )



}

