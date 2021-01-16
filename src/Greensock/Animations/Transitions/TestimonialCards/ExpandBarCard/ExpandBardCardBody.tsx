import { Transition } from "react-transition-group"
import { gsap, Power3 } from "gsap"

interface BodyContentProps {
  isOpen: boolean
  element: number
}

export const BodyContentAnimation: React.FC<BodyContentProps> = ({
  isOpen,
  element,
  children,
}) => {
  return (
    <Transition
      in={isOpen}
      mountOnEnter={true}
      unmountOnExit={true}
      addEndListener={(node, done) => {
        if (isOpen) {
          gsap.fromTo(
            node,
            {
              height: 0,
              autoAlpha: 0,
            },
            {
              duration: 0.4,
              height: element,
              ease: Power3.easeInOut,
              autoAlpha: 1,
              onComplete: done,
            }
          )
        } else {
          gsap.to(node, {
            duration: 0.4,
            height: 0,
            ease: Power3.easeInOut,
            autoAlpha: 0,
            onComplete: done,
          })
        }
      }}
    >
      {children}
    </Transition>
  )
}
