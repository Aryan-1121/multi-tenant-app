// usign map of objects to store subdomain specific data which is going to be used to render our dynamic component

export const subDomainData = new Map([
  ['subdomain1', {
    bgColour: 'bg-violet-500',
    heading: 'SUB-DOMAIN 1 ',
    content: `Life is like a storybook. Every day is a new page filled with adventures and lessons.
    Good times follow difficult challenges, just as a rainbow appears after a rainstorm.
    Life is like a puzzle. It can be confusing at times, but everything eventually falls into place.`,
    styles: ' font-bold text-xl mb-2 text-center p-2 text-white ',
    image: '../subDomain1.png',
  }],
  ['subdomain2', {
    bgColour: 'bg-green-500',
    heading: 'SUB-DOMAIN 2 ',
    content: `Friendship is like sunshine on a cloudy day; it brightens our lives and makes us happy.
    Kindness is like a lovely flower in the garden of life, blooming in all seasons.
    Life’s a journey. The best paths are discovered when we venture off the main road.`,
    styles: 'italic font-bold text-xl mb-2 text-center p-2 text-slate-700 ',
    image: '../subDomain2.png',
  }],
  ['subdomain3', {
    bgColour: 'bg-pink-500',
    heading: 'SUB-DOMAIN 3 ',
    content: `Dreams are like stars guiding us through the darkness, promising a brighter tomorrow.
    Mistakes serve as stepping stones to success, allowing us to learn and grow.
    Every day provides an opportunity to dance to the music of life and enjoy its rhythm.`,

    styles: 'italic hover:not-italic font-bold text-xl mb-2 text-center p-2 text-white ',
    image: '../subDomain3.png',
  }]
])

