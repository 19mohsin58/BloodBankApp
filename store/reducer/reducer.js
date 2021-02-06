const  INITIAL_STATE = {
  donors:[
     {
         name:'mohsinj',
         email:'mohsinjokhio320@gmail.com'

     }
  ]
}

export default (state = INITIAL_STATE , action)=>{  
    
   
    switch (action.type){
        case 'SETDATA':
        return(
            {
                ...state , 
                donors:[...state.donors,action.payload]
            }
    
        )
    }
        return state;
    }