import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Dishes } from '../pages/Dishes'
import { WishList } from '../pages/WishList'
import { DishesAdmin } from '../pages/DishesAdmin'
import { AddDishes } from '../pages/AddDishes'
import { EditDishes } from '../pages/EditDishes'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/:id?" element={<Dishes />} />
      <Route path="/wish/:id" element={<WishList />} />
      <Route path="/dishesAdmin" element={<DishesAdmin />} />
      <Route path="/addDishes" element={<AddDishes />} />
      <Route path="/editDishes/:id" element={<EditDishes />} />
    </Routes>
  )
}
