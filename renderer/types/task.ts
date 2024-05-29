export interface Task {
  id: string;
  taskName: string;
  taskDesc: string;
  taskType: TaskType;
  data?: string;
  day: Day;
  date: string;
  time?: number;
  spentTime: number;
  done: boolean;
}

export type Day =
  | 'ONCE'
  | 'DAILY'
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY';

export type TaskType = 'web' | 'app' | 'custom';
