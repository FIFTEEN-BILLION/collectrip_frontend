import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

export const content = style({
  width: '100%',
  height: '100%',
  flexGrow: 1,
  overflow: 'hidden',
  position: 'relative',
});

export const inputContainer = recipe({
  base: {
    width: '100%',
    position: 'absolute',
    padding: '12px',
    boxSizing: 'border-box',
    bottom: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    inputFocus: {
      true: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
      },
    },
  },
});

export const inputContents = recipe({
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    borderRadius: '12px',
    gap: '12px',
    filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))',
  },
  variants: {
    inputFocus: {
      true: {
        backgroundColor: 'white',
        padding: '12px',
      },
    },
  },
});

export const inputDecoContainer = style({
  display: 'flex',
  alignItems: 'self-start',
  justifyContent: 'center',
  padding: '12px',
  gap: '12px',
});

export const inputDecoCharacter = style({
  width: '30%',
  objectFit: 'cover',
  paddingTop: '12px',
});

export const inputDecoAsk = style({
  width: '25%',
  objectFit: 'cover',
});

export const input = style({
  top: 0,
  left: 0,
  width: '100%',
  border: 'none',
  outline: '1px solid #A4A4A4',
  borderRadius: '12px',
  padding: '12px',
  boxSizing: 'border-box',
  fontSize: '14px',
  fontWeight: '600',

  '::placeholder': {
    color: '#A4A4A4',
  },
});
