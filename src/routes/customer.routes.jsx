import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Dishes } from '../pages/Dishes'
import { WishList } from '../pages/WishList'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/:id?" element={<Dishes />} />
      <Route path="/wish/:id" element={<WishList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
