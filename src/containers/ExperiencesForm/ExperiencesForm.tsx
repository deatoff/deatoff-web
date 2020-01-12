// @ts-nocheck
import React from "react";
import { FormProps, Form, InputTextProps, InputText } from "../../components";

export type Props = {
  // @TODO set nameField type annotation
  readonly titleField: any;
  readonly authorField: any;
  readonly onSubmit: FormProps["onSubmit"];
};

export const ExperiencesForm = ({
  titleField,
  authorField,
  onSubmit
}: Props) => {
  return (
    <div>
      {JSON.stringify(titleField)}
      <Form onSubmit={onSubmit}>
        <>
          <InputText
            name={titleField.name}
            onChange={titleField.onChangeInput}
            value={titleField.value}
            hasError={titleField.errors?.length}
            required
          />
          <InputText
            name={authorField.name}
            onChange={authorField.onChangeInput}
            value={authorField.value}
            hasError={authorField.errors?.length}
          />
        </>
      </Form>
      <style jsx>
        {`
          div {
            margin-bottom: 1em;
          }
        `}
      </style>
    </div>
  );
};
