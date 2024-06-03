export interface Task {
  id: string;
  taskName: string;
  taskDesc: string;
  taskType: TaskType;
  taskMeasureType: TaskMeasureType;
  data?: string;
  day: Day;
  date: string;
  time?: number;
  spentTime?: number;
  done: boolean;
}

export type Day =
  | 'DAILY'
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY';

export type TaskType = 'web' | 'app' | 'custom';

export type TaskMeasureType = 'TIME' | 'MANUAL';
