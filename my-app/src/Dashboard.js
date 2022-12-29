import React, { useState, useEffect } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

function Graph(props) {
  return <div>This is a graph with data: {props.data}</div>;
}

function Table(props) {
  return <div>This is a table with data: {props.data}</div>;
}

function Text(props) {
  return <div>This is some text: {props.text}</div>;
}

function Dashboard() {
  // Load saved layout from local storage on component mount
  useEffect(() => {
    const savedComponents = localStorage.getItem('components');
    console.log('Loading components from local storage');
    console.log(savedComponents);
    if (savedComponents) {
      dispatch(updateComponents(JSON.parse(savedComponents)));
    }
  }, []);

  // Save layout to local storage when components state changes
  useEffect(() => {
    console.log('Saving components to local storage');
    console.log(JSON.stringify(components));
    if (components.length !== 0) {
      localStorage.setItem('components', JSON.stringify(components));
    }
  }, [components]);

  // Connect to the Redux store
  const components = useSelector(state => state.components);
  const dispatch = useDispatch();

  function addComponent(type, props) {
    dispatch(addComponent(type, props));
  }

  return (
    <div>
      <div>
        <button onClick={() => addComponent('graph', { data: [1, 2, 3] })}>
          Add Graph
        </button>
        <button onClick={() => addComponent('table', { data: [[1, 2], [3, 4]] })}>
          Add Table
        </button>
        <button onClick={() => addComponent('text', { text: 'Hello World' })}>
          Add Text
        </button>
      </div>
      {components.map((component, index) => {
        switch (component.type) {
          case 'graph':
            return <Graph key={index} {...component.props} />;
          case 'table':
            return <Table key={index} {...component.props} />;
          case 'text':
            return <Text key={index} {...component.props} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

// Define the initial state for the Redux store
const initialState = {
  components: []
};

// Define reducer functions to handle actions
function addComponent(state, action) {
  return {
    ...state,
    components: [...state.components, { type: action.type, props: action.props }]
  };
}

function updateComponents(state, action) {
  return {
    ...state,
    components: action.components
  };
}

// Create the Redux store using the configureStore function
const store = configureStore({
  reducer: {
    addComponent,
    updateComponents
  },
  preloadedState: initialState
});

export default function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}
