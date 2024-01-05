import { Container } from './style'

export function ButtonText({ title, isActive = false, icon: Icon, ...rest }) {
  return (
    <Container type="button" $isactive={isActive.toString()} {...rest}>
      {Icon && <Icon size={18} />}
      {title}
    </Container>
  )
}
