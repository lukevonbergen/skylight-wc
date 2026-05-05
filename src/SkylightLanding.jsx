import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Sparkles,
  CalendarCheck,
  ShieldCheck,
  ChevronUp,
  Droplets,
  Menu,
  X,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className={`text-2xl font-display uppercase tracking-wide transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
          Skylight
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-base font-display uppercase tracking-wider transition-colors hover:text-sky-accent ${
                scrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-sky-accent text-white text-sm font-display uppercase tracking-wider px-5 py-2 rounded-md hover:bg-sky-accent-dark transition-colors"
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-display uppercase tracking-wide text-gray-900 hover:text-sky-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="bg-sky-accent text-white font-display uppercase tracking-wider text-lg px-8 py-3 rounded-md hover:bg-sky-accent-dark transition-colors"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-white/90 text-sm font-medium">Professional Window Cleaning</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="font-display uppercase tracking-wide text-5xl md:text-6xl lg:text-7xl text-white leading-none">
          Reliable Window Cleaning, Done Properly
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-5 text-lg text-white/80 max-w-xl mx-auto">
          Professional window cleaning every 4 or 8 weeks, with a focus on quality and reliability.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-sky-accent text-white font-display uppercase tracking-wider text-lg px-8 py-3 rounded-md hover:bg-sky-accent-dark transition-colors w-full sm:w-auto text-center"
          >
            Get a Quote
          </a>
          <a
            href="#reviews"
            className="border border-white/30 text-white font-display uppercase tracking-wider text-lg px-8 py-3 rounded-md hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
          >
            View Reviews
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

function TrustBar() {
  const items = [
    { icon: Star, text: 'Rated 10/10 by local customers' },
    { icon: ShieldCheck, text: '29+ five-star reviews' },
    { icon: Clock, text: 'Reliable & punctual service' },
  ]

  return (
    <section className="bg-sky-light border-y border-sky-border">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <item.icon size={20} className="text-sky-accent shrink-0" />
              <span className="text-gray-700 font-medium text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      icon: CalendarCheck,
      title: 'Regular Cleaning',
      description: 'Scheduled every 4 or 8 weeks. Consistent, reliable, hassle-free. Your windows stay clean year-round.',
      image: '/images/hero.webp',
    },
    {
      icon: Sparkles,
      title: 'One-Off Cleans',
      description: 'Moving in, selling up, or just need a refresh? One-off deep cleans available across the area.',
      image: '/images/image.webp',
    },
    {
      icon: Droplets,
      title: 'Commercial Cleaning',
      description: 'Offices, shops, and commercial buildings. Reach-and-wash systems for any height.',
      image: '/images/business.webp',
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sky-accent font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display uppercase tracking-wide text-4xl md:text-5xl text-gray-900">
            Services
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-sky-light rounded-lg flex items-center justify-center mb-5">
                  <service.icon size={24} className="text-sky-accent" />
                </div>
                <h3 className="font-display uppercase tracking-wide text-2xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { number: '1', title: 'Request a Quote', description: 'Get in touch and we\'ll give you a straightforward price.' },
    { number: '2', title: 'Book a Time', description: 'Pick a schedule that works for you. We show up when we say we will.' },
    { number: '3', title: 'Windows Cleaned', description: 'Thorough, professional clean every time. No shortcuts.' },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sky-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Simple Process
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display uppercase tracking-wide text-4xl md:text-5xl text-gray-900">
            How It Works
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={fadeUp} className="text-center">
              <div className="w-14 h-14 bg-sky-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5">
                {step.number}
              </div>
              <h3 className="font-display uppercase tracking-wide text-2xl text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    {
      text: 'Arrived on time and worked through the snow to get the job done. Excellent work.',
      location: 'HP11',
      rating: '10/10',
    },
    {
      text: 'Quick to respond and did a brilliant job. Windows have never looked better.',
      location: 'HP13',
      rating: '10/10',
    },
    {
      text: 'Best window cleaning service I\'ve ever experienced. Absolutely faultless.',
      location: 'HP6',
      rating: '10/10',
    },
    {
      text: 'Very pleased. Reasonably priced and always punctual. Wouldn\'t use anyone else.',
      location: 'HP11',
      rating: '10/10',
    },
    {
      text: 'Great communication from start to finish. Fantastic job on all the windows.',
      location: 'HP13',
      rating: '10/10',
    },
    {
      text: 'Professional, punctual, and extremely thorough. Highly recommended.',
      location: 'HP6',
      rating: '10/10',
    },
  ]

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sky-accent font-semibold text-sm uppercase tracking-widest mb-3">
            What Customers Say
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display uppercase tracking-wide text-4xl md:text-5xl text-gray-900">
            Trusted Locally
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-gray-500 text-lg">
            29+ five-star reviews from customers across High Wycombe and the Chilterns.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border border-gray-100 rounded-lg p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-900">{review.rating}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} />
                <span>{review.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function BeforeAfterToggle({ before, after, label }) {
  const [showBefore, setShowBefore] = useState(false)

  return (
    <div className="space-y-3">
      <div
        className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden cursor-pointer select-none"
        onClick={() => setShowBefore(!showBefore)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={showBefore ? 'before' : 'after'}
            src={showBefore ? before : after}
            alt={`${label} ${showBefore ? 'before' : 'after'} cleaning`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            draggable={false}
          />
        </AnimatePresence>

        {/* Label badge */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-display uppercase tracking-wider px-3 py-1 rounded">
          {showBefore ? 'Before' : 'After'}
        </div>

        {/* Tap hint */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white/70 text-xs px-3 py-1 rounded">
          Tap to see {showBefore ? 'after' : 'before'}
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm font-medium">{label}</p>
    </div>
  )
}

function Gallery() {
  const comparisons = [
    {
      before: '/images/new/doors-dirty.jpeg',
      after: '/images/new/doors-clean.jpeg',
      label: 'Door & window glass cleaning',
    },
    {
      before: '/images/new/guttering-before.jpeg',
      after: '/images/new/guttering-after.jpeg',
      label: 'Gutter clearing',
    },
  ]

  const galleryImages = [
    { src: '/images/new/clean-house-exterior.jpeg', alt: 'Clean house exterior after full window clean' },
    { src: '/images/new/commercial-window-cleaning.jpeg', alt: 'Commercial window cleaning with reach-and-wash system' },
    { src: '/images/new/commercial-window-cleaning-1.jpeg', alt: 'Commercial building window cleaning' },
  ]

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sky-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display uppercase tracking-wide text-4xl md:text-5xl text-gray-900">
            Gallery
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-gray-500 text-lg">
            Tap the before & after shots to see the difference.
          </motion.p>
        </motion.div>

        {/* Before / After sliders */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {comparisons.map((comp) => (
            <motion.div key={comp.label} variants={fadeUp}>
              <BeforeAfterToggle
                before={comp.before}
                after={comp.after}
                label={comp.label}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Standalone gallery images */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.src}
              variants={fadeUp}
              className="rounded-lg overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="rounded-lg overflow-hidden">
            <img
              src="/images/hero-option02.webp"
              alt="Tyler cleaning windows"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div variants={stagger}>
            <motion.p variants={fadeUp} className="text-sky-accent font-semibold text-sm uppercase tracking-widest mb-3">
              About Skylight
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display uppercase tracking-wide text-4xl md:text-5xl text-gray-900 mb-6">
              Local. Reliable. Consistent.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed mb-6">
              Skylight Window Cleaning is run by Tyler, serving homes and businesses across High Wycombe
              and the surrounding Chilterns area. The focus is simple: turn up on time, do a thorough job,
              and build long-term relationships with customers who value reliability.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
              No contracts, no hard sell. Just clean windows, every time.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="font-display uppercase tracking-wide text-4xl md:text-5xl text-white mb-5">
            Get Your Windows Cleaned the Right Way
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-8">
            Request a free, no-obligation quote. We cover HP11, HP13, HP6 and surrounding areas.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+447900208428"
              className="bg-sky-accent text-white font-display uppercase tracking-wider text-lg px-8 py-3 rounded-md hover:bg-sky-accent-dark transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Phone size={18} />
              Request a Quote
            </a>
            <a
              href="mailto:tyler@skylightwc.com"
              className="border border-gray-600 text-white font-display uppercase tracking-wider text-lg px-8 py-3 rounded-md hover:bg-white/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Mail size={18} />
              Email Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-display uppercase tracking-wide text-2xl">Skylight Window Cleaning</p>
            <p className="text-gray-500 text-sm mt-1">Professional window cleaning across High Wycombe & the Chilterns</p>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin size={14} />
            <span>Service areas: HP11, HP13, HP6</span>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Skylight Window Cleaning. All rights reserved.
          </p>
          <a
            href="https://trypeek.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-gray-600 text-sm hover:text-gray-400 transition-colors"
          >
            Analytics by Peek
          </a>
        </div>
      </div>
    </footer>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 bg-sky-accent text-white w-10 h-10 rounded-md flex items-center justify-center shadow-lg hover:bg-sky-accent-dark transition-colors"
      aria-label="Back to top"
    >
      <ChevronUp size={20} />
    </button>
  )
}

export default function SkylightLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Reviews />
        <Gallery />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
