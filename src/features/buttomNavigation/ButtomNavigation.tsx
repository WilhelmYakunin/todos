import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Badge, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import { TaskState } from '../../constants';
import ListItemText from '@mui/material/ListItemText';
import DeleteTaskButton from '../../components/buttons/deleteCompletedButton';
import { nanoid } from 'nanoid';
import MarkCompleterButton from '../../components/buttons/MarkCompleteButton';

import { ITask } from '../../store/tasksSlice';
import { useAppDispatch, useTypedSelector } from '../../store/store';
import { getAllTasks } from '../../store/selectors';
import { markTaskCompleted, removeCompletedTasks } from '../../store/tasksSlice';


const ButtomNavigation = () => {
    const tasks = useTypedSelector(getAllTasks)
    const tasksRemainCount = useMemo(() => tasks.filter((task: ITask) => !task.isCompleted).length, [tasks])

    const [activeButton, setValue] = useState(TaskState.ALL); 
    const ref = useRef<HTMLDivElement>(null);
    const [visibleTasks, setVisibleTasks] = useState(tasks);
    const switchTasks = useCallback(() => {
        switch(activeButton) {
            case TaskState.ACTIVE:
                return tasks.filter((task: ITask) => !task.isCompleted)
            case TaskState.COMPLETED:
                return tasks.filter((task: ITask) => task.isCompleted)
            default:
                return tasks
        }
    }, [tasks, activeButton])

    useEffect(() => {
        (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
        setVisibleTasks(() => switchTasks());
    }, [switchTasks]);

    const dispatch = useAppDispatch();
    const deletedComplited = useCallback(() => dispatch(removeCompletedTasks()), [dispatch])
    const toCompleted = useCallback((task_id: ReturnType<typeof nanoid>) => dispatch(markTaskCompleted(task_id)), [dispatch])

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List sx={{ m: '20px' }}>
        {visibleTasks.map((task: ITask) => <ListItemText key={task.task_id}>
        <Paper sx={{ p: '10px', textDecorationLine: task.isCompleted ? 'line-through' : 'none' }} elevation={1}>
        {task.description}
        <MarkCompleterButton onMarkComplete={() => toCompleted(task.task_id)} disabled={Boolean(task.isCompleted) } />
        </Paper>
        </ListItemText>)}
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center' }} elevation={3}>
        <Box sx={{ ml: '20px', display: 'flex', alignItems: 'center' }} >
            <Badge badgeContent={tasksRemainCount} color="primary" max={999} showZero /> 
            <Typography ml={'15px'}>{TaskState.REST}</Typography>
        </Box>
        <BottomNavigation
          sx={{margin: 'auto'}}  
          showLabels
          value={activeButton}
          onChange={(e, buttonName) => {
            e.preventDefault();
            setValue(buttonName);
          }}
        >
          <BottomNavigationAction label={<Typography sx={{ fontSize: '16px'}}>{TaskState.ALL}</Typography>} value={TaskState.ALL} />
          <BottomNavigationAction label={<Typography sx={{ fontSize: '16px'}}>{TaskState.ACTIVE}</Typography>} value={TaskState.ACTIVE} />
          <BottomNavigationAction label={<Typography sx={{ fontSize: '16px'}}>{TaskState.COMPLETED}</Typography>} value={TaskState.COMPLETED} />
        </BottomNavigation>
        <Box sx={{ mr: '20px', display: 'flex', alignItems: 'end' }} >
            <DeleteTaskButton onDelete={deletedComplited} />
        </Box>
      </Paper>
    </Box>
  );
}

export default ButtomNavigation;