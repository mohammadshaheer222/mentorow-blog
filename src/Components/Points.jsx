import React from 'react'

function Points({points}) {
  return (
        <div>
        {Object.keys(points).map((key) => (
          <span style={{ color: points[key].color }} key={key} className="mb-2 mr-2 inline-block rounded-full px-3 py-1 text-[10px] font-semibold bg-[#FDF2FA]">
            {points[key].label}
          </span>
        ))}
      </div>
  )
}

export default Points