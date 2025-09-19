import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  height: '42px',
  alignItems: 'center',
  padding: '0 8px',
});

export const title = style({
  fontSize: '20px',
  fontWeight: '700',
  width: '100%',
  textAlign: 'center',
  margin: 0,
});

export const button = style({
  marginRight: 'auto',
  width: '24px',
  height: 'auto',
  aspectRatio: '1/1',
  cursor: 'pointer',
  stroke: '#1A1A1A',
});

export const empty = style({
  width: '24px',
  height: 'auto',
  aspectRatio: '1/1',
});
