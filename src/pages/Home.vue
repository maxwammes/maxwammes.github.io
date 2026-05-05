<script setup>
import HeroSection from '../components/HeroSection.vue'
import ProjectSections from '../components/ProjectSections.vue'
import TestimonialSection from '../components/TestimonialSection.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()

const sections = [
  // --- AI Agents ---
  {
    type: 'cards',
    layout: 'full',
    cards: [
      { src: '/images/projects/ai-agents-hero-1.png' },
    ],
  },
  {
    type: 'cards',
    layout: 'grid-2',
    cards: [
      { src: '/images/projects/agents-hero-r2-1.png' },
      { src: '/images/projects/agents-hero-r2-2.png' },
    ],
  },
  {
    type: 'text',
    title: 'AI Agents',
    year: '2024  –  Current',
    slug: 'ai-agents',
    paragraphs: [
      'As AI brought a lot of new challenges and opportunities in the past couple of years, we decided we couldn\'t wait any longer and started to create our own AI Chatbot, in-house, as a POC.',
      'Our previous automations have now been replaced by our AI Agent as it went from 0 to 1 million messages sent in the past year, with some customers being able to automate 65% of their conversations, allowing their customer support team to focus on more meaningful interactions.',
      'Researching the needs was tricky as the field was still quite new, patterns didn\'t exist and customers had different levels of trust in AI in general. Staying close to our most interested customers was vital to staying on top of what was necessary to build now and what is important to build in the future.',
    ],
  },

  // --- AI Copilot ---
  {
    type: 'cards',
    layout: 'grid-3',
    cards: [
      { component: 'sidebar' },
      { component: 'load-bubble' },
      { component: 'scroll-doc' },
    ],
  },
  {
    type: 'text',
    title: 'AI Copilot',
    year: '2025',
    slug: 'ai-copilot',
    paragraphs: [
      'As we got a stable AI Agent, it showed promise. It also taught us that automation alone won\'t cut it and that making use of our position would allow us to bridge the gap between human and AI agents through a redesigned Inbox and AI Copilot, teams can now work smarter, focusing on meaningful conversations while routine tasks are seamlessly managed in the background.',
      'Introducing AI in the Inbox directly made us look at everything differently, old ways of working were redundant.',
    ],
  },

  // --- 2FA ---
  {
    type: 'cards',
    layout: 'full',
    cards: [
      { src: '/images/projects/2fa-hero-1.png' },
    ],
  },
  {
    type: 'text',
    title: '(Mandatory) 2FA and general security',
    year: '2023',
    paragraphs: [
      'As protecting our customers\' data became a top priority, we implemented mandatory two-factor authentication (2FA). The goal was to make accounts more secure without creating friction.',
      'Guiding users through their 2FA setup with clear instructions and feedback. By making 2FA mandatory, we safeguard every account while maintaining a smooth, trust-building experience.',
    ],
  },
  {
    type: 'cards',
    layout: 'full',
    cards: [
      { src: '/images/projects/2fa-detail-1.png' },
    ],
  },
  {
    type: 'cards',
    layout: 'grid-2',
    cards: [
      { src: '/images/projects/2fa-detail-r2-1.png' },
      { src: '/images/projects/2fa-detail-r2-2.png' },
    ],
  },

  // --- Omnichannel Inbox ---
  {
    type: 'text',
    title: 'Omnichannel Inbox',
    year: '2022',
    paragraphs: [
      'Trengo\'s main value is its omnichannel inbox, centralising customers\' communication including email, WhatsApp, live chat, SMS and more, into a single, easy-to-use shared inbox. By bringing every channel together, teams never miss conversations or opportunities, respond faster, and deliver seamless, consistent experiences across touchpoints.',
      'With built-in AI, automation, customer profiles and collaboration tools, the omnichannel inbox helps teams manage high volumes of conversations efficiently while maintaining context and personalised service.',
    ],
  },
  {
    type: 'cards',
    layout: 'grid-2',
    cards: [
      { src: '/images/projects/omnichannel-hero-1.png' },
      { src: '/images/projects/omnichannel-hero-2.png' },
    ],
  },
  {
    type: 'cards',
    layout: 'full',
    cards: [
      { src: '/images/projects/omni-hero-r2-1.png' },
    ],
  },
  {
    type: 'text',
    paragraphs: [
      'The main channel that our customers use is WhatsApp, and with its many features and functionalities it\'s also the most interesting one. With templated messages, dynamic inputs and much more.',
    ],
  },
  {
    type: 'cards',
    layout: 'full',
    cards: [
      { src: '/images/projects/omnichannel-detail-1.png' },
    ],
  },
  {
    type: 'cards',
    layout: 'grid-2',
    cards: [
      { src: '/images/projects/omni-detail-r2-1.png' },
      { src: '/images/projects/omni-detail-r2-2.png' },
    ],
  },

  // --- Design Systems Trengo ---
  {
    type: 'text',
    title: 'Design Systems at Trengo',
    year: '2022  –  Current',
    paragraphs: [
      'At Trengo, a UI kit already existed. While it never got a lot of attention, it was a great setup to use for creating a broader, more organized Design System. The team was quite a bit smaller but with a bigger designer to developer ratio (as we hired three other designers next to me in the same quarter) allowing me to coach the process I applied at Bynder.',
      'Trengo went through quite a bit of revisioning at the beginning, while the UI kit got transformed into a proper Design System. A Systems Engineer got hired as larger, more complex setups were needed to take the next step.',
      'We worked on improving the Design System as we handled other projects of our respective teams, allowing us to stay focused on the most valuable elements of the system without burning resources unnecessarily.',
    ],
  },

  // --- Design Systems Bynder ---
  {
    type: 'cards',
    layout: 'full',
    cards: [
      { src: '/images/projects/bynder-hero-1.png', overlay: 'resize' },
    ],
  },
  {
    type: 'cards',
    layout: 'grid-2',
    cards: [
      { src: '/images/projects/bynder-r2-1.png' },
      { component: 'dnd' },
    ],
  },
  {
    type: 'text',
    title: 'Design Systems at Bynder',
    year: '2018  –  2022',
    slug: 'design-systems-bynder',
    paragraphs: [
      'At Bynder, the Design System is a broad set of components and guidelines that went from helping a handful of designers guide their way through new challenges, a new strategy and focus on the old legacy interface – to being a vital part of scaling throughout its many different parts of the platform, growing teams in multiple countries and timezones.',
      'My involvement was working on many components in the beginning and leading the team of Product Designers and Frontend Engineers, making sure that the right components were built in the proper way, in the right time, with only limited capacity of our Design System \'Guild\' of Design System ambassadors that came from different product teams/squads.',
    ],
  },

  // --- Meauve ---
  {
    type: 'cards',
    layout: 'grid-2',
    cards: [
      { src: '/images/projects/meauve-hero-1.png' },
      { src: '/images/projects/meauve-hero-2.png' },
    ],
  },
  {
    type: 'cards',
    layout: 'full',
    cards: [
      { src: '/images/projects/meauve-r2-1.png' },
    ],
  },
  {
    type: 'text',
    title: 'Meauve – HIIT app side project',
    year: '2017',
    paragraphs: [
      'Meauve\'s iOS app was designed and developed around a simple belief: interval timers shouldn\'t distract you from your workout. During high-intensity interval training, checking your phone breaks focus and rhythm.',
      'Meauve allows users to easily set the number of sets, active intervals, and rest periods. Clear beeps and vibrations signal when to switch exercises or rest, while a single progress bar shows how far you are in the workout. Minimal play, pause, and reset controls ensure the app supports the workout without interrupting it.',
    ],
  },

  // --- Assign ---
  {
    type: 'cards',
    layout: 'grid-2',
    cards: [
      { src: '/images/projects/assign-hero-1.png' },
      { src: '/images/projects/assign-hero-2.png', bg: '#ff7f28' },
    ],
  },
  {
    type: 'cards',
    layout: 'full',
    cards: [
      { src: '/images/projects/assign-r2-1.png' },
    ],
  },
  {
    type: 'text',
    title: 'Assign side project',
    year: '2016',
    paragraphs: [
      'This project started from a personal frustration: students from different creative programs worked on similar problems but rarely connected. Through research, I discovered that finding and approaching students from other disciplines was the main barrier.',
      'I designed and developed an app where students can post skill-tagged help requests. Peers with matching expertise automatically see these requests and can respond. Profiles and gamified skill badges create trust, reduce social friction, and motivate students to share knowledge across disciplines.',
    ],
  },
]

