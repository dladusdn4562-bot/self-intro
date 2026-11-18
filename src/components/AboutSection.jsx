import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Reveal from './Reveal.jsx'
import SectionTitle from './SectionTitle.jsx'

function AboutSection({ paragraphs, skills }) {
  return (
    <Box component="section" id="about" aria-labelledby="about-title" sx={{ py: { xs: 6, md: 10 }, scrollMarginTop: 80 }}>
      <Reveal>
        <SectionTitle id="about-title" label="조금 더 자세히" title="About" />
      </Reveal>
      <Reveal delay={0.1}>
        <Box sx={{ p: { xs: 3, md: 5 }, bgcolor: 'background.paper', borderRadius: '28px', boxShadow: 1 }}>
          {paragraphs.map((text) => (
            <Typography key={text} sx={{ mb: 2 }}>
              {text}
            </Typography>
          ))}
          <Typography
            component="h3"
            sx={{
              mt: 4,
              mb: 1.5,
              fontFamily: (theme) => theme.typography.handFontFamily,
              fontSize: '1.3rem',
              color: 'text.secondary',
            }}
          >
            제가 잘하는 것
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill, index) => (
              <li key={skill}>
                <Chip
                  label={skill}
                  sx={{
                    bgcolor: index % 2 === 0 ? 'pastel.mint' : 'pastel.butter',
                    color: 'text.primary',
                    transition: 'transform 0.2s ease',
                    '&:hover': { transform: 'translateY(-2px)' },
                  }}
                />
              </li>
            ))}
          </Box>
        </Box>
      </Reveal>
    </Box>
  )
}

export default AboutSection
