// Create a photo gallery card, similar to what Facebook uses in their feed. The “trick” here is not just to display the grid, but make the code “smart” enough to display the photos correctly, regardless of whether there’s 1 photo or 21.
// https://www.figma.com/design/uhCMt5lOsWhLQIHYmZxguL/Advent-of-CSS---Challenge-1

import './style.css'

const IMAGES = [
  // photos/closeup-photo-of-green-christmas-tree
  'https://images.unsplash.com/photo-1482003297000-b7663a1673f1',
  // variety-of-sliced-fruits-cookies-and-chocolates-on-gray-steel-tray
  'https://images.unsplash.com/photo-1481930916222-5ec4696fc0f2',
  // green-and-brown-christmas-wreath
  'https://images.unsplash.com/photo-1480930700499-dc44aa7cb2cf',
  // red-and-black-metal-lantern-lighted
  'https://images.unsplash.com/photo-1483373018724-770a096812ff',
  // stacked-cookies-on-grey-surface
  'https://images.unsplash.com/photo-1513321409245-5c6a71bd5242',
  // red-coffee-latte-on-white-ceramic-mug
  'https://images.unsplash.com/photo-1461010083959-8a5727311252',
]

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div><img src="${IMAGES[0]}" /></div>
    <div><img src="${IMAGES[1]}" /></div>
    <div><img src="${IMAGES[2]}" /></div>
    <div><img src="${IMAGES[3]}" /></div>
    <div><img src="${IMAGES[4]}" /></div>
    <div><img src="${IMAGES[5]}" /></div>
  </div>
`
