import { ADD_USER ,GET_USER ,UPDATE_USER ,DELETE_USER } from "./actionType"


// const users = [
//     {id:'1' , name:'ali', gender:'male', birthday:'1999/11/24', age:'12 ,18',},
//     {id:'2' ,name:'reza', gender:'male', birthday:'2001/11/24', age:'12 ,18'},
//     {id:'3' ,name:'mmd', gender:'male', birthday:'1999/12/24', age:'12 ,18'},
//     {id:'4' ,name:'hosain', gender:'male', birthday:'1998/11/24', age:'12 ,18'},


// ]


export const getUser = () => {
    return({

        type: GET_USER,
        payload: users,

    }

    )
}



export const addUser = (user) => {
    return({

        type: ADD_USER,
        payload: user,

    }
        

    )
}
export const updateUser = (user) => {
    return({

        type: UPDATE_USER,
        payload: user,

    }
        

    )
}
export const deleteUser = (user) => {
    return({

        type: DELETE_USER,
        payload: user,

    }
        

    )
}