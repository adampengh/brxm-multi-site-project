import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container, Row, Column } from '../../uikit/Layout';

const colors = [
    {
        name: 'Primary',
        hex: '#002840',
        rgb: '113, 30, 43'
    },
    {
        name: 'Secondary',
        hex: '#FFD500',
        rgb: '241, 231, 214'
    },
    {
        name: 'Tertiary',
        hex: '#00B2DB',
        rgb: '179, 59, 68'
    }
]

export default {
    title: 'Design System/Atoms/Colors',
    argTypes: {},
};


const Template = (args) => {
    return (
        <Container>
            <Row>
                <h3>Brand Colors</h3>
            </Row>
            <Row>
                { colors.map((color, index) => (
                    <Column sm={3} key={index} style={{ backgroundColor: `${color.hex}`}}>
                        <h3>{ color.name }</h3>

                    </Column>
                ) )}
            </Row>

        </Container>
    )
}


export const ColorTemplate = Template.bind({});
ColorTemplate.args = {};
ColorTemplate.storyName = 'Colors';
