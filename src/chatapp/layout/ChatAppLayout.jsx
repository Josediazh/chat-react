import styled from "styled-components"
import { Contacts } from "../components/Contacts"

const ChatContainer = styled.div`
    display: flex;
    background-color: white;
    flex-direction: row;
    padding: 30px;
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
            <MessageBox><h1>Kevin Sturgis</h1></MessageBox>
        </ChatContainer>
    )
}