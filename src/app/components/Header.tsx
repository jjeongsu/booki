'use client'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  return (
    <header className="flex justify-between items-center font-semibold text-18 h-60 ">
      <div></div>
      <Link href={'/'}>인덱스</Link>
      <br />
      <Link href={'/search'}>search</Link>
      {/* TODO:돋보기 아이콘으로 교체 */}
      <br />
      <Link href={'/login'}>my</Link>
      <br />
    </header>
  )
}
