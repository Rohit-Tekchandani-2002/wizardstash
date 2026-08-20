import images from './images';

export const tools = [
  {
    id: 1,
    iconImage: images.imageIcon,
    slug: 'image-generator',
    name: 'Image Generator',
    category: 'Content Generator',
    description: 'Create and edit image content with ease.',
    tags: ['image', 'editing', 'content'],
    difficulty: 'Beginner',
    usage: 'Cards, navbars, form rows, media blocks',
    accent: 'indigo',
    features: ['Justify and align presets', 'Gap patterns', 'Responsive behavior'],
  },
  {
    id: 2,
    iconImage: images.videoIcon,
    slug: 'video-generator',
    name: 'Video Generator',
    category: 'Content Generator',
    description: 'Create and edit video content with ease.',
    tags: ['video', 'editing', 'content'],
    difficulty: 'Beginner',
    usage: 'Cards, navbars, form rows, media blocks',
    accent: 'cyan',
    features: ['Justify and align presets', 'Gap patterns', 'Responsive behavior'],
  },
  {
    id: 3,
    iconImage: images.musicIcon,
    slug: 'music-generator',
    name: 'Music Generator',
    category: 'Content Generator',
    description: 'Create and edit music content with ease.',
    tags: ['music', 'editing', 'content'],
    difficulty: 'Beginner',
    usage: 'Cards, navbars, form rows, media blocks',
    accent: 'green',
    features: ['Justify and align presets', 'Gap patterns', 'Responsive behavior'],
  },
  {
    id: 4,
    iconImage: images.audioIcon,
    slug: 'audio-generator',
    name: 'Audio Generator',
    category: 'Content Generator',
    description: 'Create and edit audio content with ease.',
    tags: ['audio', 'editing', 'content'],
    difficulty: 'Beginner',
    usage: 'Dashboard layouts, galleries, content grids',
    accent: 'purple',
    features: ['Track sizing presets', 'Grid flow controls', 'Responsive grid rules'],
  },
];

export const categories = [
  {name: 'Layout & Position', count: 4},
  {name: 'Flexbox & Grid', count: 2},
  {name: 'Sizing & Spacing', count: 2},
];

export default tools;
