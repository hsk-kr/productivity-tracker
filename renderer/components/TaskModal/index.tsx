import { IoMdClose } from 'react-icons/io';

export interface TaskModalProps {
  taskId?: string;
  visible: boolean;
  onClose?: VoidFunction;
}

const TaskModal = ({ taskId, visible, onClose }: TaskModalProps) => {
  const modalTitle =
    taskId === undefined ? 'Create Task' : 'Update Task - Task Name';
  const submitButtonColor =
    taskId === undefined ? 'btn-neutral-content' : 'btn-accent';
  const submitButtonLabel = taskId === undefined ? 'Create' : 'Update';

  if (!visible) return null;

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[#00000050]">
      <div className="m-6 w-full max-w-[568px] h-full max-h-[768px] overflow-y-auto bg-neutral rounded-lg p-6 relative">
        <IoMdClose
          className="absolute top-4 right-4 text-2xl hover:cursor-pointer hover:scale-110 transition-all"
          onClick={onClose}
        />
        <h1 className="uppercase font-bold text-xl">{modalTitle}</h1>
        <div className="divider"></div>
        <h2 className="font-bold text-lg mb-2">Task Basic Information</h2>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Task Name</span>
          </div>
          <input
            type="text"
            placeholder="Task Name"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Task Description</span>
          </div>
          <input
            type="text"
            placeholder="Task Description"
            className="input input-bordered w-full"
          />
        </label>
        <div className="divider"></div>
        <h2 className="font-bold text-lg mb-2">Task Type</h2>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Web</span>
            <input
              type="radio"
              name="taskType"
              className="radio checked:bg-primary"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">App</span>
            <input
              type="radio"
              name="taskType"
              className="radio checked:bg-primary"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Custom</span>
            <input
              type="radio"
              name="taskType"
              className="radio checked:bg-primary"
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-bold text-accent">URL</span>
          </div>
          <input
            type="text"
            placeholder="E.g. linkedin.com"
            className="input input-bordered w-full"
          />
        </label>
        <div className="divider"></div>
        <h2 className="font-bold text-lg mb-2">Task Measure Type</h2>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Time-Based</span>
            <input
              type="radio"
              name="taskMeasureType"
              className="radio checked:bg-secondary"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Manual</span>
            <input
              type="radio"
              name="taskMeasureType"
              className="radio checked:bg-secondary"
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-bold text-accent">
              Time - Minutes
            </span>
          </div>
          <input
            type="text"
            placeholder="60"
            className="input input-bordered w-full"
          />
        </label>
        <div className="divider"></div>
        <label className="form-control w-full">
          <div className="label mb-2">
            <span className="label-text">Day</span>
          </div>
          <select className="select select-bordered">
            <option value="DAILY">Daily</option>
            <option value="Monday">Monday</option>
            <option value="TUESDAY">Tuesday</option>
            <option value="WEDNESDAY">Wednesday</option>
            <option value="THURSDAY">Thursday</option>
            <option value="FRIDAY">Friday</option>
            <option value="SATURDAY">Saturday</option>
            <option value="SUNDAY">Sunday</option>
          </select>
        </label>
        <div className="divider"></div>
        <div className="form-control">
          <button className={`btn ${submitButtonColor}`}>
            {submitButtonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
