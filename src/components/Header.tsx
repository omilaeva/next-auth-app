// @flow
import * as React from 'react';

type Props = {
  children?: React.ReactNode;
};

export const Header = async ({ children }: Props) => {

  return (
    <header>
      <div className="container nav-container">
        <div className="logo">
          HyperIn<span>&nbsp;Care</span>
        </div>
        {children}
      </div>
    </header>
  );
};