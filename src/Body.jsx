import React from 'react'
import "../styles/Body.css"
import RedirectButton from "./components/RedirectButton"

export default function Body() {
  return (
    <div>
      <div className="body-section">
        <div className="body-content">
          <img src="../Assets/first_image.jpg" alt="Descriere imagine" className="body-image" />
          <div className ="body-text-left">
            <h3>Curriculum vitae - Computer engineer</h3>
            <p>Salut, numele meu este Mihail Nemeș. Sunt student in anul I la UTCN Calculatoare și Tehnologia informației. Sunt un om dedidcat, profesional si ambitios in proiectele mele, indiferent de subiect.</p>
          </div>
        </div>
        <div className ="body-details">
          <div className="body-text-left">
            <h3>Informații personale</h3>
            <p>Nume: Nemeș Mihail</p>
            <p>Oraș: CLuj-Napoca, Romania</p>
            <p>Email: mihainemes423@gmail.com</p>
            <div style={{display: "inline-flex", gap: "20px" }}>
              <RedirectButton
                url="https://www.linkedin.com/in/mihail-neme%C8%99-0291a0328/"
                text="LinkedIn"
                width="180px"
                height="45px"
                fontSize="1em"
              />
              <RedirectButton
                url="https://github.com/mihainemes423"
                text="Github"
                width="135px"
                height="45px"
                fontSize="1em"
              />
            </div>
          </div>
          <div className = "body-text-right">
            <h3>Lorem ipsum dolor sit</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis quisquam quaerat optio sed harum, 
              dolor in culpa rem eaque dolores odit quia aut mollitia ducimus error eos. Reprehenderit, doloremque?</p>
          </div>
        </div>
      </div>
    </div>
  )
}
