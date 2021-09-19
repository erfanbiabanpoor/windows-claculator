export const input = document.getElementById('.input');

export let Array=[
    {
       num_1 : '0',
       num_2 : '0',
       inQueueOperator : false ,
       operator : null ,
       equal : false ,
       result : '0' ,
       memory : false ,
       id : 0 ,
    }
]

const ArrayValue =()=>{
    let object = {
        num_1 : '0',
        num_2 : '0',
        inQueueOperator : false ,
        operator : null ,
        equal : false ,
        result : '0' ,
        memory : false ,  
        id : Array.length, 
     }
     Array.push(object);
}



