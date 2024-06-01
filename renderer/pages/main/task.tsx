import Head from 'next/head';
import AppLayout from '../../components/AppLayout';
import TaskManagement from '../../components/TaskManagement';

export default function TaskPage() {
  return (
    <AppLayout>
      <Head>
        <title>Productivity Tracker - Task</title>
      </Head>
      <TaskManagement />
    </AppLayout>
  );
}
