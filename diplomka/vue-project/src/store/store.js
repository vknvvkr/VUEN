import { createStore } from "vuex";

import { stateMain, gettersMain, mutationsMain, actionsMain } from "../modules/main/store";
import { stateDetails, gettersDetails, mutationsDetails, actionsDetails } from "../modules/details/store";

export default createStore({
    state: {
        ...stateMain,
        ...stateDetails
    },
    getters: {
        ...gettersMain,
        ...gettersDetails
    },
    mutations: {
        ...mutationsMain,
        ...mutationsDetails
    },
    actions: {
        ...actionsMain,
        ...actionsDetails
    }
})