import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal, Image } from '../../uikit';

const ContentText = () => {
    return (
        <>
            <h3>Modal Heading</h3>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </>
    )
}

const ContentImage = () => <Image src='https://via.placeholder.com/1200x1200' altText='modal' />

const Components: any = {
    'Text': ContentText,
    'Image': ContentImage
}

export default {
    title: 'Design System/Atoms/Modal',
    component: Modal,
    argTypes: {
        children: {
            options: Object.keys(Components),
            mappings: Components,
            control: {
                type: 'select',
                labels: {
                    ContentText: 'Text',
                    ContentImage: 'Image'
                }
            }
        },
        showModal: {
            control: { type: 'boolean' }
        },
        setShowModal: {
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof Modal>;


const Template: ComponentStory<typeof Modal> = (args) => {
    const [showModal, setShowModal] = useState(true);

    return (
        <Modal
            showModal={showModal}
            setShowModal={setShowModal}
        >
            { React.createElement(Components[args.children]) }
        </Modal>
    );
}

// Primary
export const ModalTemplate = Template.bind({});
ModalTemplate.args = {
    id: '',
    children: 'Image',
    className: '',
    prefix: 'modal',
    showModal: true
};
ModalTemplate.storyName = 'Modal';
