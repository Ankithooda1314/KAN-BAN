import TaskList from "./TaskList";

function InProgress(props) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-3 text-yellow-600">In Progress</h2>
      <TaskList {...props} />
    </div>
  );
}

export default InProgress;
