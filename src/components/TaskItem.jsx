import { FiEdit, FiTrash2, FiPlay, FiCheck, FiRefreshCw } from "react-icons/fi";

function TaskItem({
  task,
  moveTask,
  deleteTask,
  setEditingTask,
  setIsModalOpen,
}) {
  return (
    <div className="bg-gray-100 p-3 rounded-lg mb-3 hover:shadow transition">
      <p className="font-semibold">{task.title}</p>

      <p className="text-sm">
        Priority:
        <span
          className={`ml-1 font-bold ${
            task.priority === "high"
              ? "text-red-600"
              : task.priority === "medium"
              ? "text-yellow-600"
              : "text-green-600"
          }`}
        >
          {task.priority.toUpperCase()}
        </span>
      </p>

      <p className="text-xs text-gray-500">
        Due: {task.dueDate || "No deadline"}
      </p>

      <div className="flex gap-3 mt-3">
        {task.status === "todo" && (
          <button
            className="cursor-pointer text-blue-600 hover:scale-110 transition"
            onClick={() => moveTask(task.id, "inprogress")}
            title="Start"
          >
            <FiPlay />
          </button>
        )}

        {task.status === "inprogress" && (
          <>
            <button
              className="cursor-pointer text-green-600 hover:scale-110 transition"
              onClick={() => moveTask(task.id, "done")}
              title="Mark Done"
            >
              <FiCheck />
            </button>
            <button
              className="cursor-pointer text-gray-500 hover:scale-110 transition"
              onClick={() => moveTask(task.id, "todo")}
              title="Move Back"
            >
              <FiRefreshCw />
            </button>
          </>
        )}

        {task.status === "done" && (
          <button
            className="cursor-pointer text-gray-500 hover:scale-110 transition"
            onClick={() => moveTask(task.id, "inprogress")}
            title="Reopen"
          >
            <FiRefreshCw />
          </button>
        )}

        <button
          className="cursor-pointer text-indigo-600 hover:scale-110 transition"
          onClick={() => {
            setEditingTask(task);
            setIsModalOpen(true);
          }}
          title="Edit"
        >
          <FiEdit />
        </button>

        <button
          className="cursor-pointer text-red-600 hover:scale-110 transition"
          onClick={() => deleteTask(task.id)}
          title="Delete"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
