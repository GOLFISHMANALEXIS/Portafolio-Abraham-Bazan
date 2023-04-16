import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>Baja ↓</span>
            <h1>Contactame</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Informacion ↓</h3>
          <p className='contact_text'>Somos un despacho jurídico con especialistas en diversas áreas del Derecho,
especialmente en las áreas civil, familiar, mercantil y penal. Además, contamos
con el respaldo técnico de peritos en diversas ciencias forenses y cibernéticas. </p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Consulta</h3>
          <span>Para una experiencia mas personalizada le damos la opcion de Whatsapp</span>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            style={{textAlign: "center"}}
            className="btn"
          >
            <a href="https://api.whatsapp.com/send?phone=5212382358561&text=Hola%20!!" style={{textAlign: "center"}}>→</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact