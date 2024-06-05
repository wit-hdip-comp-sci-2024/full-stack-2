import React from 'react';
import ReactDOM from "react-dom/client";
import DemoComponent from './demoComponent';

const App: React.FC = () => {
  return (
    <DemoComponent>
      <li>This is a child element.</li>
    </DemoComponent>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)

