import { ChatAppLayout } from '../layout/ChatAppLayout'
import styled from 'styled-components'

const ChatPageContainer = styled.div`
    background-color: #f5f5f5;
    padding: 40px;
    height: 100vh;
`

export const ChatAppPage = () => {
    return (
        <ChatPageContainer>
            <ChatAppLayout />
        </ChatPageContainer >
    )
}