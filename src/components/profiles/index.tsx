import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

export interface IProfilesProps {
  children: React.ReactNode;
}

export default function Profiles({ children, ...restProps }: IProfilesProps) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({
  children,
  ...restProps
}: IProfilesProps) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({
  children,
  ...restProps
}: IProfilesProps) {
  return <List {...restProps}>{children}</List>;
};

export interface IUserProps {
  children: any;
  onClick: () => void;
}
Profiles.User = function ProfilesUser({ children, onClick }: IUserProps) {
  return <Item onClick={onClick}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }: any) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
    />
  );
};

Profiles.Name = function ProfilesName({
  children,
  ...restProps
}: IProfilesProps) {
  return <Name {...restProps}>{children}</Name>;
};
