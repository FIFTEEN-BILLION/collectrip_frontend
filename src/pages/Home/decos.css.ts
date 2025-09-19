import { keyframes, style } from '@vanilla-extract/css';

export const container = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const background = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  top: 0,
  left: 0,
  objectPosition: 'center',
  minHeight: '0px',
  minWidth: '0px',
});

const pop = keyframes({
  from: {
    transform: 'translate3d(0, -20px, 0)',
  },
  to: {
    transform: 'translate3d(0, 0px, 0)',
  },
});

const popShadow = keyframes({
  from: {
    transform: 'scaleX(1.5)',
    opacity: 0.5,
  },
  to: {
    transform: 'scaleX(1)',
    opacity: 1,
  },
});

export const character = style({
  position: 'absolute',
  bottom: '15%',
  width: '40%',
  filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))',
  animation: `${pop} 0.5s cubic-bezier(.5, 0.05, 1, .5) infinite alternate`,
});

export const characterShadow = style({
  position: 'absolute',
  bottom: '15%',
  width: '30%',
  height: '20px',
  transform: 'translateY(50%)',
  borderRadius: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  animation: `${popShadow} 0.5s cubic-bezier(.5, 0.05, 1, .5) infinite alternate`,
});
