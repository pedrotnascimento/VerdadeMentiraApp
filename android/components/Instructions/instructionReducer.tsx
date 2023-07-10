export const instructionReducer = (state: any, action: any) => {
    console.log("hi")
    switch (action.type) {
        case "procceed":
            return state + 1;
        case "finish":
            return -1;
        default:
            return state;
    }
};