import React from 'react'
import { EXPAND_LESSON_LIST, COLLAPSE_LESSON_LIST, TOGGLE_LESSON_LIST } from './types'

export const expandLessonList = () => {
  return {
    type: EXPAND_LESSON_LIST
  }
}

export const collapseLessonList = () => {
  return {
    type: COLLAPSE_LESSON_LIST
  }
}

export const toggleLessonList = () => {
  return {
    type: TOGGLE_LESSON_LIST
  }
}
