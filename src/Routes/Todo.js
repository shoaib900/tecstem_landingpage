import React,{useState} from 'react'


const Todo = () => {
    const [username, setUsername] = useState('')
    const [data,setData] = useState([]);
    const [indexEdit, setIndexEdit] = useState();


    const handleAddUser = (e) =>{
        e.preventDefault();
        if(indexEdit == null){
            console.log(username, "data added")
            setData([...data,username])   
        }else{
            console.log("data updated")
            setData([...data, username])
            setIndexEdit();
        }
        setUsername('')

    }

    const handleDelete = (index) => {
        const store = data.filter( (v,i) => i !== index);
        setData(store);
        console.log(index)
    }

    const handleEdit = (id)=>{
       setIndexEdit(id) 
        setUsername(data[id])
        const store = data.filter( (v,i) => i !== id )
        setData(store)
    }

    return (
        <div className='container mt-5'>

            <form class="card p-5" onSubmit={handleAddUser}>
                <div class="mb-3">
                    <label for="exampleInputText1" class="form-label">username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" id="exampleInputText1" aria-describedby="TextHelp" />
                </div>
                {
                    indexEdit != null ?  <button type="submit" class="btn btn-warning">update user</button> : <button type="submit" class="btn btn-primary">add user</button>
                }
                
                
            </form>
            <div className="card mt-3 p-1">
                {/* <p>{data}</p> */}

                {
                    data.map( (i,index)=> {
                        return(
                            <div key={index}>
                            <p key={index} className='bg-primary p-1 text-white d-flex justify-content-between'> {i}  <button className='btn ' onClick={()=> handleDelete(index)}>&times;</button></p>
                            <button className='btn btn-primary my-2' onClick={()=> handleEdit(index)}>Edit</button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Todo
