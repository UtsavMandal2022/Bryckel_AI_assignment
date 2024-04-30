import { Link } from "react-router-dom";

function Display({data}){
    console.log(data);
    const colors=['bg-red-200','bg-blue-200','bg-green-200','bg-yellow-200','bg-indigo-200','bg-purple-200','bg-pink-200'];
    return(
        <div>
        <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        {data.map((note, index) => (
          <Link to={`/notes/${note.id}`} key={index}>
          <div
            key={index}
            className={`${colors[Math.floor(Math.random()*7)]} shadow-2xl rounded-lg hover:bg-purple-700 hover:text-white p-4 mb-4 flex w-100 items-center`}
          >
          <p className="rounded-full w-6 bg-green-500 text-center text-bold mr-2 ">{index+1}</p>
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