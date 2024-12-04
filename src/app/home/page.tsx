import StoryList from '@/components/home/StoryList'
import KaKaoMap from '@/components/map/kakaomap'
import ArticlePost from '@/components/home/ArticlePost'
import Profile from '@/components/home/Profile'

export default function HomePage() {
  return (
    <>
      <StoryList />
      <Profile />
      <div className='flex flex-col gap-2 sm:flex-col md:flex-row lg:flex-row'>
        <KaKaoMap />
        <ArticlePost />
      </div>
    </>
  )
}
