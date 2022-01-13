import React from 'react'
import { Background } from './Background'

export default {
  title: 'Background/Bg-Color',
  component: Background
}

export const ColorBackground = () => <p class='color-bg'></p>
export const TextWithBackground = () => <p class='content'>Hi, I am StoryBook</p>
export const EmptyImage = () => <p class='empty'></p>
export const TextWithImage = () => <p class='image'>Hi, I am StoryBook</p>
