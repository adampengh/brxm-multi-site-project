import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Layout } from './Layout';
import './Layout.scss';

export default {
    title: 'Design System/Molecules/Layout',
    component: Layout,
    argTypes: {
        containers: {
            control: { type: 'number', min: 1, max: 4, step: 1}
        },
        rows: {
            control: { type: 'number', min: 1, max: 4, step: 1}
        },
        columns: {
            control: { type: 'number', min: 1, max: 12, step: 1}
        },
    },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => {
    return (
        <div style={{ paddingBottom: '32px' }}>
            <Layout {...args} />
            <p style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                padding: '8px',
                background: '#fff'
            }}>*Background color/borders only for storybook</p>
        </div>
    )
}

export const LayoutTemplate = Template.bind({});
LayoutTemplate.args = {
    containers: 1,
    rows: 2,
    columns: 3,
};
LayoutTemplate.storyName = 'Layout';
