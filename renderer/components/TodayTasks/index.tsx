import { Task } from '../../types/task';
import { FaCheck } from 'react-icons/fa';

interface TodayTaskProps {
  taskName: string;
  taskDesc: string;
  taskType: Task['taskType'];
  taskMeasureType: Task['taskMeasureType'];
  time?: number;
  spentTime: number;
  day: string;
  done: boolean;
}

const TodayTasks = () => {
  let tasks: Task[] = [
    {
      id: 'a',
      taskName: 'Coding Test Practice',
      taskDesc: 'Leetcode',
      taskType: 'web',
      data: 'leetcode.com',
      date: '2024-05-28',
      taskMeasureType: 'TIME',
      time: 30,
      spentTime: 0,
      day: 'DAILY',
      done: false,
    },
    {
      id: 'b',
      taskName: 'Job Searching',
      taskDesc: 'LinkedIn',
      taskType: 'web',
      data: 'linkedin.com',
      date: '2024-05-28',
      taskMeasureType: 'TIME',
      time: 300,
      spentTime: 150,
      day: 'DAILY',
      done: false,
    },
    {
      id: 'c',
      taskName: 'Coding',
      taskDesc: 'Github Contribution',
      taskType: 'custom',
      date: '2024-05-28',
      day: 'DAILY',
      taskMeasureType: 'MANUAL',
      spentTime: 0,
      done: true,
    },
    {
      id: 'd',
      taskName: 'ExerciseExerciseExerciseExerciseExerciseExerciseExercise',
      taskDesc:
        'For healthFor healthFor healthFor healthFor healthFor healthFor healthFor health',
      taskType: 'custom',
      date: '2024-05-28',
      day: 'DAILY',
      taskMeasureType: 'MANUAL',
      spentTime: 0,
      done: false,
    },
  ];
  tasks = tasks.concat(
    tasks.map((task, taskIdx) => ({
      ...task,
      id: `${task.id}${taskIdx}`,
    }))
  );

  return (
    <div className="flex flex-col gap-2">
      <h1 className="uppercase text-xl font-bold">Today Tasks</h1>
      <progress
        className="progress progress-accent w-56 h-4"
        value={80}
        max="100"
      ></progress>
      <div className="flex flex-wrap gap-4">
        {tasks.map((task) => (
          <TodayTask
            taskName={task.taskName}
            taskDesc={task.taskDesc}
            taskType={task.taskType}
            taskMeasureType={task.taskMeasureType}
            time={task.time}
            spentTime={task.spentTime}
            day={task.day}
            done={task.done}
          />
        ))}
      </div>
    </div>
  );
};

const TodayTask = ({
  taskName,
  taskDesc,
  taskType,
  taskMeasureType,
  time,
  spentTime,
  day,
  done,
}: TodayTaskProps) => {
  return (
    <div className="flex flex-col gap-1 p-4 bg-neutral rounded-lg w-48">
      <h2 className="text-lg line-clamp-2 break-words leading-tight font-bold">
        {taskName}
      </h2>
      <p className="text-sm px-1 line-clamp-2 break-words leading-tight">
        {taskDesc}
      </p>
      <div className="flex-1 flex flex-col justify-end gap-1 mt-1">
        <div className="flex gap-1 mb-1">
          <span className="badge badge-ghost uppercase">{taskType}</span>
          <span className="badge badge-outline uppercase">{day}</span>
        </div>
        {/* TIME */}
        {taskMeasureType === 'TIME' && (
          <div className="flex flex-col gap-1 items-center">
            <progress
              className="progress progress-success w-full"
              value={spentTime}
              max={time}
            ></progress>
            <span>{`${spentTime}/${time}m`}</span>
          </div>
        )}
        {/* ONCE */}
        {taskMeasureType === 'MANUAL' && (
          <div className="flex justify-center">
            <button
              className={`btn btn-sm w-full ${done ? 'btn-success' : ''}`}
            >
              <FaCheck />
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodayTasks;
