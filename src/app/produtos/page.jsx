"use client";

import './produtos.css';
import { useState, useEffect } from "react";
import CardProduto from "@/components/CardProduto";

export default function Produtos(){

    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(dados => {
                setListaProdutos(dados.products);
            })
    }, [])

    return(
        <main>

            {listaProdutos.length > 0 &&
                <div className="container-produtos">
                    {listaProdutos.map(p => {
                        return <CardProduto key={p.id} produto={p}/>
                    })}
                </div>
            }

        </main>
    )
}