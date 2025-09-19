import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
  padding: '20px',
  gap: '12px',
});

export const logo = style({
  width: '50%',
  height: 'auto',
  marginBottom: '16px',
});

export const divider = style({
  fontSize: '11px',
  fontWeight: '400',
  color: '#ADADAD',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  whiteSpace: 'nowrap',
  width: '100%',

  '::after': {
    content: '',
    width: '100%',
    height: '1px',
    backgroundColor: '#C7C7C7',
  },
  '::before': {
    content: '',
    width: '100%',
    height: '1px',
    backgroundColor: '#C7C7C7',
  },
});

export const button = style({
  width: '100%',
  height: '48px',
  color: '#1A1A1A',
  backgroundColor: '#FEE500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  borderRadius: '12px',
  border: 'none',
  fontSize: '16px',
  fontWeight: '600',
});
