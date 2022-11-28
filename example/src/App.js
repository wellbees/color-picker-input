import React, { useState } from 'react'
import './index.css'

import { ColorPicker } from 'color-picker-input'

const App = () => {
  const [colorValue, setColorValue] = useState('')

  return (
    <>
      <div className='header' style={{ backgroundColor: colorValue }}>
        {colorValue}
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='title'>Input Type</div>
          </div>
          <div className='col-4'>
            <ColorPicker
              colorShowType='circle'
              pickerType='chrome'
              inputType='input'
              size='small'
              value={colorValue}
              label='Input with Chrome Picker'
              onChange={(color) => setColorValue(color)}
            />
          </div>
          <div className='col-4'>
            <ColorPicker
              colorShowType='square'
              pickerType='twitter'
              inputType='input'
              variant="filled"
              size='small'
              value={colorValue}
              label='Input with Twitter Picker'
              onChange={(color) => setColorValue(color)}
            />
          </div>
          <div className='col-4'>
            <ColorPicker
              colorShowType='circle'
              pickerType='github'
              specialColors={[
                '#ff6961',
                '#ffb480',
                '#f8f38d',
                '#42d6a4',
                '#08cad1',
                '#59adf6',
                '#9d94ff',
                '#c780e8'
              ]}
              inputType='input'
              variant="standard"
              size='small'
              value={colorValue}
              label='Input with Github Picker'
              onChange={(color) => setColorValue(color)}
              helperText="Select With Special Color"
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='title'>Mui Type</div>
          </div>
          <div className='col-4'>
            <ColorPicker
              colorShowType='square'
              pickerType='chrome'
              inputType='mui'
              size='small'
              value={colorValue}
              label='Mui with Chrome Picker'
              onChange={(color) => setColorValue(color)}
            />
          </div>
          <div className='col-4'>
            <ColorPicker
              colorShowType='circle'
              pickerType='twitter'
              inputType='mui'
              size='small'
              value={colorValue}
              label='Mui with Twitter Picker'
              onChange={(color) => setColorValue(color)}
            />
          </div>
          <div className='col-4'>
            <ColorPicker
              colorShowType='circle'
              pickerType='github'
              inputType='mui'
              size='small'
              value={colorValue}
              label='Mui with Github Picker'
              onChange={(color) => setColorValue(color)}
              error
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
