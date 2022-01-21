import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Picture } from '.';

export default {
    title: 'Design System/Atoms/Picture',
    component: Picture,
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = (args) => <Picture {...args} />;

// 16 x 9
export const SixteenByNine = Template.bind({});
SixteenByNine.args = {
    altText: 'Placeholder - 16x9',
    mobileImage: '/static/images/Image-1x1.jpg',
    tabletImage: '/static/images/Image-16x9.jpg',
    desktopImage: '/static/images/Image-16x9.jpg',
};

// 4 x 3
export const FourByThree = Template.bind({});
FourByThree.args = {
    altText: 'Placeholder - 4x3',
    mobileImage: '/static/images/Image-1x1.jpg',
    tabletImage: '/static/images/Image-4x3.jpg',
    desktopImage: '/static/images/Image-4x3.jpg',
};

// 3 x 2
export const ThreeByTwo = Template.bind({});
ThreeByTwo.args = {
    altText: 'Placeholder - 3x2',
    mobileImage: '/static/images/Image-1x1.jpg',
    tabletImage: '/static/images/Image-3x2.jpg',
    desktopImage: '/static/images/Image-3x2.jpg',
};

// 1 x 1
export const OneByOne = Template.bind({});
OneByOne.args = {
    altText: 'Placeholder - 1x1',
    mobileImage: '/static/images/Image-1x1.jpg',
    tabletImage: '/static/images/Image-1x1.jpg',
    desktopImage: '/static/images/Image-1x1.jpg',
};

// 2 x 3
export const TwoByThree = Template.bind({});
TwoByThree.args = {
    altText: 'Placeholder - 2x3',
    mobileImage: '/static/images/Image-2x3.jpg',
    tabletImage: '/static/images/Image-2x3.jpg',
    desktopImage: '/static/images/Image-2x3.jpg',
};

// 3 x 4
export const ThreeByFour = Template.bind({});
ThreeByFour.args = {
    altText: 'Placeholder - 3x4',
    mobileImage: '/static/images/Image-3x4.jpg',
    tabletImage: '/static/images/Image-3x4.jpg',
    desktopImage: '/static/images/Image-3x4.jpg',
};
