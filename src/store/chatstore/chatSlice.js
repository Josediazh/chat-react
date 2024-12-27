import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chats: [{
        idchat: 343242423,
        participants: [1234, 5678]
    }],
    msgs: [{
        idchat: 343242423,
        msgsList: [{
            message: 'Hola que pex',
            idOwn: 1234
        },
        {
            message: 'que pedo?',
            idOwn: 5678
        },
        {
            message: 'Vamos a tomar 2',
            idOwn: 1234
        },
        {
            message: 'De una vez cuando?',
            idOwn: 5678
        },
        ]
    }],
    contacts: [{
        idContact: 1,
        name: 'Santiago Diaz',
        status: 'available'
    },
    {
        idContact: 2,
        name: 'Dante Cervantes',
        status: 'busy',
    },
    {
        idContact: 3,
        name: 'Alberto Canul',
        status: 'unknown',
    },
    {
        idContact: 4,
        name: 'Marco Dominguez',
        status: 'away',
    }
    ],
    activeChat: {
        idchat: 343242423,
        msgsList: [{
            message: 'Hola que pex',
            idOwn: 1234
        },
        {
            message: 'que pedo?',
            idOwn: 5678
        },
        {
            message: 'Vamos a tomar 2',
            idOwn: 1234
        },
        {
            message: 'De una vez cuando?',
            idOwn: 5678
        },
        ]
    }
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {

        newChat: (state, action) => {
            state.chatactives.push(action.payload);
        },

        newMsg: (state, action) => {
            if (action.payload.idChat == null) {
                newChat({});
                state.msg.push(action.payload.msg);
            }
            state.msg.push(action.payload.msg);
        },
    }
});

export const { newChat, newMsg } = chatSlice.actions;