import { Store } from 'redux';
import { RootState } from './index';
import { ActionType } from './action-types';

export const generateInitialValues = (store: Store<RootState>): void => {
  store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id: null,
      type: 'code',
    },
  });

  store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id: null,
      type: 'text',
    },
  });

  const initialInstructions = `
Code & Markdown Editor
----------
This is an interactive coding environment.  You can write javascript, see it executed, and write documentation using markdown.

- Click any text or code cell to edit it.
- Libraries are automatically installed with an import statement!
- You can show any React component, string, number, or anything else by calling the **show(valueToDisplay)** helper function.  
- Re-order or delete cells using the buttons on the top right.
- Add new cells by hovering on the divider between each cell.
- The code in each code editor is all joined together into one file.  If you define a variable in cell #1, you can refer to it in any following cell.
- This is a demo of the React client side only but if you'd like to use a version with data persistence, run **npx jsnotes2 serve** in your coding terminal.  This will launch a local express server that will save changes to a local notebook file on your computer. 
  `;

  const { order } = store.getState().cells;

  store.dispatch({
    type: ActionType.UPDATE_CELL,
    payload: {
      id: order[0],
      content: initialInstructions,
    },
  });

  const initialCodeDemo = `import React from 'react';

const App = () => {
  return <div>Hello World!</div>  
};

show(<App />);
  `;

  store.dispatch({
    type: ActionType.UPDATE_CELL,
    payload: {
      id: order[1],
      content: initialCodeDemo,
    },
  });
};
