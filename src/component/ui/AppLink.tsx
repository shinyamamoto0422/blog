import Link, { LinkProps } from "next/link";
import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

type Props = LinkProps &
  DetailedHTMLProps<
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    HTMLAnchorElement
  >;

export const AppLink = ({ href, as, children, ...rest }: Props) => {
  return (
    <Link href={href} as={as}>
      <a {...rest}>{children}</a>
    </Link>
  );
};
