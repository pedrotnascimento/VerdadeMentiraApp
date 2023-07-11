export const instructionReducer = (state: any, action: any) => {

    switch (action.type) {
        case "procceed":
            return { index: state.index + 1, reset: false };
        case "finish":
            return { index: 0, reset: true };
        case "start":
            return { index: 0, reset: false };
        default:
            return state;
    }
};