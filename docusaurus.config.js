import {themes as prismThemes} from 'prism-react-renderer';
 
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Softwerx',
  tagline: 'Documentation & Product Guides',
  favicon: 'img/favicon.ico',
 
  future: {
    v4: true,
  },
 
  url: 'https://SoftwerxDevOps.github.io',
  baseUrl: '/my-docs/',
 
  organizationName: 'SoftwerxDevOps',
  projectName: 'my-docs',
 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
 
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/SoftwerxDevOps/my-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
 
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/softwerx-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Softwerx',
        logo: {
          alt: 'Softwerx Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
        ],
        style: 'primary',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Softwerx Website',
                href: 'https://www.softwerx.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Softwerx. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
 
export default config;
