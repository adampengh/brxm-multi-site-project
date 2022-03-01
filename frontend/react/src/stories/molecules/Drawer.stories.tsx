import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Drawer } from '../../uikit';

export default {
    title: 'Design System/Atoms/Drawer',
    component: Drawer,
    argTypes: {
        side: {
            options: [
                'bottom',
                'left',
                'right',
                'top',
            ],
            control: { type: 'select' }
        }
    }
} as ComponentMeta<typeof Drawer>;


const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

// Primary
export const DrawerTemplate = Template.bind({});
DrawerTemplate.args = {
    side: 'bottom',
};
DrawerTemplate.storyName = 'Drawer';
