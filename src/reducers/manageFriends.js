export function manageFriends(state={friends: []}, action){
    switch (action.type) {    
        case 'ADD_FRIEND':
            
          return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
          return {...state, friends: [...state.friends.filter((friend) => friend.id !== action.id)] }

        default:
          return state;
    } 
}



let increase = {
    type: "ADD_FRIEND",
    friend: {
        name: "Chrome Boi", 
        hometown: "NYC",
        id: 1
    }
}

let decrease = {
    type: "REMOVE_FRIEND", 
    id: 1
}