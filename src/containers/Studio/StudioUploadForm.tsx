import React from "react";

type Events = {
  readonly onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  readonly onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type Props = {
  readonly className?: string;
  readonly values: {
    readonly title: string;
    readonly author: string;
  };
} & Events;

export const StudioUploadForm: React.ComponentType<Props> = ({
  className,
  onSubmit,
  onChangeInput,
  values
}: Props) => {
  const { title, author } = values;
  return (
    <div className={className}>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Studio upload form</legend>
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            onChange={onChangeInput}
            value={title}
          />
          <label htmlFor="author">author</label>
          <input
            type="text"
            name="author"
            onChange={onChangeInput}
            value={author}
          />
          <input type="submit" value="Upload" />
        </fieldset>
      </form>
    </div>
  );
};
