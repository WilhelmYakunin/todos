export type constnat = { [key: string]: string };

export const errorBoundary: constnat = {
  header: 'Something went wrong',
  headerRole: 'heading',
};

export const TaskInputLng: constnat = {
  LABEL: 'Task description',
  PLACEHOLDER: 'Type in here…',
  ON_ERROR: 'Oh no, error found!',
  COMMON_ERROR_DESCRIPTION: 'Opps! Something went wrong.',
  NOT_STRING_ERROR: 'Input should be a string',
  TOO_BIG_INPUT: 'Input should be no 50 charts long',
};

export const TaskInputControlls: constnat = {
  ADD_TASK: 'Add task',
  MARK_DONE: 'Done',
  DELETE_TASKS: 'Delete completed task',
  CLEAR: 'Clear',
};

export const TaskState: constnat = {
  ALL: 'All',
  REST: ' tasks left',
  COMPLETED: 'Completed',
  ACTIVE: 'Active',
  DELETED: 'Clear completed',
};
