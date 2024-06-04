import Head from 'next/head';
import AppLayout from '../../components/AppLayout';
import HistoryTable from '../../components/HistoryTable';
import HistorySearch from '../../components/HistorySearch';
import { ComponentProps } from 'react';

export default function HistoryPage() {
  const data: ComponentProps<typeof HistoryTable>['data'] = [
    {
      date: '2024.06.04',
      numCompleted: 5,
      total: 7,
      histories: [
        {
          id: 'c',
          taskName: 'Coding Test Practice',
          taskDesc: 'Leetcode',
          taskType: 'web',
          data: 'leetcode.com',
          completedAt: '2024-05-28',
          taskMeasureType: 'TIME',
          time: 30,
          day: 'DAILY',
        },
        {
          id: 'b',
          taskName: 'Job Searching',
          taskDesc: 'LinkedIn',
          taskType: 'web',
          data: 'linkedin.com',
          completedAt: '2024-05-28',
          taskMeasureType: 'TIME',
          time: 300,
          day: 'FRIDAY',
        },
        {
          id: 'c',
          taskName: 'Coding',
          taskDesc: 'Github Contribution',
          taskType: 'custom',
          completedAt: '2024-05-28',
          day: 'DAILY',
          taskMeasureType: 'MANUAL',
        },
        {
          id: 'd',
          taskName: 'ExerciseExerciseExerciseExerciseExerciseExerciseExercise',
          taskDesc:
            'For healthFor healthFor healthFor healthFor healthFor healthFor healthFor health',
          taskType: 'custom',
          completedAt: '2024-05-28',
          day: 'DAILY',
          taskMeasureType: 'MANUAL',
        },
      ],
    },
    {
      date: '2024.06.03',
      numCompleted: 7,
      total: 7,
      histories: [
        {
          id: 'c',
          taskName: 'Coding Test Practice',
          taskDesc: 'Leetcode',
          taskType: 'web',
          data: 'leetcode.com',
          completedAt: '2024-05-28',
          taskMeasureType: 'TIME',
          time: 30,
          day: 'DAILY',
        },
        {
          id: 'b',
          taskName: 'Job Searching',
          taskDesc: 'LinkedIn',
          taskType: 'web',
          data: 'linkedin.com',
          completedAt: '2024-05-28',
          taskMeasureType: 'TIME',
          time: 300,
          day: 'FRIDAY',
        },
        {
          id: 'c',
          taskName: 'Coding',
          taskDesc: 'Github Contribution',
          taskType: 'custom',
          completedAt: '2024-05-28',
          day: 'DAILY',
          taskMeasureType: 'MANUAL',
        },
        {
          id: 'd',
          taskName: 'ExerciseExerciseExerciseExerciseExerciseExerciseExercise',
          taskDesc:
            'For healthFor healthFor healthFor healthFor healthFor healthFor healthFor health',
          taskType: 'custom',
          completedAt: '2024-05-28',
          day: 'DAILY',
          taskMeasureType: 'MANUAL',
        },
      ],
    },
  ];
  return (
    <AppLayout>
      <Head>
        <title>Productivity Tracker - History</title>
      </Head>
      <div className="flex flex-col">
        <HistorySearch />
        <div className="divider" />
        <HistoryTable data={data} />
      </div>
    </AppLayout>
  );
}
