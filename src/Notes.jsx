import {React,useEffect,useState} from 'react';
import Display from './components/display';
import { Link } from 'react-router-dom';

const Notes=()=>{
    const [data,setData]=useState([
        {
            "id": 1,
            "title": "Note 1",
            "content": "Content 1"
        },
        {
            "id": 2,
            "title": "Note 2",
            "content": "Content 2"
        },
        {
            "id": 3,
            "title": "Note 3",
            "content": "Content 3"
        }
    ]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BHOST}/notes/`)
        .then(response=>response.json())
        .then(data=>{
            setData(data);
            console.log(data);
            setLoading(false);
        })
        .catch(error=>{
            console.log(error);
            setLoading(false);
        });
    },[]);

    if(loading){
        return (
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
            </div>
          );
    }
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Notes</h1>
            <Link to="/addnote">
        <button className="bg-pink-600  mt-6 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
            Add Note
            </button>
        </Link>
            <Display data={data}/>
        </div>
    )
}

export default Notes;