import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Reveal from './Reveal.jsx'

const year = new Date().getFullYear()

function ContactSection({ name, email, links }) {
  return (
    <>
      <Box component="section" id="contact" aria-labelledby="contact-title" sx={{ py: { xs: 6, md: 10 }, scrollMarginTop: 80 }}>
        <Reveal>
          <Box
            sx={{
              p: { xs: 4, md: 7 },
              textAlign: 'center',
              bgcolor: 'pastel.butter',
              borderRadius: '36px',
            }}
          >
            <Typography component="span" aria-hidden="true" sx={{ fontSize: '2.5rem' }}>
              💌
            </Typography>
            <Typography id="contact-title" variant="h2" component="h2" sx={{ mt: 1, mb: 1.5 }}>
              편하게 인사 건네 주세요
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 4 }}>
              작은 이야기도 반갑게 답장할게요.
            </Typography>
            <Stack direction="row" spacing={1.5} useFlexGap sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="contained" size="large" href={`mailto:${email}`}>
                {email}
              </Button>
              {links.map((link) => (
                <Button
                  key={link.label}
                  variant="outlined"
                  size="large"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ bgcolor: 'background.paper', borderColor: 'transparent' }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Box>
        </Reveal>
      </Box>
      <Box component="footer" sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          © {year} {name} · 말랑하고 정돈된 하루를 보내세요 🌼
        </Typography>
      </Box>
    </>
  )
}

export default ContactSection
