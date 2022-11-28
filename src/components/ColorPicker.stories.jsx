import React from 'react'

import ColorPicker from './ColorPicker'

export default {
  title: 'Example/ColorPicker',
  component: ColorPicker,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args) => <ColorPicker {...args} />

export const Input = Template.bind({})
Input.args = {
  value: '#',
  colorShowType: 'circle',
  inputType: 'input',
  label: 'Renk Seçin'
}

export const Mui = Template.bind({})
Mui.args = {
  value: '#',
  colorShowType: 'square',
  inputType: 'mui',
  label: 'Renk Seçin',
}

export const Large = Template.bind({});
Large.args = {
  value: '#',
  size: 'large',
  label: 'Renk Seçin',
};

export const Small = Template.bind({});
Small.args = {
  value: '#',
  size: 'small',
  label: 'Renk Seçin',
};