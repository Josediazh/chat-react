import { Button, Input } from "@fluentui/react-components"
import { SendRegular } from "@fluentui/react-icons"
import { useForm } from "react-hook-form";
import styled from "styled-components";


const InputMsg = styled(Input)`
    width: 98%;
`

export const InputChatBox = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputMsg contentAfter={<Button icon={<SendRegular />}
                    size="small" />} {...register("msg_chat", { required: true })} size="large" />
            </form>
        </div >
    )
} 