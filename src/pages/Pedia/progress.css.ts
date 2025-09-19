import { style, createVar } from '@vanilla-extract/css';

export const progressWidthVar = createVar();

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 20px',
  gap: '12px',
});

export const titleContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const title = style({
  fontSize: '16px',
  fontWeight: '700',
});

export const progress = style({
  fontSize: '16px',
  fontWeight: '700',
  color: '#FF7676',
});

export const progressBar = style({
  width: '100%',
  height: '12px',
  background: '#F5F5F5',
  borderRadius: '4px',
  overflow: 'hidden',
  position: 'relative',

  '::before': {
    content: '',
    position: 'absolute',
    width: progressWidthVar,
    height: '100%',
    background: '#FF7676',
    borderRadius: '4px',
  },
});
