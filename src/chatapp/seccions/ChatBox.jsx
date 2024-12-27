import { Badge, Divider, Input } from '@fluentui/react-components'
import { InputChatBox } from "../components/InputChatBox"
import styled from 'styled-components'
import { ChatList } from '../components/ChatList'


const ContentChat = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const SeccionChat = styled.div`
    min-height: 10%;
    &:nth-child(1){
        min-height: 15%;
        overflow: hidden;
    }
    &:nth-child(2){
        min-height: 75%;
        overflow-y: scroll;
    }
`

const TitleChat = styled.h1`
    margin-bottom: 10px;
    margin-top: 0px;
`
const StatusContact = styled.span`
    margin-left: 5px;
`

export const ChatBox = () => {

    return (
        <ContentChat>
            <SeccionChat>
                <TitleChat>Dante Cervantes</TitleChat>
                <div><Badge size="extra-small" appearance="filled" color="success"></Badge><StatusContact>Online</StatusContact></div>
                <Divider />
            </SeccionChat>
            <SeccionChat>
                <ChatList />
            </SeccionChat>
            <SeccionChat>
                <InputChatBox />
            </SeccionChat>
        </ContentChat>
    )
}