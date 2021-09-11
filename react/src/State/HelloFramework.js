import { React, useState} from React

function TestUseState() {
    const [frameworkName, setFrameworkName] = React.useState("React");
  
    return (
      <div>
        <h1>useState API</h1>
        <p>Current Framework: {frameworkName}</p>
      </div>
    )
}

export default TestUseState;