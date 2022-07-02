import { FC } from 'react';
import { Svg, Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
  fill?: string;
  strokeWidth?: number;
}

const Outline: FC<IconProps> = ({
  size = 40,
  color = 'black',
  fill,
  strokeWidth = 2,
  children,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth={strokeWidth}
    fill={fill}
  >
    {children}
  </Svg>
);

export const MenuIcon = (props: IconProps) => (
  <Outline {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h7"
    />
  </Outline>
);

export const BookmarkIcon = (props: IconProps) => (
  <Outline {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-3.5L5 21V5z"
    />
  </Outline>
);

export const FeedIcon = (props: IconProps) => (
  <Outline {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 0 1 7 7m-6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
    />
  </Outline>
);

export const PlusIcon = (props: IconProps) => (
  <Outline {...props}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </Outline>
);

export const SearchIcon = (props: IconProps) => (
  <Outline {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
    />
  </Outline>
);

export const DownArrowIcon = (props: IconProps) => (
  <Outline {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
    />
  </Outline>
);

export const BarsFullIcon = (props: IconProps) => (
  <Outline {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </Outline>
);

export const ChevronIcon = (props: IconProps) => (
  <Outline {...props}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </Outline>
);
