// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yoyo',
  tagline: 'keep on spinning!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.yoyobao.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'chillinPanda',
  projectName: 'yoyobao.de',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chillinPanda/yoyobao.de/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chillinPanda/yoyobao.de/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'yoyobao.de',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
/*
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/chillinPanda/yoyobao.de',
            label: 'GitHub',
            position: 'right',
          },
 */
        ],
      },
      footer: {
        style: 'dark',
        links: [
/**
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
 **/
          {
            title: 'BurninBerlin',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/BurninBerlin',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/burninberlin',
              },
              {
                label: 'BurninBerlin Open',
                href: 'https://www.facebook.com/BurninBerlinOpen',
              },
            ],
          },
          {
            title: 'More',
            items: [
/**
              {
                label: 'Blog',
                to: '/blog',
              },
**/
              {
                label: 'German Yoyo Association',
                href: 'https://gyya.de',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/chillinPanda/yoyobao.de',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bao`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
