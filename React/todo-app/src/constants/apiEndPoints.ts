export const BASE_URL = 'http://localhost:4000/';
export const BASE_AUTH_URL = 'http://localhost:3000/';

export const LOGIN = {
    url:  'login',
    method: 'POST'
};

export const REGISTER = {
    url:  'register',
    method: 'POST'
};
export const GET_TODO_BY_ID = (id:number) =>  ({
    url:  `todo/${id}`,
    method: 'GET'
});

export const UPDATE_TODO_BY_ID = (id: number) => ({
    url:  `todo/${id}`,
    method: 'PUT'
});

export const DELETE_TODO_BY_ID = (id:number) => ({
    url:  `todo/${id}`,
    method: 'DELETE'
});

export const GET_ALL_TODOS = {
    url:  'todos',
    method: 'GET'
};

export const CREATE_TODO = {
    url:  'todos',
    method: 'POST'
};

export const DELETE_ALL_UPDATED_TODOS = {
    url:  'todos',
    method: 'DELETE'
};
