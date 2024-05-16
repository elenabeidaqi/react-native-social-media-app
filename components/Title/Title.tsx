import React from 'react'
import { Text } from 'react-native'
import style from './style'
interface Title {
    props : string
}

const Title = ({props} : Title) => {
  return (
    <Text style={style.title}>{props}</Text>
  )
}

export default Title