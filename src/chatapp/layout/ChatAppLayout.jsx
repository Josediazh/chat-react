import styled from "styled-components"
import { Contacts } from "../seccions/Contacts"
import { ChatBox } from "../seccions/ChatBox"

const ChatContainer = styled.div`
    display: flex;
    background-color: white;
    flex-direction: row;
    margin: 20px;
    padding: 10px;
    height: 90%;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px slategrey;
`

const ListContacts = styled.div`
    min-width: 300px;
`

const MessageBox = styled.div`
    flex-grow: 1;
`

export const ChatAppLayout = () => {
    return (
        <ChatContainer>
            <ListContacts>
                <Contacts />
            </ListContacts>
            <MessageBox><ChatBox /></MessageBox>
        </ChatContainer>
    )
}