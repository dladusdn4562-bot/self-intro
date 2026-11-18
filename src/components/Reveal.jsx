import Box from '@mui/material/Box'
import useReveal from '../hooks/useReveal.js'

function Reveal({ children, delay = 0, sx, ...props }) {
  const [ref, visible] = useReveal()

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Reveal
