export default {
  configure: () => ({
    useReactNative: () => ({
      use: () => ({
        use: () => ({
          use: () => ({
            use: () => ({
              connect: () => ({
                createEnhancer: jest.fn()
              })
            })
          })
        })
      })
    })
  }),
  createEnhancer:
    (reactotron, pluginConfig, handleStoreCreation) =>
    skipSettingStore =>
    createStore =>
    (reducers, ...args) => {
      const store = createStore(reducers, ...args);
      return store;
    }
};

export const trackGlobalErrors = jest.fn();
export const openInEditor = () => jest.fn();

// Source: https://stackoverflow.com/a/55160418
// Source: https://github.com/infinitered/reactotron/issues/1120
// ToDo: Review how to properly mock the createEnhancer method
// node_modules/reactotron-redux/dist/types/enhancer.d.ts
