import { Persona, Input } from '@fluentui/react-components'
import { Settings28Regular } from '@fluentui/react-icons'
import styled from 'styled-components'
import { ListContact } from '../components/ListContact'

const ContentListContact = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10px;
`

const SeccionContactList = styled.div`
    min-height: 10%;
    &:nth-child(3){
    min-height: 75%;
    overflow-y: scroll;
}
`

const SearchContainer = styled.div`
margin: 20px 0px 20px 0px;
`

export const Contacts = () => {
    return (
        <ContentListContact>
            <SeccionContactList>
                <Persona
                    textPosition="after"
                    name="Jose Diaz"
                    presence={{ status: "available" }}
                    secondaryText="Available"
                />
                <Settings28Regular style={{ marginLeft: 10 }} />
            </SeccionContactList>
            <SeccionContactList>
                <SearchContainer>
                    <Input type="text" placeholder="Buscar"></Input>
                </SearchContainer>
            </SeccionContactList>
            <SeccionContactList>
                <ListContact />
            </SeccionContactList>
        </ContentListContact>
    )
}