# streamlit-component-template-react-hooks

[![Test streamlit-component-lib-react-hooks](https://github.com/whitphx/streamlit-component-template-react-hooks/actions/workflows/lib-test.yaml/badge.svg)](https://github.com/whitphx/streamlit-component-template-react-hooks/actions/workflows/lib-test.yaml)

[![version](https://img.shields.io/npm/v/streamlit-component-lib-react-hooks)](https://www.npmjs.com/package/streamlit-component-lib-react-hooks)
[![license](https://img.shields.io/npm/l/streamlit-component-lib-react-hooks)](https://www.npmjs.com/package/streamlit-component-lib-react-hooks)


[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/D1D2ERWFG)

<a href="https://www.buymeacoffee.com/whitphx" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="180" height="50" ></a>

[![GitHub Sponsors](https://img.shields.io/github/sponsors/whitphx?label=Sponsor%20me%20on%20GitHub%20Sponsors&style=social)](https://github.com/sponsors/whitphx)

This repo contains below.
* A template for creating Streamlit Components with React Hooks and functional component style: [`./template`](./template).
  * This is based on [the official React template](https://github.com/streamlit/component-template/tree/master/template). The original code has been copied to this repo and fixed to use React Hooks.
* The source code of `streamlit-component-lib-react-hooks` npm package, which provides React-Hooks style API for Streamlit Component: [`./streamlit-component-lib-react-hooks`](streamlit-component-lib-react-hooks).
  * This is only for development purpose and the users of `./template` do not have to see it.

## Quickstart for the component template

* Ensure you have [Python 3.6+](https://www.python.org/downloads/), [Node.js](https://nodejs.org), and [yarn](https://yarnpkg.com/getting-started/install) (or [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)) installed.
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
$ yarn        # Install npm dependencies. `npm install` can be used instead.
$ yarn start  # Start the Webpack dev server. `npm run start` can be used intead.
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
