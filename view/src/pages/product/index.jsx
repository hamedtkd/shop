import { getSingleProductServices } from "@/api/services/getProducts";
import { Button } from "@/components";
import { Footer, Header } from "@/layout";
import { BoxSection } from "@/layout/footer/BoxSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AbotProduct } from "./AbotProduct";
import { Comment } from "./Comment";
import { PeopleComments } from "./PeopleComments";
import { ProductBoxs } from "./ProductBox";

export const Product = () => {
    const [product, setProduct] = useState();
    const { productId } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSingleProductServices(productId);
                // console.log(res.data.data[0]);
                setProduct(res.data.data[0]);
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();

    }, []);
    return (
        <>

            <Header />
            <main className="container ">
                <ProductBoxs product={product}/>
                <BoxSection />
                <AbotProduct data={product?.productDesc} />
                <Comment/>
                <PeopleComments />
            </main>


            <Footer />
        </>
    );
}

