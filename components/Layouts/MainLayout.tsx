import React, { ReactNode } from 'react'

import Nav from './../Nav';
// import Footer from './Footer';
// import { motion } from 'framer-motion';

// const variants = {
//     hidden: { opacity: 0, x: 0, y: 0 },
//     enter: { opacity: 1, x: 0, y: 0 },
//     exit: { opacity: 0, x: 0, y: 0 },
// }

type Props = {
    children: ReactNode
}


const MainLayout = ({ children }: Props): JSX.Element => (
       
        <>
            {/* <Nav /> */}
            {children}
            
          
        </>

    )

export default MainLayout; 