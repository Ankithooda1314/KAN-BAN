import React from "react";

function About() {
  return (
    <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">About This Project</h2>

      <p className="mb-4">
        This project is a Kanban-style task management application built using
        React and Tailwind CSS. The goal of this project was to understand how
        to manage application state, break the UI into reusable components, and
        implement real-world features in a clean and scalable way.
      </p>

      <p className="mb-4">
        The application allows users to create, update, delete, and manage tasks
        across different stages such as To Do, In Progress, and Done. Tasks can
        be moved between columns, assigned priorities, and given due dates.
      </p>

      <p className="mb-4">
        A modal-based form is used for adding and editing tasks, which keeps the
        dashboard clean and user-friendly. The project also uses browser
        localStorage to persist data, ensuring tasks are not lost on page
        refresh.
      </p>

      <p>
        Through this project, I learned how to lift state up, pass data through
        props, implement conditional rendering, and improve user experience with
        better UI design and interactions.
      </p>

      <p>Designed and developed by Ankit</p>
    </div>
  );
}

export default About;
