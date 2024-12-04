import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'
import article from '@/data/articles'
import Image from 'next/image'

export default function ArticlePost() {
  return (
    <>
      <article
        key={article.id}
        className='border-customBorderGray rounded-md border-[1.5px] sm:h-[500px] sm:w-full md:h-[500px] md:w-[50%] lg:h-[550px] lg:w-[50%]'
      >
        <div className='flex flex-col gap-0.5 px-4 py-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 text-sm font-medium text-gray-800'>
              <Image
                src={article.writer_profile}
                alt='profile-img'
                width={40}
                height={40}
                className='h-8 w-8 rounded-full'
              />
              <p>{article.writer}</p>
            </div>
            <EllipsisHorizontalIcon className='h-10 w-8 cursor-pointer text-customGray' />
          </div>
          <div className='flex items-center justify-between'>
            <h1 className='text-l font-bold'>{article.address}</h1>
            <p className='text-sm text-customGray'>{article.postDate}</p>
          </div>
        </div>
        <div className='h-[66%] w-full'>
          {article.images.map((image, index) => (
            <Image
              src={image}
              alt='article-image'
              key={index}
              width={300}
              height={300}
              className='h-full w-full'
            />
          ))}
        </div>
        <div className='p-4'>
          {article.hashtags.map((hashtag, index) => (
            <span key={index} className='mr-2 text-xs font-semibold text-customCoral'>
              #{hashtag}
            </span>
          ))}
          <p className='text-sm font-semibold'>{article.description}</p>
        </div>
      </article>
    </>
  )
}
