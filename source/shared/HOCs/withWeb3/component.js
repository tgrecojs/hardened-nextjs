import { useEffect } from 'react'

const withWeb3 =
  (Component) =>
  ({ initializeWeb3, ...props }) => {
    useEffect(() => {
      initializeWeb3()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log({ props })
    return <Component {...props} />
  }

export default withWeb3
