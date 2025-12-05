import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

let reactotron = null

if (__DEV__) {
  reactotron = Reactotron
    .configure({
      name: 'RewardsApp',
      host: 'localhost' // Ensure connection to desktop app
    })
    .useReactNative({
      asyncStorage: false, // Don't track AsyncStorage
      networking: {
        ignoreUrls: /symbolicate/ // Ignore React Native symbolication requests
      }
    })
    .use(reactotronRedux({
      // This will automatically track all state changes
      isActionImportant: (action) => action.type !== 'EFFECT_TRIGGERED'
    }))
    .connect()

  // Clear Reactotron on each app load
  reactotron.clear()

  console.tron = reactotron
}

export default reactotron
