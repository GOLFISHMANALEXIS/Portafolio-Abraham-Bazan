import React from 'react'
import "./About.scss";

import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/WIN_20200817_16_54_10_Pro.jpg"
const About = () => {


  return (
    <div className="container " id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>Quien soy?</span>
        <h1>Acerca de mi</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p>El abogado Abraham Bazán, es licenciado en Derecho por la Benemérita
Universidad Autónoma de Puebla, con cédula profesional 5402831. Estudió la
maestría en Derecho Constitucional y Amparo en la Universidad Popular
Autónoma del Estado de Puebla, obteniendo título y cédula profesional 9679861.
También estudio el Doctorado en Derecho en el Centro de Ciencias Jurídicas de
Puebla, obteniendo título y cédula profesional 11525444. Se ha desarrollado en
diversas áreas del derecho, como la docencia y la judicatura; también ha
participado en diversos foros académicos exponiendo temas de actualidad y
relevancia jurídica. Actualmente, se dedica de tiempo completo al litigio en las
materias civil y penal.
</p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
        
          <motion.a href='#' download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            >
              <center>
                     Descargar
              </center>
          </motion.a>
              
        </motion.div>

      </div>

    </div>
  )
}

export default About