const lightSwitch = (state='off', action) => {
    if (action.type == 'FLIP_SWITCH') {
        state = action.value
    }
    return state
}
 
export default lightSwitch