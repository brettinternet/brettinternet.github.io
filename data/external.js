const fetch = require('@11ty/eleventy-cache-assets')

const mapSlides = ({ title, date, description, url, tags }) => ({
  title,
  date,
  description,
  url,
  tags: tags || [],
  categories: [],
})

const getSlides = async () => {
  try {
    const slides = await fetch('https://brettinternet.com/slides/feed.json', {
      duration: '1d',
      type: 'json',
    })
    return slides
      .filter(({ title }) => !title.toLowerCase().includes('demo'))
      .map(mapSlides)
  } catch (err) {
    console.error('Unable to fetch slide feed', err)
    return []
  }
}

const projects = [
  {
    title: 'react-cooked-bread',
    date: '2020-07-18T00:00:00-00:00',
    description: 'Customizable & extendable toasts for React',
    url: 'https://brettinternet.com/react-cooked-bread/',
    tags: ['react', 'typescript'],
    categories: ['drawer'],
    image: {
      filename: 'react-cooked-bread.gif',
      alt: 'toast notifications',
    },
  },
  {
    title: 'Slides',
    date: '2019-11-16T00:00:00-00:00',
    description: 'Show-and-tell',
    url: 'https://github.com/brettinternet/slides',
    tags: [],
    categories: [],
  },
  {
    title: 'Bookmarks',
    date: '2019-09-25T00:00:00-00:00',
    description: 'My actively growing list of bookmarks',
    url: 'https://bookmarks.brettgardiner.net',
    tags: ['self-hosted'],
    categories: [],
    image: {
      filename: 'espial.png',
      alt: 'bookmark tool',
    },
  },
  {
    title: 'My homelab',
    date: '2019-07-11T00:00:00-00:00',
    description: 'Long walks in the server room',
    url: 'https://github.com/brettinternet/homelab',
    tags: ['homelab', 'self-hosted', 'linux'],
    categories: ['drawer'],
    image: {
      filename: 'homelab.gif',
      alt: 'commandline execution',
    },
  },
  {
    title: 'Linux dotfiles',
    date: '2017-02-25T00:00:00-00:00',
    description: "There's no place like $HOME",
    url: 'https://github.com/brettinternet/linux',
    tags: ['linux'],
    categories: [],
  },
  {
    title: 'Public notes',
    date: '2017-02-07T00:00:00-00:00',
    description: 'My library of ideas, references, and napkin scribbles',
    url: 'https://github.com/brettinternet/public-notes',
    tags: [],
    categories: [],
  },
]

module.exports = async () => {
  const slides = await getSlides()
  return {
    slides,
    projects,
  }
}
