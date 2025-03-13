# Development
## Template
```shell
$ cd template
$ streamlit run my_component/__init__.py
```

```shell
$ cd template/my_component/frontend
$ pnpm start
```

## Component library
```shell
$ cd streamlit-component-lib-react-hooks
$ pnpm build
```

# Publish
```shell
$ pnpm new-version
```

Then push the commit to the GitHub repository and create a new release. The CI/CD process will release the package to NPM.
