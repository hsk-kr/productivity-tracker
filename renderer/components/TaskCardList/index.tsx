import { Task } from '../../types/task';
import { IoIosOpen } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';

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
    <div className="w-full min-h-[140px] h-[140px] rounded-lg bg-neutral flex flex-col gap-4 p-4 box-border relative hover:cursor-pointer group">
      <span className="break-words line-clamp-2 font-bold">{taskName}</span>
      <div className="flex flex-col gap-2">
        {data && (
          <span className="badge badge-accent uppercase truncate block max-w-full">
            {data}
          </span>
        )}
        <span className="badge badge-ghost uppercase">{taskType}</span>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#00000050] justify-center items-center flex opacity-0 group-hover:opacity-100 transition-all">
        <div className="flex gap-1">
          <button className="btn btn-sm btn-accent text-white">
            <IoIosOpen />
          </button>
          <button className="btn btn-sm btn-error text-white">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCardList;
