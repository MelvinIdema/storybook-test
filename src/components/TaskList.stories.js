import React from 'react';

import { PureTaskList } from './TaskList';
import * as TaskStories from './Task.stories';
export default {
    component: PureTaskList,
    title: 'TaskList',
    decorators: [story => <div style={{ padding: '3em' }}>{story()}</div>],
};

const Template = args => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    onPinTask: () => alert('onPinTask'),
    onArchiveTask: () => alert('onArchiveTask'),
    tasks: [
        {...TaskStories.default.task, id: 1, title: 'Task 1', state: 'TASK_INBOX'},
        {...TaskStories.default.task, id: 2, title: 'Task 2', state: 'TASK_INBOX'},
        {...TaskStories.default.task, id: 3, title: 'Task 3', state: 'TASK_INBOX'},
        {...TaskStories.default.task, id: 4, title: 'Task 4', state: 'TASK_INBOX'},
        {...TaskStories.default.task, id: 5, title: 'Task 5', state: 'TASK_INBOX'},
        {...TaskStories.default.task, id: 6, title: 'Task 6', state: 'TASK_INBOX'},
        {...TaskStories.default.task, id: 7, title: 'Task 7', state: 'TASK_INBOX'},
    ]
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    ...Default.args,
    tasks: [
        ...Default.args.tasks.slice(0, 5),
        { id: 6, title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ]
};

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    ...Loading.args,
    loading: false
};