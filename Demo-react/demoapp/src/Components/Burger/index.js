import React from "react";
import BurgerIngredient from "../BurgerIngredient";


const Burger = () =>(
    <div>
        <BurgerIngredient type = "bread-top"/>
        <BurgerIngredient type = "salad"/>
        <BurgerIngredient type = "bacon"/>
        <BurgerIngredient type = "cheese"/>
        <BurgerIngredient type = "meat"/>
        <BurgerIngredient type = "meat"/>
    </div>
);

export default Burger;