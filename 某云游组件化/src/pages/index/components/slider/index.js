import './slider.css'
import './btn.css'

import Slider from './module'

const slider = new Slider(document.querySelector('.slider'), {
  initialIndex: 0,
  animation: true,
  speed: 300,
  autoplay: 2000
})

const bannerEl = document.getElementById('banner')
const leftbtnEl = document.getElementById('leftbtn')
const rightbtnEl = document.getElementById('rightbtn')

leftbtnEl.addEventListener('click', () => {
  slider.prev()
}, false)
rightbtnEl.addEventListener('click', () => {
  slider.next()
}, false)

bannerEl.addEventListener('mouseenter', () => {
  slider.pause()
}, false)
bannerEl.addEventListener('mouseleave', () => {
  slider.autoplay()
})