import React, { ReactNode } from 'react';

interface DemoComponentProps {
  children: ReactNode;
}

const DemoComponent: React.FC<DemoComponentProps> = ({ children }) => {
  return (
    <div>
      <h1>Full Stack 2</h1>
      {children}
    </div>
  );
};

export default DemoComponent;