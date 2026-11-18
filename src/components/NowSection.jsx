import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Reveal from './Reveal.jsx'
import SectionTitle from './SectionTitle.jsx'

const toneColor = {
  butter: 'pastel.butter',
  mint: 'pastel.mint',
  paper: 'background.paper',
}

// Meora의 "Now" 섹션 + 벤토 카드 구조를 참고
function NowSection({ items }) {
  return (
    <Box component="section" id="now" aria-labelledby="now-title" sx={{ py: { xs: 6, md: 10 }, scrollMarginTop: 80 }}>
      <Reveal>
        <SectionTitle id="now-title" label="요즘의 나" title="Now" />
      </Reveal>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gap: 2,
        }}
      >
        {items.map((item, index) => (
          <Reveal
            key={item.label}
            delay={index * 0.08}
            sx={{ gridColumn: { sm: item.wide ? 'span 2' : 'span 1' } }}
          >
            <Box
              component="article"
              sx={{
                height: '100%',
                p: 3,
                bgcolor: toneColor[item.tone],
                borderRadius: '28px',
                boxShadow: 1,
                transition: 'transform 0.25s ease',
                '&:hover': { transform: 'translateY(-4px) rotate(-0.5deg)' },
              }}
            >
              <Typography component="span" aria-hidden="true" sx={{ fontSize: '1.75rem' }}>
                {item.emoji}
              </Typography>
              <Typography
                component="h3"
                sx={{
                  mt: 1,
                  fontFamily: (theme) => theme.typography.handFontFamily,
                  fontSize: '1.25rem',
                  color: 'text.secondary',
                }}
              >
                {item.label}
              </Typography>
              <Typography variant="h3" component="p">
                {item.text}
              </Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Box>
  )
}

export default NowSection
