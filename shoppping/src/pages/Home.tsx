import React from 'react';
import { Col, Row } from "react-bootstrap";
import { FaSwimmer, FaUmbrellaBeach } from 'react-icons/fa';
import { BiSun } from 'react-icons/bi';
import { GiPalmTree, GiSharkFin } from 'react-icons/gi';
import beach from '/imgs/wall_beach1.jpg';

//import './styles.css';
//import "./index.scss";

export function Home() {
  return (

    <div className="main--home">

      <div className="filter--rgba">
      
        <div className="home--first">
          
          <div className="home--sec">
            <h1>Welcome to Anarkan !</h1>
            <h3>Let your dreams come true&nbsp;<BiSun className="color--sun"/>
            &nbsp;<GiPalmTree className="color--palmer" /></h3>
          </div>

          <a href="./images/wall_beach1" target="_blank" className="beach--img">
            <img className="img--home" src={beach} alt="beach" />
          </a>

          <div className="home--third">
            <article>
              <h3 className="art--title">History&nbsp;<FaUmbrellaBeach /></h3>
              <p>
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              </p>
              <p>
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !<br />
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              </p>

            </article>
          </div>

          <div className="home--third">
            <article>
              <h3 className="art--title">Our Work&nbsp;<GiPalmTree /></h3>
              <p>
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you
              </p>
              <p>
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you<br />
              Last week we found special features for you !
              Last week we found special features for you !
              </p>

            </article>
          </div>

          <div className="home--third">
            <article>
              <h3 className="art--title">Yes we can !&nbsp;&nbsp;
                <FaSwimmer />&nbsp;&nbsp;
                <GiSharkFin />
              </h3>
              <p>
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              </p>
              <p>
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !
              Last week we found special features for you !<br />
              Last week we found special features for you !
              </p>

            </article>
          </div>
        </div>
      </div>
    </div>

  );
};
