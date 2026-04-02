<script setup>
import HeroSection from './components/HeroSection.vue'
import DndAnimation from './components/DndAnimation.vue'
import LoadBubbleAnimation from './components/LoadBubbleAnimation.vue'
import ScrollDocAnimation from './components/ScrollDocAnimation.vue'
import SidebarAnimation from './components/SidebarAnimation.vue'
import ResizeAnimation from './components/ResizeAnimation.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import { useScrollReveal } from './composables/useScrollReveal.js'

useScrollReveal()

const sections = [
  // --- AI Copilot ---
  {
    type: 'cards',
    layout: 'full',
    cards: [
      { src: '/images/projects/ai-copilot-hero-1.png' },
    ],
  },
  {
    type: 'text',
    title: 'AI Copilot prototype',
    year: '2025',
    paragraphs: [
      'As we got a stable AI Agent, it showed promise. It also taught us that automation alone won\'t cut it and that making use of our position would allow us to bridge the gap between human and AI agents through a redesigned Inbox and AI Copilot, teams can now work smarter, focusing on meaningful conversations while routine tasks are seamlessly managed in the background.',
      'Introducing AI in the Inbox directly made us look at everything differently, old ways of working were redundant.',
    ],
  },
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
    paragraphs: [
      'The copilot lives as an always-available (or easily opened) panel within the inbox, offering a chat-like experience for asking questions, receiving suggestions, and executing actions. To avoid over-reliance on text input, the interface combines conversational AI with familiar UI elements, enabling users to act with just a click or two.',
      'The first iteration focuses on a single ticket context, using the conversation and sidebar information to deliver relevant, actionable support without overwhelming the user and only focussing on main use-cases.',
    ],
  },

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
    year: '2024 – Current',
    paragraphs: [
      'As AI brought a lot of new challenges and opportunities in the past couple of years, we decided we couldn\'t wait any longer and started to create our own AI Chatbot, in-house, as a POC.',
      'Our previous automations have now been replace by our AI Agent as it went from 0 to 1 million messages sent in the past year, with some customers being able to automate 65% of their conversations, allowing their customer support team to focus on more meaningful interactions.',
      'Researching the needs was tricky as the field was still quite new, patterns didn\'t exist and customers had different levels of trust in AI in general. Staying close to our most interested customers was vital to staying on top of what was necessary to build now and what is important to build in the future.',
    ],
  },
  {
    type: 'container',
    containerW: 1416,
    containerH: 560,
    contents: [
      { src: '/images/projects/agents-detail-r1-content.png', w: 788, h: 974, x: 327, y: -106 },
    ],
  },
  {
    type: 'cards',
    layout: 'grid-2',
    cards: [
      { src: '/images/projects/agents-detail-r2-1.png' },
      { src: '/images/projects/agents-detail-r2-2.png' },
    ],
  },
  {
    type: 'text',
    paragraphs: [
      'After the core was set, we found that it was still missing a lot of important pieces to be easy to use by our customers. Linking proper resources to base answers on, has always been extremely impactful, whether it\'s the customer\'s website, their Notion page, a PDF they still had from their team member onboarding or their Trengo Help Centre.',
      'Being able to get it to do exactly what you want was another, both knowing how to set it up and what it could even do, but also extremely detailed setup procedures, enhanced by our own AI to fill the gap between human knowledge/understanding and the capabilities of the tech as it gets increasingly smarter.',
    ],
  },

  // --- Integrations ---
  {
    type: 'cards',
    layout: 'full',
    cards: [
      { src: '/images/projects/integrations-hero-1.png' },
    ],
  },
  {
    type: 'text',
    paragraphs: [
      'MCP (Model Context Protocol) is becoming an important building block for how AI agents interact with tools, data, and environments. A vital piece to make our AI Agents work without the need for human agents to act on customers\' requests through the standard Integrations.',
    ],
  },

  // --- Reporting ---
  {
    type: 'cards',
    layout: 'grid-2',
    cards: [
      { src: '/images/projects/reporting-hero-1.png' },
      { src: '/images/projects/reporting-hero-2.png' },
    ],
  },
  {
    type: 'text',
    paragraphs: [
      'As teams scale their customer communication, understanding performance becomes increasingly important. Trengo\'s reporting translates complex inbox data into accessible, actionable insights.',
      'Users can track key metrics such as response times, conversation volume, and team performance across all channels. Visual dashboards and filters make it easy to spot trends, identify bottlenecks, and continuously improve the customer experience.',
      'With teh shift to AI Agents, the traditional reporting became the bottleneck itself and UX suffered. To scale the reporting tool properly we had to look into improving the terminology, flexibility of reports and the different ways our customers would look at their data and interact with it.',
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
    year: '2022 – Current',
    paragraphs: [
      'At Trengo, a UI kit already existed. While it never got a lot of attention, it was a great setup to use for creating a broader, more organized Design System. The team was quite a bit smaller but with a bigger designer to developer ratio (as we hired three other designers next to me in the same quarter) allowing me to coach the process I applied at Bynder.',
      'Trengo went through quite a bit of revisioning at the beginning, while the UI kit got transformed into a proper Design System. A Systems Engineer got hired as larger, more complex setups were needed to take the next step.',
      'We worked on improving the Design System as we handled other projects of our respective teams, allowing us to stay focussed on the most valuable elements of the system without burning resources unnecessarily.',
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
    year: '2018 – 2022',
    paragraphs: [
      'At Bynder, the Design System is a broad set of components and guidelines that went from helping a handful of designers guide their way through new challenges, a new strategy and focus on the old legacy interface – to being a vital part of scaling throughout its many different parts of the platform, growing teams in multiple countries and timezones.',
      'My involvement was working on many components in the beginning and leading the team of Product Designers and Frontend Engineers, making sure that the right components were built in the proper way, in the right time, with only limited capacity of our Design System \'Guild\' of Design System ambassadors that came from different product teams/squads.',
      'Working in a Federated team structure gave us the flexibility and alignment we needed in our case, collaborating to the capacity of the team and injecting deep knowledge of the DS into each team.',
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

    <template v-for="(section, i) in sections" :key="i">
      <!-- Cards section -->
      <section v-if="section.type === 'cards'" class="px-3 max-md:px-2" :style="i > 0 && sections[i - 1]?.type !== 'text' ? 'margin-top: 16px' : ''">
        <div
          class="max-w-[1416px] mx-auto"
          :class="{
            'grid grid-cols-1': section.layout === 'full',
            'grid grid-cols-2 gap-4 max-md:grid-cols-1': section.layout === 'grid-2',
            'grid grid-cols-3 gap-4 max-md:grid-cols-1': section.layout === 'grid-3',
          }"
        >
          <div
            v-for="(card, ci) in section.cards"
            :key="ci"
            class="rounded-[20px] overflow-hidden relative bg-[#f0f0f3]"
            :style="card.bg ? { backgroundColor: card.bg } : undefined"
          >
            <DndAnimation v-if="card.component === 'dnd'" />
            <SidebarAnimation v-else-if="card.component === 'sidebar'" />
            <ScrollDocAnimation v-else-if="card.component === 'scroll-doc'" />
            <LoadBubbleAnimation v-else-if="card.component === 'load-bubble'" />
            <template v-else>
              <img
                :src="card.src"
                alt=""
                class="w-full h-auto block"
                loading="lazy"
              />
              <!-- Resize animation overlay -->
              <div
                v-if="card.overlay === 'resize'"
                class="absolute"
                style="left: 17.80%; top: 3.93%; width: 30.51%; aspect-ratio: 432 / 205"
              >
                <ResizeAnimation />
              </div>
            </template>
          </div>
        </div>
      </section>

      <!-- Container + positioned content section -->
      <section v-else-if="section.type === 'container'" class="px-3 max-md:px-2" :style="i > 0 && sections[i - 1]?.type !== 'text' ? 'margin-top: 16px' : ''">
        <div
          class="reveal max-w-[1416px] mx-auto relative rounded-[20px] overflow-hidden bg-[#f0f0f3]"
          :style="{
            aspectRatio: section.containerW + ' / ' + section.containerH,
          }"
        >
          <img
            v-for="(content, ci) in section.contents"
            :key="ci"
            :src="content.src"
            alt=""
            class="absolute left-1/2 bottom-0 -translate-x-1/2 h-full w-auto"
            loading="lazy"
          />
        </div>
      </section>

      <!-- Text section -->
      <section v-else class="reveal flex justify-center px-8 py-16 max-md:px-5 max-md:py-10">
        <div class="max-w-[904px] w-full">
          <div v-if="section.title" class="flex items-baseline justify-between mb-6 gap-4">
            <h2 class="text-xl font-semibold text-text-heading">
              {{ section.title }}
            </h2>
            <span v-if="section.year" class="text-base text-text whitespace-nowrap">
              {{ section.year }}
            </span>
          </div>
          <div class="flex flex-col gap-6">
            <p
              v-for="(paragraph, pi) in section.paragraphs"
              :key="pi"
              class="text-base text-text leading-7"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </section>
    </template>

    <TestimonialSection :testimonials="testimonials" />
    <div class="h-3" />
  </main>
</template>
