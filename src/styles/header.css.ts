import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  padding: '0px 12px',
  gap: '8px',
  height: '48px',
  position: 'relative',
  zIndex: 0,
  justifyContent: 'space-between',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: 'white',
});

export const logo = style({
  height: '24px',
  width: 'auto',
  marginRight: 'auto',
});

export const title = style({
  fontSize: '20px',
  fontWeight: '700',

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const icon = recipe({
  base: {
    width: '24px',
    height: 'auto',
    aspectRatio: '1/1',
    cursor: 'pointer',
    fill: '#A4A4A4',
    stroke: '#A4A4A4',
  },
  variants: {
    dark: {
      true: {
        fill: '#1A1A1A',
        stroke: '#1A1A1A',
      },
    },
  },
  defaultVariants: {
    dark: false,
  },
});
