import { createTheme } from '@mui/material/styles'

// 디자인 토큰: references/self-intro/references.md 기반
// 배경·글씨색: Aida & You / 파스텔: Mila / 알약 모양·카드: Meora
const bodyFont = '"Gowun Dodum", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif'
const handFont = '"Gaegu", "Gowun Dodum", cursive'

const theme = createTheme({
  palette: {
    background: { default: '#FFF9F3', paper: '#FFFFFF' },
    text: { primary: '#3B130C', secondary: 'rgba(59, 19, 12, 0.68)' },
    primary: { main: '#3B130C', contrastText: '#FFF9F3' },
    pastel: {
      butter: '#FBE9A6',
      mint: '#CDEBDD',
    },
    divider: '#EDE8E4',
  },
  typography: {
    fontFamily: bodyFont,
    handFontFamily: handFont,
    h1: { fontSize: 'clamp(2.25rem, 6vw, 3.75rem)', fontWeight: 400, lineHeight: 1.25 },
    h2: { fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', fontWeight: 400, lineHeight: 1.3 },
    h3: { fontSize: '1.25rem', fontWeight: 400, lineHeight: 1.4 },
    body1: { fontSize: '1.0625rem', lineHeight: 1.8 },
    body2: { fontSize: '0.95rem', lineHeight: 1.7 },
    button: { textTransform: 'none', fontWeight: 400 },
  },
  shape: { borderRadius: 24 },
  spacing: 8,
  shadows: [
    'none',
    '0 2px 10px rgba(59, 19, 12, 0.05)',
    '0 6px 20px rgba(59, 19, 12, 0.08)',
    ...Array(22).fill('0 6px 20px rgba(59, 19, 12, 0.08)'),
  ],
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 22,
          transition: 'transform 0.2s ease',
          '&:hover': { transform: 'translateY(-2px)' },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 999, fontSize: '0.95rem' },
      },
    },
  },
})

export default theme
