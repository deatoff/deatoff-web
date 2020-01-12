import React from "react";
import { useRouter } from "next/router";
import { User } from "./User";

export const UserContainer = () => {
  const { query } = useRouter();

  const user = {
    name: query.userName,
    age: 32
  };

  return <User user={user} />;
};
