import React from 'react'
import Feed from '../Feed/Feed'
import Head from '../Helper/Head'

const home = () => {
  return (
    <section className='container mainContainer'>
      <Head title="Fotos" description="Home do site Canelinha, com feed de fotos" />
      <Feed />
    </section>
  )
}

export default home
