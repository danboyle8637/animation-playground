import { Transition } from "react-transition-group"
import { gsap, Power3 } from "gsap"

interface BodyContentProps {
  isOpen: boolean
}

export const HeadlineAnimation: React.FC<BodyContentProps> = ({
  isOpen,
  children,
}) => {
  return (
    <Transition
      in={isOpen}
      mountOnEnter={true}
      unmountOnExit={true}
      addEndListener={(node, done) => {
        if (isOpen) {
          gsap.to(node, {
            duration: 0.4,
            x: 20,
            ease: Power3.easeInOut,
            autoAlpha: 0,
            delay: 0.4,
            onComplete: done,
          })
        } else {
          gsap.to(node, {
            duration: 0.4,
            x: 0,
            ease: Power3.easeInOut,
            autoAlpha: 1,
            delay: 0.4,
            onComplete: done,
          })
        }
      }}
    >
      {children}
    </Transition>
  )
}
