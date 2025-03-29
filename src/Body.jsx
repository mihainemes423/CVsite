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
            <p>Salut, numele meu este Mihail Nemeș. Sunt student în anul I la UTCN Calculatoare și Tehnologia informației. Sunt pasionat de dezvoltare web, concepte avansate de algoritmică și structuri de date, cu cunoștințe în React, Node.js și Flutter, în căutarea unei oportunități pentru a aplica și dezvolta abilitățile mele tehnice. Am lucrat la proiecte academice și personale, aplicând principii de dezvoltare full-stack și colaborând în echipe de studenți.</p>
          </div>
        </div>
        <div className ="body-details">
          <div className="body-text-left">
            <h3>Informații personale:</h3>
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
            <h3>Educație:</h3>
            <h4>Licență: UTCN (2024 - prezent)</h4>
            <p>Specializare: Calculatoare și Tehnologia Informației</p>
            <h4>Liceu: Liceul Teoretic "Lucian Blaga" din Cluj-Napoca (2020 - 2024)</h4>
            <p>Profil: Mate-Info intensiv engleză</p>
          </div>
        </div>
        <div className ="body-details">
          <div className='body-text-left'>
            <h3>Proiecte personale:</h3>
              <p>Joc de memorie în Flutter: 'buton spre joc' </p>
              <p>Algoritm min-max cu alpha-bet pruning în C pentru a determina cea mai buna mutare in joc-ul "Path of Exam" (Vezi regulile jocului pe git): 'buton spre joc'</p>
          </div>
        </div>
      </div>
    </div>
  )
}
