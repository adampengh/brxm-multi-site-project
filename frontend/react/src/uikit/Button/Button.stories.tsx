import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '.';

export default {
    title: 'Design System/Atoms/Button',
    component: Button,
    argTypes: {
        active: {
            control: { type: 'boolean'}
        },
        disabled: {
            control: { type: 'boolean'}
        },
        size: {
            options: ['', 'sm', 'lg'],
            control: { type: 'select' }
        },
        style: {
            options: ['', 'rounded', 'round'],
            control: { type: 'select' }
        },
        variant: {
            options: [
                '',
                'dark',
                'dark-outline',
                'light',
                'light-outline',
                'primary',
                'primary-outline',
                'secondary',
                'secondary-outline',
                'success',
                'success-outline',
                'warning',
                'warning-outline',
                'error',
                'error-outline',
                'info',
                'info-outline',
            ],
            control: { type: 'select' }
        }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Primary
export const ButtonTemplate = Template.bind({});
ButtonTemplate.args = {
    active: false,
    className: '',
    disabled: false,
    prefix: 'button',
    size: '',
    style: '',
    text: 'Button',
    variant: '',
};
ButtonTemplate.storyName = 'Button';
