"use client";

import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

/**
 * The main component of the app, which displays the to-do list and allows the
 * user to add new tasks, delete existing tasks, and toggle the completion status
 * of tasks.
 *
 * This component uses the useState and useEffect hooks to store the list of
 * tasks in the component's state and to load the tasks from localStorage when
 * the component is mounted. It also uses the useState and useEffect hooks to
 * update the tasks in localStorage whenever the tasks in the component's state
 * change.
 *
 * The component renders a <TaskForm> component to allow the user to add new
 * tasks, and a <TaskList> component to display the list of tasks. The
 * <TaskList> component receives the list of tasks as a prop, as well as three
 * functions as props: one to delete a task, one to toggle the completion status
 * of a task, and one to add a new task.
 */
const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  // Function to add a new task
  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Function to delete a task
  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Function to toggle task completion status
  const toggleComplete = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        To-Do List
      </h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default HomePage;
