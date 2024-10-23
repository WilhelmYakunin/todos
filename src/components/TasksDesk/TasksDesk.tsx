import FormControl from '@mui/joy/FormControl'
import Stack from '@mui/joy/Stack'

import { useState, useCallback, useMemo } from "react";
import { store, useAppDispatch, useTypedSelector } from "../../store/store";
import { addTask, handleTaskInput, removeCompletedTasks, markTaskCompleted, setLoadStatus, setError, TasksState } from "../../store/tasksSlice";
import { getAllTasks, getTaskInInput, getAllTasksIsload, getAllTasksError } from '../../store/selectors'

import TaskInput from '../textInput/TextInput';

const TasksDesk = () => {
    const select = useTypedSelector((state: TasksState) => ({
        tasks: state.allTasks,
        taskInInput: state.taskInInput,
        isLoad: state.isLoad,
        isError: state.error,
    }))

    const dispatch = useAppDispatch()

    const callbacks = {
        addTask: useCallback(() => {

        }, []),
        handleTaskInput: useCallback((e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            console.log(formData)
            // dispatch(handleTaskInput())
        }, []),
        markTaskCompleted: useCallback(() => {

        }, []),
        removeCompletedTasks: useCallback(() => {

        }, []),
    }


    return (
        <Stack spacing={2}>
            <FormControl error={Boolean(select.isError)}>
                <TaskInput 
                    onChange={callbacks.handleTaskInput} 
                    taskInInput={select.taskInInput} 
                    isError={Boolean(select.isError)} 
                    errorText={select.isError} />
            </FormControl>
      </Stack>
    )
}

export default TasksDesk


