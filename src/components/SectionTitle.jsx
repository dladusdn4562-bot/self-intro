import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// 손글씨 라벨 + 제목으로 이루어진 섹션 머리말
function SectionTitle({ id, label, title }) {
  return (
    <Box sx={{ mb: { xs: 3, md: 4 } }}>
      <Typography
        sx={{
          fontFamily: (theme) => theme.typography.handFontFamily,
          fontSize: '1.35rem',
          color: 'text.secondary',
        }}
      >
        {label}
      </Typography>
      <Typography id={id} variant="h2" component="h2">
        {title}
      </Typography>
    </Box>
  )
}

export default SectionTitle
