import React from 'react';
import './App.css';
import image1 from "./img/me.jpg";
import image2 from "./img/photo1.jpg";
import image3 from "./img/spao1.jpg";
import image4 from "./img/spao2.jpg";
import image5 from "./img/busan1.jpg";
import image6 from "./img/busan2.jpg";
import image7 from "./img/sky.jpg";
import image8 from "./img/boram.jpg";
import image9 from "./img/bom.jpg";
import image10 from "./img/123.jpg";
import image11 from "./img/cafe1.jpg";
import image12 from "./img/cafe2.jpg";
import image13 from "./img/cafe3.jpg";


function App() {
  return (
    <div className="App">
      <header>
      <h1>HEEJIN</h1>
      <nav>
        <ul className="navbar">
          <li><a href="#">Picture</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Major</a></li>
          <li><a href="#">Hobby</a></li>
          <li><a href="#">Friends</a></li>
        </ul>
      </nav>
      </header>

      <div id="profile">
        <img src={image1}/>
          <p> 이름 : 김희진
            생일 : 1999. 07. 14 <br/>
            2012. 02 마산 양덕 초등학교 졸업 <br/>
            2015. 02 마산 양덕 여자 중학교 졸업 <br/>
            2018. 02 마산 무학 여자 고등학교 졸업<br/>
            2018. 03 ~ 경상대학교 컴퓨터 과학과 재학 <br/>
          </p>
      </div>

        <div id="photo">
          <img src={image2} alt=""/>
        </div>

        <div  id="photos">
          <img width="45%" src={image3} alt=""/>
          <img width="45%" src={image4} alt=""/>
        </div>
          <p> WITH <b>SPAO</b> WORKMATE </p>

          <div id="photo">
            <img src="./img/busan.jpg" alt=""/>
          </div>

          <div  id="photos">
            <img  width="45%" src={image5} alt=""/>
            <img width="45%" src={image6} alt=""/>
          </div>
          <p> BUSAN - GWANGANRI </p>

          <div id="photo">
            <img src={image7} alt=""/>
          </div>

          <div  id="photos">
            <img  width="30%" src={image8} alt=""/>
            <img width="30%" src={image9} alt=""/>
            <img width="30%" src={image10} alt=""/>
          </div>
            <p> WITH BORAM CS </p>

            <div id="photo">
              <img src={image11} alt=""/>
            </div>

            <div  id="photos">
              <img  width="45%" src={image12} alt=""/>
              <img width="45%" src={image13} alt=""/>
            </div>
            <p> WITH FRIEND </p>

            <footer>
            <div id="copyright">
             copyright ⓒ 2021 All Rights Reserved
            </div>
            </footer>
    </div>


  );
}

export default App;
