import {React,useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Toast from './components/toast';


function UpdateNote({id,title,content,setumode}) {
    const [formdata,Setformdata]=useState({title:title,content:content});
    const [loading, setLoading] = useState(false);
    const hist=useNavigate();
    const handleChange = (e) => {
        Setformdata({ ...formdata, [e.target.name]: e.target.value });
      };
    const submitForm = () => {
        console.log(formdata);
        setLoading(true);
        fetch(`${import.meta.env.VITE_BHOST}/notes/update/${id}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
          })
            .then(response => response.json())
            .then(data => {
              Toast.success('Note updated successfully');
              setLoading(false);
              // Handle the API response as needed
            })
            .catch(error => {
                Toast.error('Error updating note');
              console.error('API Error:', error);
                setLoading(false);
              // Handle the error
            });
            hist(`/notes/${id}`);
      }
  return (
    <div>
            <form onSubmit={submitForm}>
                <div className="flex flex-col items-center justify-center">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Title:
        </label>
                <input type="text" name="title" value={formdata.title} className="w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Title" required onChange={handleChange} />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Content:
        </label>
                <input type="text" name="content" value={formdata.content} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Content" required onChange={handleChange} />
                <button type="submit" className="bg-red-600 hover:bg-black hover:text-white px-3 mt-20 font-bold w-32 text-2xl h-10 text-pink-100 rounded-lg">{!loading?"Update":"..."}</button>
                <button onClick={()=>setumode(false)} className="px-3 mt-10 font-bold text-pink-200 bg-pink-600 hover:bg-purple-600 hover:text-white">Discard Changes</button>
            </div>
            </form>
        </div>
  )
}   

export default UpdateNote;