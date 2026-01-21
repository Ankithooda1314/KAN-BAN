import TaskList from "./TaskList";

function Done(props) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-3 text-green-600">Done</h2>
      <TaskList {...props} />
    </div>
  );
}

export default Done;
