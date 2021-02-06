

const set_data = () =>{
    return (dispatch)=> {  //through this dispatch we will update our state
        dispatch({
            type:"SETDATA", payload:{name:'Mohsin Engr ', email:'hussainjokhio@gmail.com'}
        })
 }}//ab jab bhii ye dispatch call hoga iskii req jayegi state k pass or usky doosre parameter me hamain action me hamain dispatch miljayega
 
 
 export {
     set_data
 }