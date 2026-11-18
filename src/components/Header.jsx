import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function Header({ name }) {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        bgcolor: 'rgba(255, 249, 243, 0.85)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container
        maxWidth="md"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}
      >
        <Typography
          component="a"
          href="#top"
          sx={{
            fontFamily: (theme) => theme.typography.handFontFamily,
            fontSize: '1.6rem',
            fontWeight: 700,
            color: 'text.primary',
            textDecoration: 'none',
          }}
        >
          {name}.
        </Typography>
        <Button variant="contained" href="#contact">
          인사하기 👋
        </Button>
      </Container>
    </Box>
  )
}

export default Header
