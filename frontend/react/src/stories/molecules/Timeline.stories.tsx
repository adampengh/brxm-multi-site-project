import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Timeline } from '../../uikit/Timeline';

export default {
    title: 'Design System/Molecules/Timeline',
    component: Timeline,
    argTypes: {
        side: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Timeline>;


const Template: ComponentStory<typeof Timeline> = (args) => <Timeline {...args} />


export const TimelineTemplate = Template.bind({});
TimelineTemplate.args = {
    side: 'left'
};
TimelineTemplate.storyName = 'Timeline';
