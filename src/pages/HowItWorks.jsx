function HowItWorks() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">How This Kanban App Works</h2>

      <p className="mb-4 text-gray-700">
        This Kanban application helps you organize and track your tasks
        efficiently by visualizing them across different stages of work.
      </p>

      <ul className="list-disc ml-6 space-y-3 text-gray-700">
        <li>
          <strong>Add Tasks:</strong> Create new tasks using the “Add Task”
          button. Each task can have a title, priority, and due date.
        </li>

        <li>
          <strong>Organize Work:</strong> Tasks are organized into three
          columns: To Do, In Progress, and Done.
        </li>

        <li>
          <strong>Move Tasks:</strong> As work progresses, tasks can be moved
          between columns to reflect their current status.
        </li>

        <li>
          <strong>Edit & Delete:</strong> Tasks can be edited at any time or
          deleted once they are no longer needed.
        </li>

        <li>
          <strong>Persistent Data:</strong> All tasks are saved automatically
          using localStorage, so your data remains even after refreshing the
          page.
        </li>
      </ul>

      <p className="mt-6 text-gray-700">
        This project demonstrates the use of React components, state management,
        conditional rendering, and clean UI design using Tailwind CSS.
      </p>
    </div>
  );
}

export default HowItWorks;
