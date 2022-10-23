import React from 'react'

export default function Topbar() {
  return (
    <div className='absolute
                    flex-row
                    h-8
                    m-5'>
        <div className="bg-[url('./assets/topbar/online-default.png')]
                        h-8
                        hover:bg-[url('./assets/topbar/online-hover.png')]
                        active:bg-[url('./assets/topbar/online-active.png')]"></div>
      </div>
  )
}
