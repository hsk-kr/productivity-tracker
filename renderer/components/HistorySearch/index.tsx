/**
 * What should it do
 *
 * select box | keyword input box | button group dates
 * Search type: taskName, taskDesc, taskType, taskMeasureType, data, day, completedAt
 * Search By Keyword from the list
 * All, Last 6 months, 3 months, Last Month
 *
 * Infinite Scroll
 */

const HistorySearch = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <select className="select select-bordered">
        <option>Task Name</option>
        <option>Task Desc</option>
        <option>Type</option>
        <option>Measure Type</option>
        <option>Data</option>
        <option>Completed At</option>
      </select>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="flex gap-1 items-center">
        <button className="btn btn-sm btn-neutral" name="date">
          All
        </button>
        <button className="btn btn-sm" name="date">
          Last 6 Months
        </button>
        <button className="btn btn-sm" name="date">
          Last 3 Months
        </button>
        <button className="btn btn-sm" name="date">
          Last Month
        </button>
      </div>
    </div>
  );
};

export default HistorySearch;
