import React from 'react'
import Svg, {
  Defs,
  RadialGradient,
  LinearGradient,
  G,
  Path
} from 'react-native-svg'

function Cup(props) {

  return (
    <Svg {...props} viewBox='0 0 128 128'>
      <Defs>
        <RadialGradient
          id='prefix__c'
          cx={102.147}
          cy={143.496}
          r={45.5}
          fx={102.147}
          fy={143.496}
          gradientTransform='matrix(-.0006 -.32243 1.88526 -.0035 -168.32 157.728)'
          gradientUnits='userSpaceOnUse'
        />
        <RadialGradient
          id='prefix__a'
          cx={112.242}
          cy={6.162}
          r={45.616}
          fx={112.242}
          fy={6.162}
          gradientTransform='matrix(-1.7724 -.02813 .0431 -2.7155 282.669 36.946)'
          gradientUnits='userSpaceOnUse'
        />
        <LinearGradient
          id='prefix__b'
          x1={53.5}
          x2={74.5}
          y1={98.553}
          y2={98.553}
          gradientUnits='userSpaceOnUse'
        />
      </Defs>
      <G stroke='#000'>
        <Path
          fill='url(#prefix__a)'
          d='M20 10.5c.07 29.925-3.988 59.782 35 72h18c39.112-12.001 35.05-42.035 35-72H20z'
        />
        <Path
          fill='none'
          d='M20 10.006c.196-8.679-9.296-9.759-13.311-7.434-6.34 3.67-5.14 12.228-4.994 29.603.287 33.942 18.116 34.133 28.794 34.314M108 10.006c-.196-8.679 9.296-9.759 13.311-7.434 6.34 3.67 5.14 12.228 4.994 29.603-.287 33.942-18.116 34.133-28.794 34.314'
        />
        <Path
          fill='url(#prefix__b)'
          d='M55 82.553v32c9.502-.002 7.297.017 18 0v-32c-7.724.012-7.173-.02-18 0z'
        />
        <Path
          fill='url(#prefix__c)'
          d='M55 114.5c-7.003-.052-35.021 3.962-35 12h88c.046-8.154-27.864-12.08-35-12H55z'
        />
      </G>
    </Svg>
  )
}

export default Cup
