
import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import Layout from './components/Layout'
import NewDetail from './components/NewDetail'
import './App.css'
const App = () => {
  const api = "7284e004712265cd59071cb9497eff412e956eca572e1d8b807a3e2338fdd0dc/stage"
  const [alanInstanc, setAlanInstance] = useState()
  const [newHeadlines, setNewHeadlinese] = useState([])
  const [catagories, setCatagories] = useState([])
  useEffect(() => {
    if (alanInstanc != null) return
    setAlanInstance(
      alanBtn({
        key: api,
        onCommand: ({ command, articles }) => {
          if (command === 'newHeadlines') {
            setNewHeadlinese(articles)
          }
        }
      })
    )
  }, [])

  return (
    <Layout>
      <NewDetail />
    </Layout>
  )
}

export default App 