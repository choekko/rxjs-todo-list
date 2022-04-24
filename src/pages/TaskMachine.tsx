/** @jsxImportSource @emotion/react */
import React from 'react';
import useTaskMachine from './hooks/useTaskMachine';
import VTaskMachine, {VTaskMachineProps} from './vacs/VTaskMachine';

function TaskMachine() {
	const { tasks } = useTaskMachine()

	const vTaskMachineProps: VTaskMachineProps = {
		tasks,
	}

	return <VTaskMachine {...vTaskMachineProps}/>
}

export default TaskMachine;
