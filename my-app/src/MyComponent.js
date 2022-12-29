import React, { useState } from 'react';

function MyComponent() {
  const [components, setComponents] = useState([]);

  const handleClick = () => {
    setComponents([...components, <MyChildComponent key={components.length} />]);
  };

  return (
    <div>
      {components.map(component => component)}
      <button onClick={handleClick}>Add component</button>
    </div>
  );
}

function MyChildComponent() {
  return <div>I am a child component</div>;
}

export default MyComponent;