import TaskList from "./TaskList";

function ToDo({ title, tasks, ...props }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-bold mb-3 text-blue-600">
        {title} ({tasks.length})
      </h2>

      {tasks.length === 0 ? (
        <p className="text-sm text-gray-400">No tasks here yet 👀</p>
      ) : (
        <TaskList tasks={tasks} {...props} />
      )}
    </div>
  );
}

export default ToDo;
