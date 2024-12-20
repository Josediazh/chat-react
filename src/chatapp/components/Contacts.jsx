import { Persona, Input } from '@fluentui/react-components'
import { Settings28Regular } from '@fluentui/react-icons'
import styled from 'styled-components'


const ContentListContact = styled.div`
    padding: 10px;
`

const SearchContainer = styled.div`
margin: 20px 0px 20px 0px;
`

export const Contacts = () => {
    return (
        <ContentListContact>
            <Persona
                textPosition="after"
                name="Jose Diaz"
                presence={{ status: "available" }}
                secondaryText="Available"
            />
            <Settings28Regular style={{ marginLeft: 10 }} />
            <SearchContainer>
                <Input type="text" placeholder="Buscar"></Input>
            </SearchContainer>
            <Persona
                textPosition="after"
                name="Kevin Sturgis"
                presence={{ status: "available" }}
                secondaryText="Available"
            />
        </ContentListContact>
    )
}