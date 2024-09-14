import TaskItem from "./TaskItem";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

/**
 * A list of tasks. This component expects a list of tasks, as well as two
 * functions: one to delete a task, and one to toggle its completion status.
 *
 * @param {Task[]} tasks The list of tasks to display.
 * @param {(id: number) => void} onDeleteTask A function to call when the user
 * clicks the delete button. It should take a single argument, the task's id.
 * @param {(id: number) => void} onToggleComplete A function to call when the
 * user clicks the task's text. It should take a single argument, the task's id.
 */
const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDeleteTask,
  onToggleComplete,
}) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
