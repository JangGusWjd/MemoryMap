'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import 'react-kakao-maps-sdk'
import article from '@/data/articles'

const KAKAO_MAP_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=06d2560557c72ee20dcef81cd1d04fd2&autoload=false`

export default function KaKaoMap() {
  const latitude = article.latitude
  const longitude = article.longitude
  useEffect(() => {
    if (typeof window !== 'undefined' && window.kakao) {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map')
        if (container instanceof HTMLElement) {
          const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3,
          }
          const map = new window.kakao.maps.Map(container, options)

          new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(latitude, longitude),
            map: map,
          })
        }
      })
    }
  }, [])
  return (
    <>
      <Script src={KAKAO_MAP_URL} strategy='beforeInteractive' />
      <div
        id='map'
        className='h-[300px] w-full rounded-md transition-all sm:h-[300px] sm:w-full md:h-[500px] md:w-[50%] lg:h-[550px] lg:w-[50%]'
      />
    </>
  )
}
