import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { vars } from './tokens.css';

globalFontFace('Pretandard Variable', {
  src: 'url("/fonts/PretendardVariable.woff2") format("woff2")',
  fontWeight: '400 700',
  fontStyle: 'normal',
  fontDisplay: 'swap',
})

globalStyle('body', {
  fontFamily: "'Pretendard Variable', Pretendard, system-ui, sans-serif",
  color: vars.color.textPrimary,
  backgroundColor: vars.color.background,
});