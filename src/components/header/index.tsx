import React, { useState } from 'react';
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  PlayButton,
  Link,
  Group,
  Profile,
  Picture,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
} from './styles/header';
import { Link as ReachRouterLink } from 'react-router-dom';

export interface IHeaderProps {
  bg?: boolean;
  children: any;
  src?: any;
  dontShowOnSmallViewPort?: any;
}

export default function Header({
  bg = true,
  children,
  src,
  dontShowOnSmallViewPort,
  ...restProps
}: IHeaderProps) {
  return bg ? (
    <Background src={src} dontShowOnSmallViewPort {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Feature = function HeaderFeature({ children, ...restProps }: any) {
  return <Feature>{children}</Feature>;
};

Header.Frame = function HeaderFrame({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }: any) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }: any) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Text = function HeaderText({ children, ...restProps }: any) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({
  children,
  active,
  onClick,
  ...restProps
}: {
  children: any;
  active?: any;
  onClick?: () => void;
}) {
  return (
    <Link active={active} onClick={onClick} {...restProps}>
      {children}
    </Link>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }: any) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}: any) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }: any) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }: any) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }: any) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }: any) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

export interface IHeaderSearch {
  searchTerm: any;
  setSearchTerm: any;
}

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}: IHeaderSearch) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }: any) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};
