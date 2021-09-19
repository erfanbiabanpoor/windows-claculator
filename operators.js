export const plus =()=>{
    for(let inputValue of Array) {
        inputValue.result = +inputValue.num_1 + +inputValue.num_2;
    }
}

export const minus = () => {
    for(let inputValue of Array) {
        inputValue.result = +inputValue.num_1 - +inputValue.num_2;
    }
}

export const multiplication = () => {
    for(let inputValue of Array) {  
        inputValue.result = +inputValue.num_1 * +inputValue.num_2;
    }
}

export const division = () => {
    for(let inputValue of Array) {  
        inputValue.result = +inputValue.num_1 / +inputValue.num_2;
    }
}

