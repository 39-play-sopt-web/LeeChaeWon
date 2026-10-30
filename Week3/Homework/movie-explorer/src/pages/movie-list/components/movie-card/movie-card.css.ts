import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { typography } from '@/shared/styles/typography.css';

export const card = style({
  display: 'block',
  overflow: 'hidden',
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.surface,
  textDecoration: 'none',
  transition: 'transform 180ms ease, box-shadow 180ms ease',

  selectors: {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 20px rgba(15, 23, 42, 0.16)',
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.primary}`,
      outlineOffset: '2px',
    },
  },
});

export const poster = style({
  position: 'relative',
  overflow: 'hidden',
  aspectRatio: '2 / 3',
});

export const posterImage = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const posterPlaceholder = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: vars.color.secondary,
  color: vars.color.textSecondary,
});

export const rating = style({
  position: 'absolute',
  top: 8,
  left: 8,
  zIndex: 1,
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
  padding: vars.spacing.md,
});

export const title = style([
  typography.title02,
  {
    overflow: 'hidden',
    color: vars.color.textPrimary,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
]);

export const releaseDate = style([
  typography.caption01,
  {
    color: vars.color.textSecondary,
  },
]);

export const overview = style([
  typography.caption01,
  {
    display: '-webkit-box',
    overflow: 'hidden',
    color: vars.color.textPrimary,
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
  },
]);