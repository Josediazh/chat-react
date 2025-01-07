import { chatApi } from "../../api/chatsApi";
import { checking, login, logout } from "./authSlice";

export const startLogin = ({ username, password }) => {

    return async (dispatch) => {

        dispatch(checking());

        try {

            const resp = await chatApi.post('/auth/login', {
                email: username,
                password
            });

            const { uid, idToken } = resp.data

            const payload = {
                status: 'authenticated',
                uid: uid,
                name: name,
                errorMessage: ''
            }

            localStorage.setItem('token', idToken);
            localStorage.setItem('token.init-date', new Date().getTime());
            localStorage.setItem('name', name);

            dispatch(login(payload));


        }
        catch (error) {

            const msg = error.response.data.msg;
            const payload = {
                errorDisplay: 'login',
                errorMessage: msg
            }
            return dispatch(logout(payload));
        }

    }
}

export const startRegister = ({ correo, password, fullName }) => {

    return async (dispatch) => {

        dispatch(checkingCredential());
        const { ok, uid, name, idToken, msg } = await chatApi.post('/auth/new', {
            email: correo,
            password,
            fullName
        });

        if (!ok) {

            const payload = {
                errorMessage: msg
            }

            return dispatch(logout(payload));
        }

        const payload = {
            status: 'authenticated',
            uid: uid,
            name: name,
            errorMessage: ''
        }

        localStorage.setItem('token', idToken);
        localStorage.setItem('token.init-date', new Date().getTime());
        localStorage.setItem('name', name);

        dispatch(login(payload));

    }
}