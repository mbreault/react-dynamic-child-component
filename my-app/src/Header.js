import React, { useState, useEffect } from 'react';

function Header() {
    return (
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
    );
}

export default Header;