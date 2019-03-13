1. React Project configuation
   1. package.json
      1. react
         1. React Object Model
           1. Component Class
               1. state property
               2. props property
       2. react-dom
          1. Render the DOM with
             1. Events
             2. Property Values
       3. babel-core 
          1. Babel Transpiler for Modern Javascript/Highlevel Java script aka ES6          
       4. babel-cli
          1. CLI commands for transpilation
       5. bable-loader
           1. manage ES6 Module Loading for the current application
              1. export and import
       6. babel-preset-es2015 
           1. The Babel Transpilation for ES6 to ES3
       7. babel-preset-react
           1. The Babel Transpilation for React Object Model
    2. package.json developer dependencies
       1. webpack
           1. Module-Loader for the Application Build after transpilation
              1. Loads
                 1. babel
                 2. react
                 3. preset
       2. webpack-dev-server
           1. server-side hosting for react applications
           2. The --hot switch
              1. Auto-Refresh the react appliactions using the react-hot-loader package
           3. bootstrap
       3. npm install -g create-react-app - Boiler plate template for react applicaton
#================================================================================================
#================================================================================================
#================================================================================================
Working with React App
1. Contents of React Applications
   1. Components
      1. Rules for component Creation
         1. Name of the Component MUST be PASCAL case
         2. Name MUST be derived from React component
         3. Must implement render() method
         4. Component MUST be exportable
   2. JSX files
   3. State
   4. Services   
   5. React + redux
      1. Action
      2. ActionCreator
      3. Reducer
      4. Store
      5. Dispatcher
      6. Store Mapper with state
2. Creating Component
    1. Define DOM
       1. Define Properties
       2. Define events
    2. Define state
3. React Component Types
   1. Stateless components
      1. Not having any state(data)
      2. They just have HTML
   2. Statefull components
      1. Have State(data) local to component class 
         1. The 'props' JSON Object-property
             1. Data used to share/exchange across components
             2. Data passed from Parent Component to child component     
             3. The 'custom attributes' for the components will be treated as 'Dynamic properties' using 'props'
         2. The 'state' JSON object-property property
            1. Represents the state of the data local to component
            2. The state data can be read/written based on data-binding and events with UI Elements in
      2. These are used in Line-of-Business(LOB) apps
      3. They have events for UI elements
      4. Two-Types for stateful component
         1. Controlled-Component(recommended)
         2. UnControlled Component(will be deprecated in future)
