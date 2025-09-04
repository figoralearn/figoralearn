

export type SocialItem = {
  title: string;
  link: string;
};

export type LinkItem = {
  title: string;
  link: string;
  sub?: LinkItem[];
};
export type MarkerProps = {
  children: React.ReactNode;
  className?: string;
  link: string;
  onClick?: () => void;
};
