import { style } from '@vanilla-extract/css';
import { vars } from "@/shared/styles/tokens.css";

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xl,
  width: '100%',
  maxWidth: '72rem',
  margin: '0 auto',
  padding: `${vars.spacing.lg}`,
});

export const backLink = style({
  display: 'inline-flex',
  gap: vars.spacing.xs,
  color: vars.color.textPrimary,

  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.primary}`,
      outlineOffset: '0.25rem',
      borderRadius: vars.radius.sm,
    },
  },
});