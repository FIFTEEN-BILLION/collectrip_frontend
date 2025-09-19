import { recipe } from '@vanilla-extract/recipes';

export const toast = recipe({
  base: {
    position: 'fixed',
    bottom: '64px',
    marginBottom: '24px',
    background: 'rgba(0, 0, 0, 0.6)',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'opacity 0.25s ease-in-out',
    fontSize: '20px',
    fontWeight: '700',
    color: 'white',
  },
  variants: {
    visible: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
});
