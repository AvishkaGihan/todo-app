import { useState } from "react";

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAddTask(task);
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex space-x-2 p-4 bg-gray-100 rounded shadow-md"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
