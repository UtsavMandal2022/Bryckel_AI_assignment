import {React,useEffect,useState} from 'react';
import Display from './components/display';
import { Link } from 'react-router-dom';
import Toast from './components/toast';

const Notes=()=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BHOST}/notes/`)
        .then(response=>response.json())
        .then(data=>{
            setData(data);
            console.log(data);
            Toast.success('Notes loaded successfully');
            setLoading(false);
        })
        .catch(error=>{
            console.log(error);
            Toast.error('Error loading notes');
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
        <div className="flex flex-col items-center justify-center bg-gradient-to-r h-screen from-indigo-500 via-purple-500 to-pink-500">
            <div className='flex flex-row justify-between w-full fixed top-0 bg-slate-200 bg-opacity-70'>
        <Link to="/">
            <h1 className="ml-10 text-4xl font-bold italic mt-2 bg-gradient-to-r from-green-300 to-yellow-500 hover:from-pink-500 hover:to-yellow-500 rounded-md h-16 w-40 text-center animate-pulse">Notes</h1>
        </Link>
            <Link to="/addnote">
        <button className="bg-pink-600  mt-6 mb-6 hover:bg-purple-700 text-white font-bold py-2 px-4 mr-4 rounded-full">
            Add Note
            </button>
        </Link>
            </div>
            <div className='mt-32'>
            <Display data={data}/>
            </div>
        </div>
    )
}


export default Notes;