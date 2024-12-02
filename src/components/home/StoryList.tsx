import Image from 'next/image'
import stories from '@/data/stories'

export default function StoryList() {
  return (
    <div className={'my-4 flex w-full gap-2 overflow-x-auto whitespace-nowrap'}>
      {stories.map((story) => {
        return (
          <div
            className={
              'flex shrink-0 flex-col items-center justify-center text-sm font-light text-black'
            }
          >
            <Image
              src={story.img}
              alt='profile-img'
              width={70}
              height={70}
              priority
              className={'m-[10px] h-[70px] w-[70px] rounded-full border-[3px] border-transparent'}
              style={{
                backgroundImage:
                  'linear-gradient(#fff, #fff), linear-gradient(to right, red 0%, orange 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
              }}
            />
            <p>{story.name}</p>
          </div>
        )
      })}
    </div>
  )
}
