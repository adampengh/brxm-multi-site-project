import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Figure } from '.';

export default {
    title: 'Design System/Atoms/Figure',
    component: Figure,
} as ComponentMeta<typeof Figure>;

const Template: ComponentStory<typeof Figure> = (args) => <Figure {...args} />;

export const FigureWithoutCaption = Template.bind({});
FigureWithoutCaption.args = {
    altText: 'Placeholder - 4x3',
    source: '/static/images/Image-4x3.jpg',
};

export const FigureWithCaption = Template.bind({});
FigureWithCaption.args = {
    altText: 'Placeholder - 4x3',
    caption: 'This is a sample caption',
    source: '/static/images/Image-4x3.jpg',
};
