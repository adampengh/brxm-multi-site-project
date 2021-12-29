import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Image } from '.';

export default {
    title: 'Atom/Image',
    component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const SixteenByNine = Template.bind({});

SixteenByNine.args = {
    altText: 'Placeholder - 16x9',
    mobileImage: 'https://via.placeholder.com/800x800',
    tabletImage: 'https://via.placeholder.com/1100x900',
    desktopImage: 'https://via.placeholder.com/1600x900',
};
