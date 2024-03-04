import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Dishes } from '../pages/Dishes'
import { WishList } from '../pages/WishList'
import { Menu } from '../components/menu'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/menu" element={<Menu />} />
      <Route path="/" element={<Home />} />
      <Route path="/dishes/:id?" element={<Dishes />} />
      <Route path="/wish/:id" element={<WishList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
