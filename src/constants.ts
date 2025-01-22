import { constnat } from './types';

export const errorBoundary: constnat = {
  header: 'Something went wrong',
  headerRole: 'heading',
};

export const TaskInputLng: constnat = {
  LABEL: 'Task description',
  PLACEHOLDER: 'Type in here…',
  ON_ERROR: 'Oh no, error found!',
  COMMON_ERROR_DESCRIPTION: 'Opps! something is wrong.',
  NOT_STRING_ERROR: 'Input should be a string',
  TOO_BIG_INPUT: 'Input should be no 50 charts long',
};

export const TaskInputControlls: constnat = {
  ADD_TASK: 'Add task',
  CLEAR: 'Clear',
};
