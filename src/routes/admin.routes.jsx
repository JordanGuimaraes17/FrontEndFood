import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Dishes } from '../pages/Dishes'
import { WishList } from '../pages/WishList'
import { DishesAdmin } from '../pages/DishesAdmin'
import { AddDishes } from '../pages/AddDishes'
import { Menu } from '../components/menu'
import { EditDishes } from '../pages/EditDishes'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/:id?" element={<Dishes />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/wish/:id" element={<WishList />} />
      <Route path="/dishesAdmin/:id" element={<DishesAdmin />} />
      <Route path="/addDishes" element={<AddDishes />} />
      <Route path="/editDishes/:id" element={<EditDishes />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
