import React, { FunctionComponent } from 'react';
import Nav from './nav';

type HeaderProps = {
  children: React.ReactNode;
}

export const Header: FunctionComponent<HeaderProps> = (
  {
    children,
  },
) => (
  <header>
    <div className=" rounded pb-8 p-4">
      <div className="flex justify-center">
        <img
          className="h-16 sm:h-24 rounded-full"
          src="/mozstro_logo.png"
          alt="Mozstro Logo"
        />
      </div>
      {children}
    </div>
    <Nav />
  </header>
);
