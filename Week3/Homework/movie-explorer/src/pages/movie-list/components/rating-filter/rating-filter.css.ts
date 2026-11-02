import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { typography } from '@/shared/styles/typography.css';

export const filter = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.sm,
});

const buttonBase = style([
  typography.body01,
  {
    padding: `${vars.spacing.sm} ${vars.spacing.md}`,
    borderRadius: vars.radius.full,
    color: vars.color.textPrimary,
    whiteSpace: 'nowrap',
  },
]);

export const button = styleVariants({
  default: [buttonBase, { backgroundColor: vars.color.secondary }],
  selected: [buttonBase, { backgroundColor: vars.color.primary }],
});