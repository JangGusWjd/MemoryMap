import Script from 'next/script'

const KAKAO_MAP_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=64522fd289bb186be32283111e9523a9&autoload=false`

export default function KaKaoMap() {
  return (
    <>
      <Script src={KAKAO_MAP_URL} strategy='beforeInteractive' />
    </>
  )
}
