import * as React from "react";
import {
  Props as StudioUploadFormProps,
  StudioUploadForm
} from "./StudioUploadForm";

type UserPiece = {
  readonly id: string;
  readonly title: string;
  readonly author: string;
};
export type Props = {
  readonly className?: string;
  readonly userPieces: readonly UserPiece[];
} & StudioUploadFormProps;

export const Studio: React.ComponentType<Props> = ({
  className,
  values,
  onChangeInput,
  onSubmit,
  userPieces
}: Props) => (
  <div className={className}>
    <div>
      <StudioUploadForm
        values={values}
        onSubmit={onSubmit}
        onChangeInput={onChangeInput}
      />
    </div>
    <div>
      <ul>
        {userPieces.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  </div>
);
