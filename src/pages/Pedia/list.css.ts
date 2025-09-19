import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

export const categoryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '0 0 16px',
  width: '100%',
  boxSizing: 'border-box',
  alignItems: 'center',
  overflowX: 'hidden',

  ['::before']: {
    content: '',
    display: 'block',
    width: 'calc(100% - 40px)',
    height: '1px',
    boxSizing: 'border-box',
    backgroundColor: '#E0E0E0',
  },
});

export const categoryTitle = style({
  fontSize: '16px',
  fontWeight: '700',
  color: '#515151',
});

export const badgeScroll = style({
  width: '100%',
  overflowX: 'scroll',
  display: 'flex',
});

export const badgeList = style({
  display: 'flex',
  gap: '12px',
  boxSizing: 'border-box',
  margin: '0 auto',
  padding: '0 20px',
  overflowX: 'scroll',
});

export const badgeItem = recipe({
  base: {
    width: '64px',
    height: '64px',
  },
  variants: {
    collect: {
      false: {
        filter: 'brightness(50%)',
      },
    },
  },
});

export const badgeItemImage = style({
  width: '100%',
  height: '100%',
});
