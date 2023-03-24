import { uploadsURL } from "@/api/constant";
import { basketServices, fetchBasketServices, updateBasketServices, } from "@/api/services/basket";
import { Button, Link, persianNumber } from "@/components";
import { Footer, Header } from "@/layout";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BasketOfProduct } from "./basketOfProducts";
import { useBasket } from "./basketOfProducts/useBasket";
// import "./index.css"

export const Basket = () => {

    return (
        <>
            <Header />
            <BasketOfProduct/>
            <div className=" max-lg:hidden max-md:hidden max-sm:hidden">
            <Footer />

            </div>
        </>

        // <BasketOfProduct/>
    )
}

