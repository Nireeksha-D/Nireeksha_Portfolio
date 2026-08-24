import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Nireeksha D | Junior Software Developer',
      },
      {
        name: 'description',
        content: 'Portfolio of Nireeksha D — Junior Software Developer with experience in Angular, Java, Python, AI/ML and full-stack development.',
      },
      {
        property: 'og:title',
        content: 'Nireeksha D | Junior Software Developer',
      },
      {
        property: 'og:description',
        content: 'Portfolio of Nireeksha D — Junior Software Developer with experience in Angular, Java, Python, AI/ML and full-stack development.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'theme-color',
        content: '#080b0f',
      },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
