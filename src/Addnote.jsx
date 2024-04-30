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
        <div>
            <Link to="/notes">
        <button className="bg-pink-600  mt-6 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
            Go Back
            </button>
        </Link>
            <form onSubmit={submitForm}>
                <div className="flex flex-col items-center justify-center">
            <h1 className="text-blue-500 text-4xl mb-5 text-bold ">Add a Note</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Title:
        </label>
                <input type="text" name="title" placeholder="Title" required onChange={handleChange} />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Content:
        </label>
                <input type="text" name="content" placeholder="Content" required onChange={handleChange} />
                <button type="submit" className="px-3 mt-2 font-bold text-pink-200 bg-pink-600 hover:bg-purple-600 hover:text-white">{!loading?"Add":"..."}</button>
            </div>
            </form>
        </div>
    )
}

export default AddNote;