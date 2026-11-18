import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import QuickFacts from '../components/QuickFacts.jsx'
import NowSection from '../components/NowSection.jsx'
import AboutSection from '../components/AboutSection.jsx'
import ContactSection from '../components/ContactSection.jsx'
import profile from '../data/profile.js'

function HomePage() {
  return (
    <Box id="top">
      <Header name={profile.name} />
      <Container component="main" maxWidth="md">
        <Hero greeting={profile.greeting} tagline={profile.tagline} />
        <QuickFacts facts={profile.quickFacts} />
        <NowSection items={profile.now} />
        <AboutSection paragraphs={profile.about} skills={profile.skills} />
        <ContactSection name={profile.name} email={profile.email} links={profile.links} />
      </Container>
    </Box>
  )
}

export default HomePage
