/* eslint-disable functional/no-mixed-type */
import { InputText } from "../../components";

export type Props = {
  readonly className?: string;
  readonly onSubmit: (e: React.SyntheticEvent) => void;
  readonly onChangeInput: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  readonly values: any;
};

export const ExperiencesForm = ({
  className,
  onSubmit,
  onChangeInput,
  values
}: Props) => {
  return (
    <div className={className}>
      <h1>Form</h1>
      <form onSubmit={onSubmit}>
        <InputText
          required
          name="title"
          value={values.title}
          onChange={onChangeInput}
        />
        <InputText
          required
          name="author"
          value={values.author}
          onChange={onChangeInput}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
