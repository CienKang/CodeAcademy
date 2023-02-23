import axios from 'axios';
import { BASE_URL, BASE_AUTH_URL } from '../../constants/apiEndPoints';

interface makeRequestProps {
    url: string;
    method: string;
    data?: any;
    headers?: any;
}

const makeRequestToApp = async ({ url, method, data, headers }: makeRequestProps) => {
    const response = await fetch(`${BASE_URL}${url}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(data),
        mode: 'no-cors'
    }).then(res => console.log(res));
    return response;
};

const makeRequestToAuth = async ({ url, method, data, headers }: makeRequestProps) => {
    // console.log(JSON.stringify({...data}));
    // const response = await fetch(`${BASE_AUTH_URL}${url}`, {
    //     method: method,
    //     headers: {
    //         'Content-Type': 'application/json',
    //         ...headers
    //     },
    //     body: JSON.stringify({...data}),
    //     mode: 'no-cors'
    // });
    console.log(JSON.stringify({...data}),data);
    const response = await fetch('http://localhost:3000/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify({username: 'admin', password: 'admin'}),
        mode: 'no-cors',
    }).then(res => res.json()).then(res => console.log(res));
    return response;
};

export { makeRequestToAuth, makeRequestToApp };