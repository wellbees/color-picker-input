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
              variant='filled'
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
              variant='standard'
              size='small'
              value={colorValue}
              label='Input with Github Picker'
              onChange={(color) => setColorValue(color)}
              helperText='Select With Special Color'
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
              resetIcon={
                <svg width='20' height='20' viewBox='0 0 20 20'>
                  <path d='M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 1c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm3.707 4.293a.999.999 0 0 0-1.414 0L10 8.586 7.707 6.293a.999.999 0 1 0-1.414 1.414L8.586 10l-2.293 2.293a.999.999 0 1 0 1.414 1.414L10 11.414l2.293 2.293a.999.999 0 1 0 1.414-1.414L11.414 10l2.293-2.293a.999.999 0 0 0 0-1.414z' />
                </svg>
              }
              helperText="Change with 'resetIcon' prop"
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
