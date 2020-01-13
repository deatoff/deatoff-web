import React from "react";
import Link from "next/link";

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
}: Props) => (
  <div className={className}>
    {pieces.map(({ id, title }) => (
      <Link key={id} href={`/p/${id}`}>
        {title}
      </Link>
    ))}
  </div>
);
