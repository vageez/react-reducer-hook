import React, { useReducer, useRef, useCallback, useMemo } from 'react'
import { taggedSum } from 'daggy'

export const Page = taggedSum('Page', {
  Home: [],
  Login: [],
  Signup: []
})

/** INITIAL STATE */
const initialState = {
  page: Page.Home
}

/** REDUCER */
const reducer = (state, action) => {
  switch (action.type) {
    case 'HOME':
      return {
        ...state,
        page: Page.Home
      }
    case 'SIGNUP':
      return {
        ...state,
        page: Page.Signup
      }
    case 'LOGIN':
      return {
        ...state,
        page: Page.Login
      }
    default:
      return { ...state }
  }
}

/** ACTION CREATORS */
export const home = {
  type: 'HOME'
}
export const login = {
  type: 'LOGIN'
}
export const signup = {
  type: 'SIGNUP'
}

export const EnhancedReducer = ({ enableMiddleware }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const preState = useRef()

  const dispatchEvidenceSummary = useCallback(action => {
    const actionType = action === 'object' ? action.type : action
    preState.current = { ...preState.current, actionType, action }
    dispatch(action)
  }, [])

  const enhancedDispatch = enableMiddleware ? dispatchEvidenceSummary : dispatch

  useMemo(() => {
    if (!enableMiddleware || !preState.current) return
    const { actionType, action } = preState.current
    // intercept actions here
    console.log(`ACTION TYPE`, actionType)
    console.log(`ACTION`, action)
  }, [state, enableMiddleware])

  preState.current = { ...preState.current, state }
  return [state, enhancedDispatch]
}
