import 'react-redux'

import { RootState } from 'store'

// This removes the need for types in useSelector
declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends RootState {}
}
