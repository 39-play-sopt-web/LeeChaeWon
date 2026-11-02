import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { typography } from '@/shared/styles/typography.css';

export const hero = style({
  position: 'relative',
  maxWidth: '100%',
  overflow: 'hidden',
});

export const backdropImage = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  opacity: 0.4,
});

export const content = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.xl,
  padding: `${vars.spacing.xl} 0`,
});

export const poster = style({
  display: 'block',
  flexShrink: 0,
  maxWidth: '13.75rem',
  aspectRatio: '2 / 3',
  objectFit: 'cover',
  borderRadius: vars.radius.lg,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
});

export const movieInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  minWidth: 0,
});

export const title = style([
  typography.title01,
  {
    color: vars.color.textPrimary,
  },
]);

export const metadata = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: vars.spacing.md,
  color: vars.color.textPrimary,
});

export const genres = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.sm,
});