import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  gap: '12px',
  backgroundColor: '#F8F8F8',
});

export const wrapper = style({
  backgroundColor: '#FFFFFF',
  padding: '12px 20px',
  gap: '8px',
  display: 'flex',
  flexDirection: 'column',
});

export const button = style({
  fontSize: '16px',
  fontWeight: '700',
  color: '#FFFFFF',
  backgroundColor: '#FF7D7D',
  height: '42px',
});

export const title = style({
  fontSize: '20px',
  fontWeight: '700',
  color: '#000000',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '4px 0px',
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
});

export const itemText = style({
  fontSize: '14px',
  fontWeight: '400',
  color: '#000000',
});

export const carousel = style({
  width: '16px',
  height: 'auto',
  aspectRatio: '1/1',
  stroke: '#979797',
});
