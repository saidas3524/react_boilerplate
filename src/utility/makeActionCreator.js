export const makeActionCreator = (type, track,...argNames) => {
    return function(...args) {
        let action = { type };
        if(!track)
            action["trackAction"] = false;
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        });
        return action
    }
};