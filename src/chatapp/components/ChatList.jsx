import { Text } from '@fluentui/react-components';
import { useSelector } from 'react-redux'
import styled from 'styled-components';

const ContentMsg = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
`

const ContactMsg = styled(Text)`
    background-color: green;
    color: white;
    text-align: left;
    width: fit-content;
    padding: 5px;
    border-radius: 5px;
    align-self: flex-start;
`

const OwnMsg = styled(Text)`
    background-color: blue;
    color: white;
    text-align: right;
    width: fit-content; 
    padding: 5px;
    border-radius: 5px;
    align-self: flex-end;

`

export const ChatList = () => {

    const { activeChat } = useSelector((state) => state.chat);
    const { msgsList } = activeChat;
    return (
        <ContentMsg>
            {
                msgsList.map(({ message, idOwn }) => {
                    if (idOwn == '1234') {
                        return <ContactMsg>{message}</ContactMsg>
                    } else {
                        return (
                            <OwnMsg>{message}</OwnMsg>
                        )
                    }
                })
            }
        </ContentMsg>
    )
}