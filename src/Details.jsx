import {React,useEffect,useState} from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Toast from './components/toast';
import UpdateNote from './Updatenote';


function Details(){
    const {id}=useParams();
    const [data,setData]=useState();
    const [loading,setLoading]=useState(true);
    const hist=useNavigate();
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BHOST}/notes/${id}/`)
        .then(response=>response.json())
        .then(data=>{
            setData(data);
            console.log(data);
            setLoading(false);
            Toast.success('Note loaded successfully');
        })
        .catch(error=>{
            console.log(error);
            setLoading(false);
            Toast.error('Error loading note');
        });
    },[]);

    const [umode,setumode]=useState(false);

    if(loading){
        return (
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
            </div>
          );
    }

    const Deleteitem=()=>{
        fetch(`${import.meta.env.VITE_BHOST}/notes/delete/${id}/`, {
            method: 'DELETE',
          })
            .then(response => response.json())
            .then(data => {
              Toast.success('Note deleted successfully');
              setLoading(false);
              // Handle the API response as needed
            })
            .catch(error => {
                Toast.error('Error deleting note');
              console.error('API Error:', error);
                setLoading(false);
              // Handle the error
            });
            hist('/notes');
    }

    return (
        <div className='bg-gradient-to-r h-screen from-orange-300 to-yellow-500'>
            <Link to="/notes">
            <button className="bg-pink-600 ml-4 mt-6 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
            Go Back
            </button>
        </Link>
        <button className='bg-red-600 font-bold rounded-full text-white ml-10 w-16 hover:bg-red-800' onClick={Deleteitem}>Delete</button>
        <button className='bg-blue-600 font-bold rounded-full text-white ml-10 w-16 hover:bg-black' onClick={()=>setumode(true)}>Update</button>

        {umode?<UpdateNote id={id} title={data.title} content={data.content} setumode={setumode}/>:  <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl text-center bg-gray-200 py-2 text-gray-800 font-bold'>{data.title}</h1>
        <p className='mt-4 bg-pink-200'>{data.content}</p>
        </div>}
        </div>
    )
}

export default Details;