const testimonials = [
  {
    name: 'Rowan Milwid',
    role: 'Head of Product – Trengo',
    photo: '/images/rowan.png',
    quote: 'Max is both a talented designer and an invaluable member of the Product team. His contribution goes far beyond that of the design work he does for his delivery team, including mentoring and coaching others, and supporting PMs and broader Product strategy/processes/initiatives.',
  },
  {
    name: 'Chris Pattison',
    role: 'UX Manager – Trengo & Bynder',
    photo: '/images/chris.png',
    quote: 'Max has continued to do great work across the business, supporting his core teams as well any many others across product and engineering.',
  },
  {
    name: 'Sander van Mourik',
    role: 'UX Manager – Trengo',
    photo: '/images/sander.png',
    quote: 'I really value that Max is calm and collected. He is able to understand situations well, whether they are design, stakeholder or organisation related and he always helps me figure out the right strategy.\n\nAs a designer he takes on a very broad set of tasks. If it needs fixing, it needs fixing. I really value that mindset and it sets and example for others in our team.',
  },
  {
    name: 'Jeff van Steijn',
    role: 'Senior Product Designer – Trengo',
    photo: '/images/jeff.png',
    quote: 'Max knows a lot about design and is super fast at solving complex UX tasks, while keeping the bigger picture in mind and delivering high quality designs.\n\nWhen working on projects, Max shows a good understanding of the platform and also has some technical knowledge, which helps him spot difficulties early on.',
  },
]
</script>

<template>
  <main class="min-h-screen bg-bg font-sans">
    <HeroSection />
    <ProjectSections :sections="sections" />
    <TestimonialSection :testimonials="testimonials" />
    <div class="h-3" />
  </main>
</template>
