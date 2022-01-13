import React from 'react'
import { Control } from './Control'

export default {
  title: 'Control/Fields',
  component: Control
}

export const Date = () => <input type="date" class='date'></input>
export const Month = () => <input type="month" class='month'></input>
export const Time = () => <input type="time" class='time'></input>
export const Week = () => <input type="week" class='week'></input>
