export interface Task {
  id: string;
  taskName: string;
  taskDesc: string;
  taskType: TaskType;
  day: Day;
  date: string;
  done: boolean;
}

export enum Day {
  ONCE,
  DAILY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

export type TaskType = 'web' | 'app' | 'custom';
