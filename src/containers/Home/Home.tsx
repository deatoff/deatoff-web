import React from "react";
import Link from "next/link";
import { Button } from "../../components/src";

// piece of art
type Piece = {
  readonly id: string;
  readonly title: string;
  readonly author: string;
};

type Props = {
  readonly pieces: readonly Piece[];
  readonly className?: string;
};
export const Home: React.ComponentType<Props> = ({
  className,
  pieces
}: Props) => {
  const onClick = _e => {
    console.log(8);
  };
  return (
    <div className={className}>
      <Button onClick={onClick}>Hello</Button>
      {pieces.map(({ id, title }) => (
        <Link key={id} href={`/p/${id}`}>
          {title}
        </Link>
      ))}
    </div>
  );
};
