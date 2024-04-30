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
                <input type="text" name="title" value={formdata.title} placeholder="Title" required onChange={handleChange} />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Content:
        </label>
                <input type="text" name="content" value={formdata.content} placeholder="Content" required onChange={handleChange} />
                <button type="submit" className="px-3 mt-2 font-bold text-pink-200 bg-pink-600 hover:bg-purple-600 hover:text-white">{!loading?"Update":"..."}</button>
                <button onClick={()=>setumode(false)} className="px-3 mt-2 font-bold text-pink-200 bg-pink-600 hover:bg-purple-600 hover:text-white">Cancel</button>
            </div>
            </form>
        </div>
  )
}   

export default UpdateNote;