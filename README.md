In a Kanban board, project activities correspond to cards (Figure 1-3). Cards are assembled into lists according to their status and are supposed to progress from one list to the next, mirroring the flow of a feature from idea to implementation.

![Kanban Board app](http://url/to/img.png)

### Data Model

 The data model the Kanban app will consume is shown below

 ```
[
{ id:1,
    title: "Card one title",
    description: "Card detailed description.",
    status: "todo",
    tasks: [
      {id: 1, name:"Task one", done:true},
      {id: 2, name:"Task two", done:false},
      {id: 3, name:"Task three", done:false}
] },
  { id:2,
    title: "Card Two title",
    description: "Card detailed description",
    status: "in-progress",
    tasks: []
},
{ id:3,
    title: "Card Three title",
    description: "Card detailed description",
    status: "done",
    tasks: []
},
];
 ```

### Usage

**Install**
```
npm install
```

**Start the application in development mode**
```
npm start
```

Open http://localhost:8080 in your browser.

Static files are served from the `public` folder, project JavaScript files are bundled from the `app` folder.

**When ready, build for production**
```
npm run build
```

This will generate a minimized bundle.js file on the `public` folder.


### Dependencies

* React & React-DOM
* Webpack & webpack-dev-server
* Babel Core
* Babel Loader (With "es2015" and "react" presets)
