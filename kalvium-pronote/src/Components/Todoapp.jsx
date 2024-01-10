import React from "react";

export default class Todoapp extends React.Component{
    constructor(){
        super()
        this.state = {
            text:"",
            todolist:[]
        }
    }

    render(){
        let {textValue, todolist} = this.state

        let handleChange = (event)=>{
            this.setState({textValue:event.target.value})
        }

        let handleClick = () =>{
            this.setState({todolist:[...todolist, textValue]})
            this.setState({textValue:""})
        }

        let handleUpdate = (index)=>{
            let newValue = prompt("Enter new task")
            let updateArr = todolist.map((el,i)=>{
                if(i==index){
                    return newValue
                }
                return el;
            })
            console.log(updateArr, todolist)
            this.setState({todolist:updateArr})
        }

        let handleDelete =(index)=>{
            let deletedArr = todolist.filter((el,i)=>i!==index)
            this.setState({todolist:deletedArr})
        }


        return(
            <> 
                <div className="main"> 
                    <div className="addTodo">
                        <input type="text" id="inputBox" value={textValue} onChange={handleChange} placeholder="Enter task" />
                        <button className="buttonsStyle" onClick={handleClick}>ADD</button>
                    </div>

                    <div className="buttons">
                        {todolist.map((el,i)=>(
                            <div key={i}>
                                <p>{el}</p>
                                <button className="buttonsStyle"  onClick={()=>handleUpdate(i)}>Update</button>
                                <button className="buttonsStyle" onClick={()=>handleDelete(i)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}