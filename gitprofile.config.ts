// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'gabrielamelian', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['benteveo-kiwi/rv-metadata-plugin', 'gabrielamelian/qdbhackthissite', 'LegalCheck/main', 'TopOfTheFlops/server-side', 'TopOfTheFlops/client-side', 'bit-freqs/bitfreqs', ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Windfarm Simulation',
          description:
            'Interactive 3D application created using UnrealEngine and Esri ArcGISOnline as well as Cesium world tiles. We wanted to demonstrate the power of real time technology to integrate and visualize complex data with great detail, and deliver it in under 4 weeks. ',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.youtube.com/watch?v=Ty3vUTGIZZQ',
        },
        {
          title: 'Wellington’s Bloomberg Global Mayors Challenge Winning Project',
          description:
            'Interactive tool to aid the Climate Adaptation team engagement with the citizens of Wellington, using real time game engine technologies. I worked for 2 years building the base model of the city in Unreal Engine, and developing a prototype for the first iteration of the tool.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.thepost.co.nz/a/nz-news/350083403/digital-replica-lays-out-realities-future-sea-level-rise-capital',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Gabriela Roque-Worcel',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'groqueworcel',
    twitter: 'GabitaRoque',
    mastodon: 'gabyrw@mastodon.world',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'GabitaRoque',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'gabriela@roque-worcel.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Unreal Engine',
    'Python',
    'C++',
    'JavaScript',
    'Angular',
    'React.js',
    'Node.js',
    'VueJS',
    'PHP',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Gitlab',
    'Docker',
    'CSS',
    'Linux',
  ],
  experiences: [
    {
      company: 'Aurecon',
      position: 'Senior Visualisation Consultant',
      from: 'Oct 2023',
      to: 'Apr 2024',
      companyLink: 'https://www.aurecongroup.com/expertise/digital-engineering-and-advisory/visualisation',
    },
    {
      company: 'Wellington City Council',
      position: 'Senior Visualisation Consultant',
      from: 'Sep 2021',
      to: 'Oct 2023',
      companyLink: 'https://wellington.govt.nz/your-council/projects/bloomberg-global-mayors-challenge',
    },
  ],
  certifications: [
    {
    },
  ],
  educations: [
    {
      institution: 'Dev Academy',
      degree: 'Full STack Web Development Bootcamp',
      from: '2016',
      to: '2016',
    },
  ],
  publications: [
    {
     },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'GabitaRoque', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'retro',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
