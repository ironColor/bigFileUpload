import React, { FC, memo,} from 'react';
import AppBar from '@/layout/appBar'

export const Layout:FC<{ keyConfig?: string }> = memo(({ keyConfig }) => {
  return(
    <>
      <AppBar />
      this is Layout
    </>
    
  )
})