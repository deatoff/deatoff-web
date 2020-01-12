// @ts-nocheck
import React from "react";
// import { useGraphQL } from 'graphql-react'
import { useField, useForm } from "../../hooks";
import { ExperiencesForm } from "./ExperiencesForm";

export const ExperiencesFormContainer = () => {
  const titleField = useField({
    // @ts-ignore
    name: "title",
    initialValue: false
  });
  const authorField = useField({
    name: "author",
    initialValue: "Frédéric Chopin"
  });

  const { onSubmit } = useForm({
    operation: {
      variables: { title: titleField.value, author: authorField.value },
      query: /* GraphQL */ `
        mutation($title: String!, $author: String!) {
          createExperience(title: $title, author: $author) {
            title
            author
          }
        }
      `
    },
    onFieldError(e) {
      // console.log(e);
      // eslint-disable-next-line functional/no-expression-statement
      titleField.addError(e);
    }
  });

  // const { formRef, message, loading, success, onSubmit } = useForm({
  // const { onSubmit } = useForm({
  //   operationName,
  //   operation: {
  //     //@ts-ignore
  //     variables: { name: valueName },
  //     query: /* GraphQL */ `
  //     mutation($name: String!) {
  //       createUser (name: $name) {
  //         name
  //       }
  //     }
  //     `
  //   },
  //   failMessage: 'Name edit failed w2',
  //   onFieldError({ message, field }) {
  //     // switch (field[0]) {
  //     //   case 'name':
  //     //     addErrorName(message)
  //     // }
  //   }
  // })

  return (
    <ExperiencesForm
      titleField={titleField}
      authorField={authorField}
      onSubmit={onSubmit}
    />
  );
};
