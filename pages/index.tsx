import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'

const Index=()=> {
  const router=useRouter();

  return (
    <>
      <Head>
        <title>집박구리 | 오늘은 누구집이고</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        리뷰 적어라!
          <button onClick={()=>router.push('/post/write')}>글쓰기</button>
          <button onClick={()=>router.push('/auth/login')}>로그인</button>
      </main>
    </>
  )
}

export default Index
