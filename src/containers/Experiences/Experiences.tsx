import css from "./styles.scss";
import {
  Props as ExperiencesFormProps,
  ExperiencesForm
} from "./ExperiencesForm";

type Props = {
  readonly experiences: readonly any[];
} & ExperiencesFormProps;

export const Experiences = ({
  experiences,
  values,
  onChangeInput,
  onSubmit
}: Props) => {
  return (
    <div className={css.Experiences}>
      <div className={css.Experiences__Left}>
        <ExperiencesForm
          className={css.Experiences__Form}
          values={values}
          onSubmit={onSubmit}
          onChangeInput={onChangeInput}
        />
      </div>
      <div className={css.Experiences__Right}>
        <pre className={css.Experiences__Pre}>
          {JSON.stringify(experiences, null, 2)}
        </pre>
      </div>
    </div>
  );
};
