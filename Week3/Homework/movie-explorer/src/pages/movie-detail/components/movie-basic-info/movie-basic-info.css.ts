import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { typography } from '@/shared/styles/typography.css';

export const basicInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
});

export const title = style([
  typography.title01,
  {
    color: vars.color.textPrimary,
  },
]);

export const cardList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
  gap: vars.spacing.md,
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  minWidth: 0,
  padding: vars.spacing.xl,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.secondary,
});

export const label = style([
  typography.body01,
  {
    color: vars.color.textPrimary,
  },
]);

export const value = style([
  typography.caption01,
  {
    color: vars.color.textPrimary,
    overflowWrap: 'anywhere',
  },
]);