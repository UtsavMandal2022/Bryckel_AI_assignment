import { Link } from "react-router-dom";

function Display({data}){
    console.log(data);
    return(
        <div>
        <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        {data.map((note, index) => (
          <Link to={`/notes/${note.id}`} key={index}>
          <div
            key={index}
            className="bg-white shadow-md rounded-lg hover:bg-purple-700 hover:text-white p-4 mb-4 flex w-100 items-center justify-between"
          >
            <p className="text-lg font-semibold">{note.title}</p>
          </div>
        </Link>
        ))}
      </div>
    </div>
        </div>
    )
}
export default Display;