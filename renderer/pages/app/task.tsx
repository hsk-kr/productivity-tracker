import Head from 'next/head';
import AppLayout from '../../components/AppLayout';

export default function TaskPage() {
  return (
    <AppLayout>
      <Head>
        <title>Productivity Tracker - Task</title>
      </Head>
      <div>Task</div>
    </AppLayout>
  );
}
