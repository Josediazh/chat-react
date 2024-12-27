import { Persona } from '@fluentui/react-components'
import { friends } from '../data/contactsData.js'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const PersonaItem = styled(Persona)`
    display: grid;
    grid-gap: 6px;
`

export const ListContact = () => {

    const { contacts } = useSelector((state) => state.chat);

    return (
        <>
            {
                contacts.map(({ idContact, name, status }) => {
                    return (
                        <PersonaItem key={idContact}
                            textPosition="after"
                            name={name}
                            presence={{ status: `${status}` }}
                        />
                    )
                })
            }
        </>
    )
}