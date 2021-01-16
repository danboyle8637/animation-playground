import { gsap, Power4 } from 'gsap'

import { Element } from '../../../../../types'

export const setTestimonialElements = (el: Element, isVisible: boolean) => {
  if (isVisible) {
    gsap.set(el, { x: 0, autoAlpha: 1 })
  } else {
    gsap.set(el, { x: -20, autoAlpha: 0 })
  }
}

export const rotateArrow = (el: Element, shouldRotate: boolean) => {
  if (shouldRotate) {
    gsap.to(el, { duration: 0.4, rotate: 90, ease: Power4.easeInOut })
  } else {
    gsap.to(el, { duration: 0.4, rotate: 0, ease: Power4.easeInOut })
  }
}

export const fadeInXHorizontal = (el: Element) => {
  gsap.fromTo(el, {
    x: 20,
    autoAlpha: 0,
    ease: Power4.easeInOut,
  }, {
    duration: 1,
    x: 0,
    autoAlpha: 1,
    ease: Power4.easeInOut,
  })
}

export const fadeOutXHorizontal = (el: Element) => {
  gsap.fromTo(el, {
    x: 0,
    autoAlpha: 1,
    ease: Power4.easeInOut,
  }, {
    x: 20,
    autoAlpha: 0,
    ease: Power4.easeInOut,
  })
}