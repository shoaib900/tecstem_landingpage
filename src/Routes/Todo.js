import React,{useState} from 'react'


const Todo = () => {
    const [username, setUsername] = useState('')
    const [data,setData] = useState([]);

    const handleAddUser = (e) =>{
        e.preventDefault();
        console.log(username)
        setData([...data,username])

        setUsername('')

    }

    const handleDelete = (index) => {
        const store = data.filter( (v,i) => i !== index);
        setData(store);
        console.log(index)
    }

    return (
        <div className='container mt-5'>

            <form class="card p-5" onSubmit={handleAddUser}>
                <div class="mb-3">
                    <label for="exampleInputText1" class="form-label">username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" id="exampleInputText1" aria-describedby="TextHelp" />
                </div>
                <button type="submit" class="btn btn-primary">add user</button>
            </form>
            <div className="card mt-3 p-1">
                {/* <p>{data}</p> */}

                {
                    data.map( (i,index)=> {
                        return(
                            <p key={index} className='bg-primary p-1 text-white'> {i}  <button className='btn ' onClick={()=> handleDelete(index)}>&times;</button></p>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Todo
