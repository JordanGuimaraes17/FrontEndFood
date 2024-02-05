import { Container } from './style'

export function TextArea({ value, onChange, ...rest }) {
  return <Container {...rest} value={value} onChange={onChange} />
}
