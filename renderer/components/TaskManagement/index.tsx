import { useMemo, useState } from 'react';
import { Day, Task } from '../../types/task';
import TaskCardList from '../TaskCardList';
import TaskModal, { TaskModalProps } from '../TaskModal';

type TaskModalInfo = { visible: boolean; taskId?: string; day?: Day };

const TaskManagement = () => {
  const [taskModalInfo, setTaskModalInfo] = useState<TaskModalInfo>({
    visible: false,
  });

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

  const closeTaskModal = () => {
    setTaskModalInfo({
      visible: false,
    });
  };

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

    const openCreateTaskModal = (day: Day) => () => {
      setTaskModalInfo({
        day,
        visible: true,
      });
    };

    const openUpdateTaskModal = (day: Day) => (taskId: string) => {
      setTaskModalInfo({
        day,
        taskId,
        visible: true,
      });
    };

    for (const day of dayOrder) {
      nodes.push(
        <div className="flex flex-col gap-4 h-fit">
          <label className="text-center font-bold text-lg">{day}</label>
          <TaskCardList
            key={day.toString()}
            tasks={tasksPerDay.get(day) ?? []}
            onTaskEdit={openUpdateTaskModal(day)}
          />
          <button
            className="btn btn-accent btn-outline uppercase"
            onClick={openCreateTaskModal(day)}
          >
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
      <TaskModal
        taskId={taskModalInfo.taskId}
        visible={taskModalInfo.visible}
        onClose={closeTaskModal}
      />
    </div>
  );
};

export default TaskManagement;
