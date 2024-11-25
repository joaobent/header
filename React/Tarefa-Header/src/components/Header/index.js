'use client'
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import style from "./Header.module.css"
import Link from "next/link"

export default function Header() {

    const [selectedPage, setSelectedPage] = useState(null);

    const handleClick = (page) => {
        setSelectedPage(page);
    };

    const getStyle = (page) => {
        return {
            color: selectedPage === page ? "#ff9800" : "white",
            
            cursor: "pointer"
        };
    };

    const [showDiv, setShowDiv] = useState(false)
    return (
        <header className={style.headerAtividade}>
            <div className={style.campo}>
                <button className={style.botao} onClick={() => { setShowDiv(!showDiv) }} > {showDiv ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" /></svg>}</button>
                <div className={style.logoEclass}>
                    <Image className={style.img}
                        src="/images/logo2.jpg"
                        alt="Logo Portfolio"
                        width={50}
                        height={50}
                        loading="eager"
                    />
                </div>
            </div>
            <AnimatePresence>
                {showDiv &&
                    (
                        <motion.nav
                            key="nav-atividade"
                            className={style.campoOpcaoNav}>
                            <div className={style.opcoesNav}>
                                <li className={style.opcao}>
                                    <Link href={'/'} style={getStyle("pagina3")}
                                        onClick={() => handleClick("pagina3")} id="pagina3"> <svg className={style.inicio}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                                      </svg>

                                             Inicio</Link>
                                </li>
                                <li className={style.opcao}>
                                    <Link href={'/pagina3'} id="pagina1" style={getStyle("pagina1")}
                                        onClick={() => handleClick("pagina1")}> <svg className={style.sobre}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                                      </svg>
                                            
                                            Sobre</Link>
                                </li>
                                <li className={style.opcao} >
                                    <Link href={'./pagina2'} style={getStyle("pagina2")}
                                        onClick={() => handleClick("pagina2")} id="pagina2"> <svg className={style.contato} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                      </svg>
                                            
                                            Contato</Link>
                                </li >
                                
                            </div>

                        </motion.nav>
                    )
                }
            </AnimatePresence>
        </header>

    )
}