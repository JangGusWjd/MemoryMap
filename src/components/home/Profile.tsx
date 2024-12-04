import Image from 'next/image'
import article from '@/data/articles'

export default function Profile() {
  return (
    <>
      <section className='mb-4 mt-11 flex cursor-pointer items-center gap-4'>
        <Image
          src={article.writer_profile}
          alt='writer-profile'
          width={100}
          height={100}
          className='h-14 w-14 rounded-full'
        />
        <div>
          <h1 className='font-bold'>{article.writer}</h1>
          <p className='text-sm font-normal text-customGray'>프로필에 자기소개를 입력하세요.</p>
        </div>
      </section>
    </>
  )
}
