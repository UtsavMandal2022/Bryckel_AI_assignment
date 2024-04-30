import { useState } from "react";
import Toast from "./components/toast";
import { Link,useNavigate} from "react-router-dom";

function AddNote(){
    const [formdata, setFormdata] = useState({title: '', content: ''})
    const [loading, setLoading] = useState(false);
    const hist=useNavigate();

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
      };

    const submitForm = () => {
        console.log(formdata);
        setLoading(true);
        fetch(`${import.meta.env.VITE_BHOST}/notes/add/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
          })
            .then(response => response.json())
            .then(data => {
              Toast.success('Note added successfully');
              setLoading(false);
              // Handle the API response as needed
            })
            .catch(error => {
                Toast.error('Error adding note');
              console.error('API Error:', error);
                setLoading(false);
              // Handle the error
            });
            hist('/notes');
      };
    return (
        <div className="bg-slate-200 h-screen">
            <Link to="/notes">
        <button className="bg-pink-600 ml-4 mt-6 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
            Go Back
            </button>
        </Link>
            <form onSubmit={submitForm}>
                <div className="flex flex-col items-center justify-center">
              <h1 className="text-blue-500 text-4xl mb-5 text-bold italic animate-bounce">Add a Note</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Title:
        </label>
                <input type="text" name="title" placeholder="Title" className="w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required onChange={handleChange} />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Content:
        </label>
                <input type="textarea" name="content" placeholder="Content" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required onChange={handleChange} />
                <button type="submit" className=" px-3 mt-20 font-bold w-32 text-2xl h-10 text-pink-100 rounded-lg bg-pink-600 hover:bg-red-600 hover:text-white">{!loading?"Add":"..."}</button>
            </div>
            </form>
        </div>
    )
}

export default AddNote;