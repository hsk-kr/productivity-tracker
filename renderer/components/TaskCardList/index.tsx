import { useMemo } from 'react';
import { Task } from '../../types/task';

interface TaskCardProps {
  taskName: string;
  taskType: Task['taskType'];
  data: string;
}

const TaskCardList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="flex flex-col gap-6 min-w-[240px] w-[240px]">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          taskName={task.taskName}
          taskType={task.taskType}
          data={task.data}
        />
      ))}
    </div>
  );
};

const TaskCard = ({ data, taskName, taskType }: TaskCardProps) => {
  return (
    <div className="w-full min-h-[140px] h-[140px] rounded-lg bg-neutral flex flex-col gap-4 p-4 box-border">
      <span className="break-words line-clamp-2 font-bold">{taskName}</span>
      <div className="flex flex-col gap-2">
        {data && (
          <span className="badge badge-accent uppercase truncate block max-w-full">
            {data}
          </span>
        )}
        <span className="badge badge-ghost uppercase">{taskType}</span>
      </div>
    </div>
  );
};

export default TaskCardList;
