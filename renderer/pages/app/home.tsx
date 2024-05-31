import { ReactElement } from 'react';
import AppLayout from '../../components/AppLayout';
import Head from 'next/head';
import TodayTasks from '../../components/TodayTasks';
import AchievementGraph from '../../components/AchivementGraph';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-8">
      <TodayTasks />
      <AchievementGraph />
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <Head>
        <title>Productivity Tracker - Home</title>
      </Head>
      {page}
    </AppLayout>
  );
};

export default HomePage;
