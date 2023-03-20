import { Flex, Tooltip, IconButton, Text } from "@chakra-ui/react";
import { CheckCircle, TrashSimple } from "@phosphor-icons/react";

import useI18N from "../../portfolio/hooks/useI18N";

import Task from "../interfaces/Task";

interface TaskProps {
  task: Task;
  onSetComplete: (complete: boolean) => void;
  onClickDelete: () => void;
}

function TaskItem({ task, onSetComplete, onClickDelete }: TaskProps) {
  const i18n = useI18N("pomodoro-timer");

  return (
    <Flex alignItems="center" bg="gray.900" pl={4} py={1}>
      <Text
        fontSize="1.25rem"
        textDecor={task.completed ? "line-through" : "none"}
        flexGrow={1}
      >
        {task.description}
      </Text>
      <Tooltip
        placement="left"
        label={
          i18n.content.home.taskList.task[task.completed ? "reset" : "complete"]
        }
      >
        <IconButton
          onClick={() => onSetComplete(!task.completed)}
          aria-label={
            i18n.content.home.taskList.task[
              task.completed ? "reset" : "complete"
            ]
          }
          icon={
            <CheckCircle
              size={32}
              color="orange"
              weight={task.completed ? "fill" : "thin"}
            />
          }
          variant="transparent"
        />
      </Tooltip>
      <Tooltip placement="left" label={i18n.content.home.taskList.task.delete}>
        <IconButton
          icon={<TrashSimple size={32} />}
          aria-label={i18n.content.home.taskList.task.delete}
          variant="transparent"
          color="#FD2841"
          onClick={onClickDelete}
        />
      </Tooltip>
    </Flex>
  );
}

export default TaskItem;
