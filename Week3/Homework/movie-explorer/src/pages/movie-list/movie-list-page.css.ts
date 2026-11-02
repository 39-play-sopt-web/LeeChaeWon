import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { typography } from '@/shared/styles/typography.css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
  width: '100%',
  maxWidth: '72rem',
  margin: '0 auto',
  padding: `${vars.spacing.xl} ${vars.spacing.lg}`,
});

export const title = style([
  typography.title01,
  {
    color: vars.color.textPrimary,
  },
]);

export const movieList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(13rem, 1fr))',
  gap: vars.spacing.md,
});