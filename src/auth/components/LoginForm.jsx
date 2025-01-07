import { Button, Field, Input, MessageBar, MessageBarBody, MessageBarGroup, MessageBarTitle, Spinner } from '@fluentui/react-components'
import { ErrorCircleRegular } from '@fluentui/react-icons';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { startLogin } from '../../store/authstore/tunks';


const LoginBox = styled.div`
display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 40px;
    width: 50%;
    text-align: center;
`

const LoginContainer = styled.div`
width: 70%;
`

const FieldForm = styled.div`
margin-bottom: 20px;
`


export const LoginForm = () => {

    const dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { status, errorDisplay, errorMessage } = useSelector((state) => state.auth);
    console.log(errorDisplay);


    const onSubmit = (data) => {
        const { username, password } = data;
        dispatch(startLogin({ username, password }));
    }

    return (
        <LoginBox className="login_box">
            <LoginContainer>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FieldForm className="field_form">
                        <Field
                            label="User name"
                            validationState={errors.username ? "error" : "none"}
                            validationMessage={errors.username ? "campo requerido" : ""}
                            validationMessageIcon={errors.username ? <ErrorCircleRegular /> : null}
                        >
                            <Input {...register("username", { required: true })} />
                        </Field>
                    </FieldForm>
                    <FieldForm className="field_form">
                        <Field
                            label="Password"
                            validationState={errors.password ? "error" : "none"}
                            validationMessage={errors.password ? "campo requerido" : ""}
                            validationMessageIcon={errors.password ? <ErrorCircleRegular /> : null}
                        >
                            <Input type='password' {...register("password", { required: true })} />
                        </Field>
                    </FieldForm>
                    <FieldForm className="field_form">
                        <Button type="submit" appearance="primary">
                            Entrar
                        </Button>
                    </FieldForm>
                    <FieldForm >
                        {(status == 'checking') ? <Spinner /> : null}
                    </FieldForm>
                    <FieldForm >
                        <MessageBarGroup hidden={(errorDisplay == 'login') ? false : true} animate='both'>
                            <MessageBar layout='multiline' intent='error' >
                                <MessageBarBody>
                                    <MessageBarTitle>No se pudo iniciar sesion</MessageBarTitle>
                                    {errorMessage}
                                </MessageBarBody>
                            </MessageBar>
                        </MessageBarGroup>
                    </FieldForm>
                    <FieldForm className="field_form">
                        <p>Inicia sesion con otra cuenta</p>
                        <svg style={{ width: 20, fill: '#106ebe' }} className="google_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                    </FieldForm>
                </form>
            </LoginContainer>
        </LoginBox>
    )
}
