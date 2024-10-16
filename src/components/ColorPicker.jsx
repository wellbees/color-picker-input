import React, { useCallback, useEffect, useState } from 'react'
import { ChromePicker, GithubPicker, TwitterPicker } from 'react-color'
import { TextField } from '@mui/material'
import { ColorPickerProps } from './ColorPickerProps'
import ColorPickerStyles, { cssResolver } from './ColorPickerStyles'

const styles = ColorPickerStyles

const ColorPicker = ({
  resetIcon,
  resetDefaultButton = true,
  colorShowType = 'square',
  pickerType = 'chrome',
  specialColors,
  inputType = 'input',
  variant = 'outlined',
  size = 'medium',
  className,
  style,
  id,
  name,
  label,
  value,
  disabled = false,
  required = false,
  autoFocus = false,
  fullWidth = false,
  placeholder,
  error = false,
  helperText,
  onFocus,
  onBlur,
  onClick,
  onChange,
  ...props
}) => {
  const [pickerOpen, setPickerOpen] = useState(false)
  const [defaultComponentValue, setDefaultComponentValue] = useState(value)
  const [inputValue, setInputValue] = useState(value)

  const handleColorPickerOpen = () => {
    disabled !== true && setPickerOpen(!pickerOpen)
    disabled !== true && onFocus && onFocus()
    disabled !== true && onClick && onClick()
  }
  const handleCloseColorPicker = () => {
    setPickerOpen(false)
    onBlur && onBlur()
  }

  const decimalToHex = (alpha) => {
    if (alpha === 0) {
      return '00'
    } else if (alpha === 1) {
      return ''
    } else {
      return Math.round(255 * alpha).toString(16)
    }
  }

  const handleColorChangeSubmit = (color) => {
    let hexValue
    if (color?.hex === 'transparent') {
      hexValue = color?.hex
    } else {
      hexValue = `${color?.hex}${decimalToHex(color?.rgb?.a)}`
    }
    setInputValue(hexValue)

    pickerType === 'github' && setPickerOpen(false)
  }

  const setColor = useCallback((value) => {
    setDefaultComponentValue(value)
    setInputValue(value)
  }, [])

  useEffect(() => {
    value === 'reset' && setInputValue(defaultComponentValue)
    !defaultComponentValue && setColor(value)
    onChange && onChange(inputValue)
    inputValue?.length === 0 && setInputValue('#')
  }, [inputValue, value])

  return (
    <div className='colorPickerArea' style={{ ...style }}>
      {inputType !== 'mui' && (
        <label
          className={`${cssResolver(styles.labelText)} ${
            error ? cssResolver(styles.labelErrorText) : ''
          } colorPickerLabel`}
        >
          {label}
        </label>
      )}
      <div
        className={`${cssResolver(styles.generalArea)} ${
          className || ''
        } generalArea`}
        style={{ width: fullWidth && '100%' }}
      >
        <div
          className={`${cssResolver(styles.colorSquare)} colorSquare`}
          onClick={handleColorPickerOpen}
        >
          <div
            className={`${cssResolver(
              styles.colorInnerSquare
            )} colorSquareInner`}
            style={{
              borderRadius: colorShowType === 'circle' && '50%',
              background: inputValue
            }}
          />
        </div>
        {pickerOpen ? (
          <div className={cssResolver(styles.colorPickerArea)}>
            <div
              className={cssResolver(styles.colorPickerBg)}
              onClick={handleCloseColorPicker}
            />
            {(!pickerType || (pickerType && pickerType === 'chrome')) && (
              <ChromePicker
                onChange={handleColorChangeSubmit}
                color={inputValue}
              />
            )}
            {pickerType === 'twitter' && (
              <TwitterPicker
                onChange={handleColorChangeSubmit}
                color={inputValue}
                colors={specialColors}
              />
            )}
            {pickerType === 'github' && (
              <GithubPicker
                onChange={handleColorChangeSubmit}
                color={inputValue}
                colors={specialColors}
              />
            )}
          </div>
        ) : null}
        {inputType === 'mui' ? (
          <TextField
            className='colorInput'
            autoComplete='off'
            inputProps={{
              maxLength: 7,
              style: { paddingLeft: 30, minHeight: 32 }
            }}
            id={id}
            name={name}
            label={label}
            value={inputValue}
            disabled={disabled}
            required={required}
            autoFocus={autoFocus}
            fullWidth={fullWidth}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={onClick}
            onChange={(e) => setInputValue(e.target.value)}
            variant={variant}
            size={size}
            error={error}
          />
        ) : (
          <input
            className={`${cssResolver(styles.inputArea)} ${
              error ? cssResolver(styles.inputError) : ''
            } ${
              size === 'small'
                ? cssResolver(styles.inputSmallPadding)
                : size === 'large'
                ? cssResolver(styles.inputLargePadding)
                : cssResolver(styles.inputMediumPadding)
            } ${
              variant === 'filled'
                ? cssResolver(styles.inputFilledPadding)
                : variant === 'outlined'
                ? cssResolver(styles.inputOutlinedPadding)
                : cssResolver(styles.inputStandardPadding)
            } colorInput`}
            autoComplete='off'
            maxLength={7}
            id={id}
            name={name}
            label={label}
            value={inputValue}
            disabled={disabled}
            required={required}
            autoFocus={autoFocus}
            style={{ width: fullWidth && '100%' }}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={onClick}
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}
        {resetDefaultButton !== false &&
          defaultComponentValue !== inputValue && (
            <div
              className={`${cssResolver(
                styles.resetButtonArea
              )} resetButtonArea`}
            >
              <div
                className={`${cssResolver(styles.iconButton)} resetButton`}
                onClick={() => setInputValue(defaultComponentValue)}
              >
                {resetIcon ? (
                  <div className='resetIcon' style={{ width: 20, height: 20 }}>
                    {resetIcon}
                  </div>
                ) : (
                  <svg
                    className={`${cssResolver(styles.iconSvg)} resetIcon`}
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                  >
                    <path d='M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z'></path>
                  </svg>
                )}
              </div>
            </div>
          )}
      </div>
      {helperText && (
        <div
          className={`${cssResolver(styles.helperText)}  ${
            error ? cssResolver(styles.helperErrorText) : ''
          } helperText`}
        >
          {helperText}
        </div>
      )}
    </div>
  )
}

ColorPicker.propTypes = ColorPickerProps

export default ColorPicker
