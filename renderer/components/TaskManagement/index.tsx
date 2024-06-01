import { useMemo } from 'react';
import { Day, Task } from '../../types/task';
import TaskCardList from '../TaskCardList';

const TaskManagement = () => {
  let tasks: Task[] = [
    {
      id: 'a',
      taskName: 'Coding Test Practice',
      taskDesc: 'Leetcode',
      taskType: 'web',
      data: 'leetcode.com',
      date: '2024-05-28',
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
      time: 300,
      spentTime: 150,
      day: 'FRIDAY',
      done: false,
    },
    {
      id: 'c',
      taskName: 'Coding',
      taskDesc: 'Github Contribution',
      taskType: 'custom',
      date: '2024-05-28',
      day: 'DAILY',
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

  const taskCardList = useMemo(() => {
    const nodes = [];
    const dayOrder: Day[] = [
      'DAILY',
      'MONDAY',
      'TUESDAY',
      'WEDNESDAY',
      'THURSDAY',
      'FRIDAY',
      'SATURDAY',
      'SUNDAY',
    ];
    const tasksPerDay = tasks.reduce((map, task) => {
      if (!map.has(task.day)) {
        map.set(task.day, []);
      }

      map.set(task.day, map.get(task.day).concat(task));
      return map;
    }, new Map<Day, Task[]>());

    for (const day of dayOrder) {
      nodes.push(
        <div className="flex flex-col gap-4 h-fit">
          <label className="text-center font-bold text-lg">{day}</label>
          <TaskCardList
            key={day.toString()}
            tasks={tasksPerDay.get(day) ?? []}
          />
          <button className="btn btn-accent btn-outline uppercase">
            Add a task
          </button>
        </div>
      );
    }

    return nodes;
  }, []);

  return (
    <div className="w-full h-full overflow-auto flex gap-8 pr-8 pb-8">
      {/* <TaskManagementGuide /> */}
      {taskCardList}
    </div>
  );
};

const TaskManagementGuide = () => {
  return (
    <div className="bg-accent">
      <span>How To</span>
      <ul>
        <li>1. Click the button "Add A TASK"</li>
      </ul>
    </div>
  );
};

export default TaskManagement;
