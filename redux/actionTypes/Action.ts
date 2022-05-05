export type ActionType = {
    type: string,
}

function createAction<T>(actionType: ActionType, payload: T) {
    return {
        type: actionType.type,
        payload: payload,
    }
}

export default createAction;