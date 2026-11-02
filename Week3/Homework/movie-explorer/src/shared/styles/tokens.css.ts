import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(':root', {
  // 색상 토큰
  color: {
    primary: '#f9d86d',
    secondary: '#fff3c4',
    background: '#fffbea',
    surface: '#ffffff',
    textPrimary: '#0f172a',
    textSecondary: '#64748b',
    border: '#e2e8f0',
  },

  // 폰트 굵기
  fontWeight: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },

  // 폰트 크기
  fontSize: {
    size12: '0.75rem',
    size16: '1rem',
    size18: '1.125rem',
    size24: '1.5rem',
  },

  // 간격
  spacing: {
    xs: '0.25rem', 
    sm: '0.5rem',   
    md: '1rem',  
    lg: '1.5rem',  
    xl: '2rem',     
  },

  // 모서리 둥글기
  radius: {
    sm: '0.25rem', 
    md: '0.5rem', 
    lg: '0.75rem', 
    full: '9999px',
  },
})