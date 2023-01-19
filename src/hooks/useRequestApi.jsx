import { useDispatch } from "react-redux";
import { MessagesAPI } from "../api";
import { getGlobalVariables } from '../helpers'
import { loading } from "../store/slice/PortfolioSlice";

const { VITE_API_TOKEN } = getGlobalVariables();

export const useRequestApi = () => {

    const dispatch = useDispatch();

    const startSendMessage = async (formMessage) => {

        dispatch(loading(true));

        try {

            const { data } = await MessagesAPI.post(`/messages/chat?token=${VITE_API_TOKEN}`, formMessage);
            if (data.sent) {
                dispatch(loading(false));
                return true;
            }
            dispatch(loading(false));
            return false;

        } catch (error) {

            console.log(error.response)

        }


    }

    return {
        startSendMessage
    }

}
