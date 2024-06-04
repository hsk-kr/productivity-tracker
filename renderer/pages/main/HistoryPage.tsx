import Head from 'next/head';
import AppLayout from '../../components/AppLayout';

export default function HistoryPage() {
  return (
    <AppLayout>
      <Head>
        <title>Productivity Tracker - History</title>
      </Head>
      <div>
        <HistoryTable />
      </div>
    </AppLayout>
  );
}
