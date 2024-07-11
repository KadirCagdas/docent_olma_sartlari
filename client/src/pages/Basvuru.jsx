import React from 'react'
import "./AdminPanel/admin-panel.scss"
function Basvuru({ basvuru }) {
  return (
    <div className="single_cv">
      <span>{basvuru.name}</span>
    </div>
  )
}

export default Basvuru