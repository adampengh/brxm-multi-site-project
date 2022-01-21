import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Image } from '.';

export default {
    title: 'Design System/Atoms/Image',
    component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

// 16 x 9
export const SixteenByNine = Template.bind({});
SixteenByNine.args = {
    altText: 'Placeholder - 16x9',
    source: '/static/images/Image-16x9.jpg',
};

// 4 x 3
export const FourByThree = Template.bind({});
FourByThree.args = {
    altText: 'Placeholder - 4x3',
    source: '/static/images/Image-4x3.jpg',
};

// 3 x 2
export const ThreeByTwo = Template.bind({});
ThreeByTwo.args = {
    altText: 'Placeholder - 3x2',
    source: '/static/images/Image-3x2.jpg',
};

// 1 x 1
export const OneByOne = Template.bind({});
OneByOne.args = {
    altText: 'Placeholder - 1x1',
    source: '/static/images/Image-1x1.jpg',
};

// 2 x 3
export const TwoByThree = Template.bind({});
TwoByThree.args = {
    altText: 'Placeholder - 2x3',
    source: '/static/images/Image-2x3.jpg',
};

// 3 x 4
export const ThreeByFour = Template.bind({});
ThreeByFour.args = {
    altText: 'Placeholder - 3x4',
    source: '/static/images/Image-3x4.jpg',
};
