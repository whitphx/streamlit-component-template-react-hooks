# streamlit-component-template-react-hooks

This repo contains below.
* A template for creating Streamlit Components with React Hooks and functional component style: [`./template`](./template).
  * This is based on [the official React template](https://github.com/streamlit/component-template/tree/master/template). The original code has been copied to this repo and fixed to use React Hooks.
* The source code of `streamlit-component-lib-react-hooks` npm package, which provides React-Hooks style API for Streamlit Component: [`./streamlit-component-lib-react-hooks`](streamlit-component-lib-react-hooks).
  * This is only for development purpose and the users of `./template` do not have to see it.

## Quickstart for the component template

* Ensure you have [Python 3.6+](https://www.python.org/downloads/), [Node.js](https://nodejs.org), and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.
* Clone this repo.
* Create a new Python virtual environment for the template:
```
$ cd template
$ python3 -m venv venv  # create venv
$ . venv/bin/activate   # activate venv
$ pip install streamlit # install streamlit
```
* Initialize and run the component template frontend:
```
$ cd template/my_component/frontend
$ npm install    # Install npm dependencies
$ npm run start  # Start the Webpack dev server
```
* From a separate terminal, run the template's Streamlit app:
```
$ cd template
$ . venv/bin/activate  # activate the venv you created earlier
$ streamlit run my_component/__init__.py  # run the example
```
* If all goes well, you should see something like this:
![Quickstart Success](https://github.com/streamlit/component-template/blob/master/quickstart.png?raw=true)
* Modify the frontend code at `my_component/frontend/src/MyComponent.tsx`.
* Modify the Python code at `my_component/__init__.py`.
