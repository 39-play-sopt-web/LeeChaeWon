import { style } from '@vanilla-extract/css';
import { vars } from './tokens.css';

export const typography = {
  title01: style({
    fontSize: vars.fontSize.size24,
    fontWeight: vars.fontWeight.bold,
    lineHeight: 1.4,
  }),

  title02: style({
    fontSize: vars.fontSize.size18,
    fontWeight: vars.fontWeight.semiBold,
    lineHeight: 1.4,
  }),

  body01: style({
    fontSize: vars.fontSize.size16,
    fontWeight: vars.fontWeight.regular,
    lineHeight: 1.5,
  }),

  caption01: style({
    fontSize: vars.fontSize.size12,
    fontWeight: vars.fontWeight.regular,
    lineHeight: 1.4,
  }),
}