import {
    Button,
} from "@fluentui/react-components";

import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import styled from "styled-components";

import "../../css/style_main.css"

const AuthPageContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #106ebe;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

const AuthBoxContainer = styled.div`
    background-color: white;
    height: 500px;
    width: 70%;
    display: flex;
    flex-direction: row;
    position: relative;
`

const BoxTexto = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #106ebe;
    z-index: 99;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    transition: all 0.5s ease-out;
    text-align: center;
    padding: 0px 20px 0px 20px;`

const TitleBoxTexto = styled.h1`
    color: white;
    margin-bottom: 20px;
`

const ParagraphBoxTexto = styled.p`
    color: white;
    margin-bottom: 20px;
`

export const AuthPage = () => {

    const [activeForm, setActiveForm] = useState('login');

    const onChangeTypeForm = () => {

        if (activeForm == 'login') {
            setActiveForm('registro');
        } else {
            setActiveForm('login');
        }

    }

    return (
        <AuthPageContainer className="auth_page">
            <AuthBoxContainer className="auth_box">
                <BoxTexto className={activeForm} >
                    <div>
                        <TitleBoxTexto>
                            {
                                (activeForm == 'login') ? '¿No tienes una cuenta?' : 'Hola'
                            }
                        </TitleBoxTexto>
                        <ParagraphBoxTexto>
                            {
                                (activeForm == 'login') ? 'Unete a nuestra comunidad y comunicate facilmente con todos tus amigos' : 'Tus amigos te estan esperando entra y saludalos'
                            }
                        </ParagraphBoxTexto>
                        <Button onClick={onChangeTypeForm}>
                            {
                                (activeForm == 'login') ? 'Registro' : 'Login'
                            }
                        </Button>
                    </div>
                </BoxTexto>
                <LoginForm />
                <RegisterForm />
            </AuthBoxContainer>
        </AuthPageContainer >
    )
}