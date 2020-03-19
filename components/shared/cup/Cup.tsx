import React from 'react'
import Svg, {
  G,
  Path
} from 'react-native-svg'

function Cup(props) {

  return (
    <Svg {...props} viewBox='0 0 128 128'>
      <G stroke='black'>
        <Path
          fill='dodgerblue'
          d='M20 10.5c.07 29.925-3.988 59.782 35 72h18c39.112-12.001 35.05-42.035 35-72H20z'
        />
        <Path
          fill='none'
          d='M20 10.006c.196-8.679-9.296-9.759-13.311-7.434-6.34 3.67-5.14 12.228-4.994 29.603.287 33.942 18.116 34.133 28.794 34.314M108 10.006c-.196-8.679 9.296-9.759 13.311-7.434 6.34 3.67 5.14 12.228 4.994 29.603-.287 33.942-18.116 34.133-28.794 34.314'
        />
        <Path
          fill='dodgerblue'
          d='M55 82.553v32c9.502-.002 7.297.017 18 0v-32c-7.724.012-7.173-.02-18 0z'
        />
        <Path
          fill='dodgerblue'
          d='M55 114.5c-7.003-.052-35.021 3.962-35 12h88c.046-8.154-27.864-12.08-35-12H55z'
        />
      </G>
    </Svg>
  )
}

export default Cup
