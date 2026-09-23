"use client";
import './descricao.css'

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dados from '@/filmes.json'

export default function Filme(){
    const [filme, setFilme] = useState(null);
    const params = useParams();

    useEffect(() => {
        const filmeEncontrado = dados.find(f => f.id == params.id);
        setFilme(filmeEncontrado);
    }, [])

    return(
        <main>
            {filme != null && <>
            <h1>Descrição de {filme.titulo}</h1>
            <img src={filme.imagem} alt='' />
            <h2>{filme.sinopse}</h2>
            <br></br>
            <h3>Genero: {filme.genero}</h3>
            <h3>Duração: {filme.duracaoMinutos}</h3>
            
            </>}
        </main>
    )
        
}