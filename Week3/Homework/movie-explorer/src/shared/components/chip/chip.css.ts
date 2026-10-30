import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { typography } from '@/shared/styles/typography.css';

const base = style([
  typography.caption01,
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${vars.spacing.xs} ${vars.spacing.md}`,
    whiteSpace: 'nowrap',
    color: vars.color.textPrimary,
  },
]);

export const chipVariants = styleVariants({
  rating: [
    base,
    {
      backgroundColor: vars.color.primary,
      borderRadius: vars.radius.md,
    },
  ],

  genre: [
    base,
    {
      backgroundColor: vars.color.secondary,
      borderRadius: vars.radius.full,
    },
  ],
});