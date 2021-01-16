import { Transition } from "react-transition-group"
import { gsap, Power3 } from "gsap"

interface BodyContentProps {
  isOpen: boolean
}

export const BasicMenuTransition: React.FC<BodyContentProps> = ({
  isOpen,
  children,
}) => {
  const menuEnter = (node: HTMLElement) => {
    if (isOpen) {
      gsap.fromTo(
        node,
        {
          duration: 0.4,
          x: "100%",
        },
        {
          duration: 0.4,
          x: 0,
          ease: Power3.easeOut,
        }
      )
    }
  }

  const menuExit = (node: HTMLElement) => {
    if (!isOpen) {
      gsap.to(node, {
        duration: 0.4,
        x: "108%",
        ease: Power3.easeOut,
      })
    }
  }

  return (
    <Transition
      in={isOpen}
      timeout={1000}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={(node: HTMLElement) => menuEnter(node)}
      onExit={(node: HTMLElement) => menuExit(node)}
    >
      {children}
    </Transition>
  )
}
