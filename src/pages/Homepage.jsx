// import { useState, useEffect } from "react";
// import { FiPlus } from "react-icons/fi";
// import ToDo from "../components/ToDo";
// import InProgress from "../components/InProgress";
// import Done from "../components/Done";
// import TaskModal from "../components/TaskModal";

// function HomePage() {
//   const [tasks, setTasks] = useState(() => {
//     const saved = localStorage.getItem("tasks");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingTask, setEditingTask] = useState(null);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (task) => {
//     setTasks([...tasks, { ...task, id: Date.now() }]);
//   };

//   const updateTask = (updatedTask) => {
//     setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
//   };

//   const deleteTask = (id) => {
//     if (window.confirm("Delete this task?")) {
//       setTasks(tasks.filter(t => t.id !== id));
//     }
//   };

//   const moveTask = (id, newStatus) => {
//     setTasks(tasks.map(t =>
//       t.id === id
//         ? { ...t, status: newStatus, isCompleted: newStatus === "done" }
//         : t
//     ));
//   };

//   return (
//     <div className="p-6">
//       <button
//         className="cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-6 transition"
//         onClick={() => {
//           setEditingTask(null);
//           setIsModalOpen(true);
//         }}
//       >
//         <FiPlus /> Add Task
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <ToDo
//           title="To Do"
//           tasks={tasks.filter(t => t.status === "todo")}
//           moveTask={moveTask}
//           deleteTask={deleteTask}
//           setEditingTask={setEditingTask}
//           setIsModalOpen={setIsModalOpen}
//         />
//         <InProgress
//           title="In Progress"
//           tasks={tasks.filter(t => t.status === "inprogress")}
//           moveTask={moveTask}
//           deleteTask={deleteTask}
//           setEditingTask={setEditingTask}
//           setIsModalOpen={setIsModalOpen}
//         />
//         <Done
//           title="Done"
//           tasks={tasks.filter(t => t.status === "done")}
//           moveTask={moveTask}
//           deleteTask={deleteTask}
//           setEditingTask={setEditingTask}
//           setIsModalOpen={setIsModalOpen}
//         />
//       </div>

//       {isModalOpen && (
//         <TaskModal
//           closeModal={() => setIsModalOpen(false)}
//           addTask={addTask}
//           updateTask={updateTask}
//           editingTask={editingTask}
//         />
//       )}
//     </div>
//   );
// }

// export default HomePage;

import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import ToDo from "../components/ToDo";
import InProgress from "../components/InProgress";
import Done from "../components/Done";
import TaskModal from "../components/TaskModal";

function HomePage() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const deleteTask = (id) => {
    if (window.confirm("Delete this task?")) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  const moveTask = (id, newStatus) => {
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? { ...t, status: newStatus, isCompleted: newStatus === "done" }
          : t
      )
    );
  };

  return (
    <div className="p-6">
      <button
        className="cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-6 transition"
        onClick={() => {
          setEditingTask(null);
          setIsModalOpen(true);
        }}
      >
        <FiPlus /> Add Task
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ToDo
          title="To Do"
          tasks={tasks.filter((t) => t.status === "todo")}
          moveTask={moveTask}
          deleteTask={deleteTask}
          setEditingTask={setEditingTask}
          setIsModalOpen={setIsModalOpen}
        />
        <InProgress
          title="In Progress"
          tasks={tasks.filter((t) => t.status === "inprogress")}
          moveTask={moveTask}
          deleteTask={deleteTask}
          setEditingTask={setEditingTask}
          setIsModalOpen={setIsModalOpen}
        />
        <Done
          title="Done"
          tasks={tasks.filter((t) => t.status === "done")}
          moveTask={moveTask}
          deleteTask={deleteTask}
          setEditingTask={setEditingTask}
          setIsModalOpen={setIsModalOpen}
        />
      </div>

      {isModalOpen && (
        <TaskModal
          closeModal={() => setIsModalOpen(false)}
          addTask={addTask}
          updateTask={updateTask}
          editingTask={editingTask}
        />
      )}
    </div>
  );
}

export default HomePage;
