import dayjs from 'dayjs';
import { useMemo } from 'react';

const AchievementGraph = () => {
  return (
    <div>
      <h1 className="uppercase text-xl mb-2 font-bold">Achievement Graph</h1>
      {/* Header */}
      <div className="mb-2">
        <select className="select select-bordered">
          <option>2023</option>
          <option>2024</option>
        </select>
      </div>
      <div className="flex gap-2">
        <div className="w-36 rounded-lg bg-primary border text-base-content p-2 flex flex-col justify-center items-center gap-1">
          <label className="font-bold">Current Streak</label>
          <span className="text-xl font-bold">3</span>
        </div>
        <div className="w-36 rounded-lg bg-secondary border text-base-content p-2 flex flex-col justify-center items-center gap-1">
          <label className="font-bold">Max Streak</label>
          <span className="text-xl font-bold">10</span>
        </div>
        <div className="w-36 rounded-lg bg-accent border text-base-content p-2 flex flex-col justify-center items-center gap-1">
          <label className="font-bold">Total Days</label>
          <span className="text-xl font-bold">13</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 p-2">
        <Graph />
      </div>
    </div>
  );
};

const Graph = () => {
  const nodes = useMemo(() => {
    const year = 2024; // temp

    const dayYear = dayjs().year(year);
    const monthNodes = [];

    for (let nMonth = 0; nMonth <= 11; nMonth++) {
      let date = dayYear.month(nMonth).date(1);

      const dateNodes = [];

      while (date.month() === nMonth) {
        let color = 'bg-neutral';
        let randN = Math.random();

        if (randN < 0.3) {
          color = 'bg-accent';
        } else if (randN < 0.6) {
          color = 'bg-success';
        }

        const tooltip = `${date.format('YYYY-MM-DD')} - 0/2`;

        dateNodes.push(
          <div
            key={date.format('MMDD')}
            className="tooltip w-fit"
            data-tip={tooltip}
          >
            <div className={`w-2 h-2 ${color}`}></div>
          </div>
        );

        date = date.add(1, 'day');
      }

      monthNodes.push(
        <div key={nMonth} className="flex flex-col gap-1">
          <label className="font-bold uppercase">
            {dayjs().month(nMonth).format('MMM')}
          </label>
          <div
            className="flex flex-col flex-wrap h-16 gap-1"
            style={{
              width:
                8 * Math.ceil(dateNodes.length / 5) +
                4 * (Math.ceil(dateNodes.length / 5) - 1),
            }}
          >
            {dateNodes}
          </div>
        </div>
      );
    }

    return monthNodes;
  }, []);
  return <div className="flex gap-6 flex-wrap">{nodes}</div>;
};

export default AchievementGraph;
