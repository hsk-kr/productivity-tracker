import { TaskHistory } from '../../types/task';

interface HistoryTableProps {
  data: {
    date: string;
    numCompleted: number;
    total: number;
    histories: TaskHistory[];
  }[];
}

const HistoryTable = ({ data }: HistoryTableProps) => {
  return (
    <div className="flex flex-col gap-6">
      {data.map((d) => (
        <div key={d.date}>
          <label>
            {d.date} -{' '}
            <b
              className={
                d.numCompleted >= d.total ? 'text-success' : 'text-accent'
              }
            >
              {d.numCompleted} out of {d.total}
            </b>
          </label>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Day</th>
                  <th>Task Name</th>
                  <th>Task Desc</th>
                  <th>Type</th>
                  <th>Measure Type</th>
                  <th>data</th>
                  <th>Time</th>
                  <th>Completed At</th>
                </tr>
              </thead>
              <tbody>
                {d.histories.map((history, historyIdx) => (
                  <tr>
                    <th>{historyIdx + 1}</th>
                    <td className="uppercase">{history.day}</td>
                    <td>
                      {history.taskName.length > 20
                        ? `${history.taskName.substring(0, 20)}...`
                        : history.taskName}
                    </td>
                    <td>
                      {history.taskDesc.length > 20
                        ? `${history.taskDesc.substring(0, 20)}...`
                        : history.taskDesc}
                    </td>
                    <td className="uppercase">{history.taskType}</td>
                    <td className="uppercase">{history.taskMeasureType}</td>
                    <td>
                      {history.data?.length > 20
                        ? `${history.data.substring(0, 20)}...`
                        : history.data ?? '-'}
                    </td>
                    <td>{history.time ?? '-'}</td>
                    <td>{history.completedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryTable;
