import { StyleSheet, StyleResolver } from 'style-sheet'

const ColorPickerStyles = StyleSheet.create({
  generalArea: { position: 'relative', display: 'inline-block' },
  colorSquare: {
    position: 'absolute',
    zIndex: 2,
    width: '12%',
    maxWidth: 22,
    height: '100%',
    marginLeft: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorInnerSquare: {
    width: '100%',
    cursor: 'pointer',
    border: '1px solid #707070',
    aspectRatio: '1/1'
  },
  colorPickerArea: { position: 'absolute', zIndex: 9999, top: '75%' },
  colorPickerBg: { position: 'fixed', inset: 0 },
  resetButtonArea: {
    position: 'absolute',
    top: 0,
    right: 1,
    bottom: 0,
    zIndex: 2,
    display: 'flex',
    alignItems: 'center'
  },
  iconButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: 4,
    margin: 4,
    cursor: 'pointer',
    transition: 'all .3s ease',
    '&:hover': { background: 'rgba(0,0,0,0.1)' }
  },
  iconSvg: { fill: '#707070' },
  helperText: { fontSize: 11, lineHeight: 2, display: 'block' },
  helperErrorText: { color: '#d32f2f' },
  inputArea: {
    minHeight: 32,
    paddingLeft: 32,
    borderStyle: 'solid',
    borderColor: '#707070'
  },
  inputSmallPadding: { padding: '2px 6px' },
  inputMediumPadding: { padding: '4px 10px' },
  inputLargePadding: { padding: '6px 14px' },
  inputFilledPadding: {
    background: '#eaeaea',
    borderWidth: '0 0 1px 0',
    borderRadius: 0
  },
  inputOutlinedPadding: {
    background: 'transparent',
    borderWidth: '1px 1px 1px 1px',
    borderRadius: 3
  },
  inputStandardPadding: {
    background: 'transparent',
    borderWidth: '0 0 1px 0',
    borderRadius: 0
  },
  inputError: { borderColor: '#d32f2f' },
  labelText: { fontSize: 13, lineHeight: 2, display: 'block' },
  labelErrorText: { color: '#d32f2f' }
})

export const cssResolver = (name) => StyleResolver.resolve(name)

export default ColorPickerStyles
