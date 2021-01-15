export interface BaseSVGProps {
  width?: string
  height?: string
  className?: string
}

export interface GradientSVGProps {
  width?: string
  height?: string
  className?: string
  gradientId: string
}

export interface SocialIconProps extends BaseSVGProps {
  fill?: string
  stroke?: string
}
