## clone the project

## create you personal access token via giuhub
[creating-a-personal-access-token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)

## add personal access token to src/ApolloClient/client.js

```
headers: {
   ...headers,
   Authorization: 'Bearer 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',
}
```     

## install dependendies
`npm install`

## run development server
`npm run start`

## production build
`npm run build`
