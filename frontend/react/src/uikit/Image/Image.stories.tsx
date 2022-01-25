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
    src: '/static/images/Image-16x9.jpg',
};
SixteenByNine.storyName = '16 x 9';

// 4 x 3
export const FourByThree = Template.bind({});
FourByThree.args = {
    altText: 'Placeholder - 4x3',
    src: '/static/images/Image-4x3.jpg',
};
FourByThree.storyName = '4 x 3';

// 3 x 2
export const ThreeByTwo = Template.bind({});
ThreeByTwo.args = {
    altText: 'Placeholder - 3x2',
    src: '/static/images/Image-3x2.jpg',
};
ThreeByTwo.storyName = '3 x 2';

// 1 x 1
export const OneByOne = Template.bind({});
OneByOne.args = {
    altText: 'Placeholder - 1x1',
    src: '/static/images/Image-1x1.jpg',
};
OneByOne.storyName = '1 x 1';

// 2 x 3
export const TwoByThree = Template.bind({});
TwoByThree.args = {
    altText: 'Placeholder - 2x3',
    src: '/static/images/Image-2x3.jpg',
};
TwoByThree.storyName = '2 x 3';

// 3 x 4
export const ThreeByFour = Template.bind({});
ThreeByFour.args = {
    altText: 'Placeholder - 3x4',
    src: '/static/images/Image-3x4.jpg',
};
ThreeByFour.storyName = '3 x 4';
