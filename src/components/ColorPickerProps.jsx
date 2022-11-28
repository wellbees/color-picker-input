import PropTypes from 'prop-types'

export const ColorPickerProps = {
  colorShowType: PropTypes.oneOf(['circle', 'square']),
  pickerType: PropTypes.oneOf(['chrome', 'twitter', 'github']),
  specialColors: PropTypes.array,
  inputType: PropTypes.oneOf(['mui', 'input']),
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  resetDefaultButton: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func
}

export const ColorPickerDefaultProps = {
  colorShowType: 'square',
  pickerType: 'chrome',
  inputType: 'input',
  variant: 'outlined',
  size: 'medium',
  autoFocus: false,
  disabled: false,
  error: false,
  fullWidth: false,
  required: false,
  resetDefaultButton: true,
}