import React from 'react'
import { Link } from './Link'

export default {
  title: 'Link/TextDecoration',
  component: Link
}

export const WithDash = () => <a class='dash' href="#">Hi, I am a anchor tag link.</a>
export const WithoutDash = () => <a class='no-dash' href="#">Hi, I am a anchor tag link.</a>
export const WithColor = () => <a class='with-color' href="#">Hi, I am a anchor tag link.</a>
