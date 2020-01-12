import css from "./styles.scss"

export type Props = {
  primary: React.ReactNode
  secondary?: React.ReactNode
}
export const Card = ({
  primary,
  secondary
}) => (
  <div className={css.Card}>
    <div>{secondary}</div>
    <div>{primary}</div>
  </div>
)