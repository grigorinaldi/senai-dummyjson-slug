"use client";

import './descricao.css';
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function Produto(){

    const [produto, setProduto] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then(res => res.json())
            .then(dados => {
                setProduto(dados);
            })
    }, [])

    return(
    <main>

        {produto != null &&
            <div className="produto-detalhes">

                <h1>{produto.title}</h1>

                <img src={produto.thumbnail} alt="" />

                <div className="informacoes">
                    <h3>Categoria: {produto.category}</h3>
                    <h3>Preço: ${produto.price}</h3>
                    <h3>Desconto: {produto.discountPercentage}%</h3>
                    <h3>Avaliação: {produto.rating}</h3>
                    <h3>Estoque: {produto.stock}</h3>
                    <h3>Marca: {produto.brand}</h3>
                    <h3>Peso: {produto.weight}</h3>
                    <h3>Garantia: {produto.warrantyInformation}</h3>
                </div>

            </div>
        }

    </main>
)
}