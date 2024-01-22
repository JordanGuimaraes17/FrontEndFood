import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Dishes } from '../pages/Dishes'
import { AddDishes } from '../pages/AddDishes'
import { EditDishes } from '../pages/EditDishes'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes" element={<Dishes />} />
      <Route path="/addDishes" element={<AddDishes />} />
      <Route path="/editDishes/:id" element={<EditDishes />} />
    </Routes>
  )
}
