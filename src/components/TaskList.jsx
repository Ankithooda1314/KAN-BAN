import TaskItem from "./TaskItem";

function TaskList(props) {
  return (
    <>
      {props.tasks.map((task) => (
        <TaskItem key={task.id} task={task} {...props} />
      ))}
    </>
  );
}

export default TaskList;
