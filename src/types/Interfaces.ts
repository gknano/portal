export interface PageConteinerProps {
  children?: React.ReactNode
  className?: string
  style?: string
}

export interface CustomButtonProps extends PageConteinerProps {
  onClick: any
}
