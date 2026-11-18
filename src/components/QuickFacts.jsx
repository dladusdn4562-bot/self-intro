import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Reveal from './Reveal.jsx'
import SectionTitle from './SectionTitle.jsx'

// Meora의 "Meet me in 60 seconds" 구조를 참고한 번호 목록
function QuickFacts({ facts }) {
  return (
    <Box component="section" aria-labelledby="facts-title" sx={{ py: { xs: 6, md: 10 } }}>
      <Reveal>
        <SectionTitle id="facts-title" label="1분이면 충분해요" title="저에 대한 다섯 가지" />
      </Reveal>
      <Box component="ol" sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gap: 1.5 }}>
        {facts.map((fact, index) => (
          <Reveal key={fact.text} component="li" delay={index * 0.08}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 2, md: 3 },
                p: { xs: 2, md: 2.5 },
                bgcolor: 'background.paper',
                borderRadius: '20px',
                boxShadow: 1,
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                '&:hover': { transform: 'translateY(-3px)', boxShadow: 2 },
              }}
            >
              <Typography
                aria-hidden="true"
                sx={{
                  fontFamily: (theme) => theme.typography.handFontFamily,
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  minWidth: 36,
                  color: 'text.secondary',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </Typography>
              <Typography component="span" aria-hidden="true" sx={{ fontSize: '1.5rem' }}>
                {fact.emoji}
              </Typography>
              <Typography>{fact.text}</Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Box>
  )
}

export default QuickFacts
