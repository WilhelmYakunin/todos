import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Badge, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import { TaskState } from '../../constants';
import ListItemText from '@mui/material/ListItemText';
import { ITask } from '../../store/tasksSlice';

import { useTypedSelector } from '../../store/store';
import { getAllTasks, getAllTasksError } from '../../store/selectors';


const ButtomNavigation = () => {
    const tasks = useTypedSelector(getAllTasks)
    const tasksRemainCount = useMemo(() => tasks.filter((task: ITask) => !task.isCompleted).length, [tasks])
    const error = useTypedSelector(getAllTasksError)

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

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {visibleTasks.map((task: ITask) => <ListItemText>{task.description}</ListItemText>)}
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
          <BottomNavigationAction label={TaskState.ALL} value={TaskState.ALL} />
          <BottomNavigationAction label={TaskState.ACTIVE} value={TaskState.ACTIVE} />
          <BottomNavigationAction label={TaskState.COMPLETED} value={TaskState.COMPLETED} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default ButtomNavigation;