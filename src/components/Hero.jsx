import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Reveal from './Reveal.jsx'

function Hero({ greeting, tagline }) {
  return (
    <Box
      component="section"
      aria-labelledby="hero-title"
      sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 8, md: 12 }, position: 'relative' }}
    >
      <Reveal>
        <Box
          sx={{
            display: 'inline-block',
            px: 2,
            py: 0.5,
            mb: 3,
            borderRadius: '999px',
            bgcolor: 'pastel.butter',
            fontFamily: (theme) => theme.typography.handFontFamily,
            fontSize: '1.2rem',
            transform: 'rotate(-2deg)',
          }}
        >
          반가워요!
        </Box>
        <Typography id="hero-title" variant="h1" component="h1" sx={{ mb: 3 }}>
          {greeting}
        </Typography>
        <Typography
          sx={{ fontSize: { xs: '1.15rem', md: '1.35rem' }, color: 'text.secondary', maxWidth: 560, mb: 5 }}
        >
          {tagline}
        </Typography>
        <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap' }}>
          <Button variant="contained" size="large" href="#about">
            저를 소개할게요
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="#now"
            sx={{ borderColor: 'divider', bgcolor: 'background.paper' }}
          >
            요즘의 나
          </Button>
        </Stack>
      </Reveal>
    </Box>
  )
}

export default Hero
