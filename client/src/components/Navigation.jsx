import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3 items-center">
      <Link to="/tasks">
        <h1 className=" text-black font-bold text-3xl mb-4">Tu lista de tareas</h1>
      </Link>
      <button className="bg-blue-800 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        <Link to="/tasks-create">Crear Tarea</Link>
      </button>
    </div>
  );
}
