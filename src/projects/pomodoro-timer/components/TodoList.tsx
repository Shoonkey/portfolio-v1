import {
  Flex,
  Heading,
  IconButton,
  SlideFade,
  Spinner,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";

import useI18N from "../../portfolio/hooks/useI18N";

import Task from "../interfaces/Task";
import AddTaskDialog from "./AddTaskModal";
import TaskItem from "./TaskItem";

function TodoList() {
  const i18n = useI18N("pomodoro-timer");

  const [tasks, setTasks] = useState<Task[]>([]);
  const [loadingTasks, setLoadingTasks] = useState(true);
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  const addTask = (description: string) => {
    setTasks((data) => [
      ...data,
      { id: uuidv4(), description, completed: false },
    ]);
  };

  const removeTask = (taskIndex: number) => {
    setTasks((data) => [
      ...data.slice(0, taskIndex),
      ...data.slice(taskIndex + 1),
    ]);
  };

  const setTaskCompleted = (taskIndex: number, completed: boolean) => {
    setTasks((data) => [
      ...data.slice(0, taskIndex),
      { ...data[taskIndex], completed },
      ...data.slice(taskIndex + 1),
    ]);
  };

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) setTasks(JSON.parse(savedTasks));

    setLoadingTasks(false);
  }, []);

  useEffect(() => {
    if (loadingTasks) return;

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [loadingTasks, tasks]);

  return (
    <>
      <AddTaskDialog
        isOpen={taskModalOpen}
        onAddTask={addTask}
        onClose={() => setTaskModalOpen(false)}
      />
      <Flex flexGrow={1} flexDir="column" maxW={{ base: "auto", lg: "600px" }}>
        <Flex gap={3}>
          <Heading as="h3">{i18n.content.home.taskList.title}</Heading>
          <Tooltip placement="top" label={i18n.content.home.taskList.task.add}>
            <IconButton
              icon={<Plus size={32} />}
              aria-label={i18n.content.home.taskList.task.add}
              variant="transparent"
              color="orange.400"
              onClick={() => setTaskModalOpen(true)}
            />
          </Tooltip>
        </Flex>
        {loadingTasks ? (
          <Flex flexGrow={1} justifyContent="center" alignItems="center">
            <Spinner size="xl" transform="scale(3)" />
          </Flex>
        ) : (
          <Flex flexGrow={1} overflowY="auto" flexDir="column" gap={2}>
            {tasks.map((task, index) => (
              <SlideFade in key={task.id}>
                <TaskItem
                  task={task}
                  onSetComplete={(complete) =>
                    setTaskCompleted(index, complete)
                  }
                  onClickDelete={() => removeTask(index)}
                />
              </SlideFade>
            ))}
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default TodoList;
