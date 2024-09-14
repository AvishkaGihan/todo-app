interface TaskItemProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

/**
 * A single task item in a list of tasks. This component expects a task object
 * with an id, text, and completed boolean. It also expects two functions: one
 * to delete the task, and one to toggle its completion status.
 *
 * @param {Object} task The task object to display. It should have an id, text,
 * and completed boolean.
 * @param {function} onDeleteTask A function to call when the user clicks the
 * delete button. It should take a single argument, the task's id.
 * @param {function} onToggleComplete A function to call when the user clicks
 * the task's text. It should take a single argument, the task's id.
 */
const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onDeleteTask,
  onToggleComplete,
}) => {
  return (
    <li className="flex justify-between items-center bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <span
        onClick={() => onToggleComplete(task.id)}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
        className={`cursor-pointer text-lg ${
          task.completed ? "text-gray-500" : "text-black"
        }`}
      >
        {task.text}
      </span>
      <button
        onClick={() => onDeleteTask(task.id)}
        className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors duration-300 ease-in-out"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
