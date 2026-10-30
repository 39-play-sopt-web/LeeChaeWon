import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { typography } from '@/shared/styles/typography.css';

export const overview = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
});

export const title = style([
  typography.title01,
  {
    color: vars.color.textPrimary,
  },
]);

export const description = style([
  typography.body01,
  {
    color: vars.color.textSecondary,
    whiteSpace: 'pre-line',
  },
]);