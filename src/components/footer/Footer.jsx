import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import logoFinal from '../../dependecies/images/logoSolo.png';

import logoTxt from '../../dependecies/images/logoText.png'

import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='black' style={{ backgroundColor: '#1e4f60' }}>
      <MDBRow className='d-flex justify-content-center'>
        <MDBCol md="2" lg="2" xl="2" className='mt-5'>
          <div >
            <img src={`${logoFinal}`}  className='logoSoloFoot'/><br />
            <img src={`${logoTxt}`}  className='logoTxtFoot'/>
          </div>
        </MDBCol>
        <MDBCol md="10" lg="10" xl="10" className='mt-2'>


          <MDBContainer className='p-4 mx-auto'>
            <section className='mb-4'>
              <a href='' className='me-4 text-reset' id='icon-link'>
                <FaFacebookF className="icon" />
              </a>

              <a href='' className='me-4 text-reset' id='icon-link'>
                <FaTwitter className="icon" />
              </a>

              <a href='' className='me-4 text-reset' id='icon-link'>
                <FaGoogle className="icon" />
              </a>

              <a href='' className='me-4 text-reset' id='icon-link'>
                <FaInstagram className="icon" />
              </a>

              <a href='' className='me-4 text-reset' id='icon-link'>
                <FaLinkedinIn className="icon" />
              </a>

              <a href='' className='me-4 text-reset' id='icon-link'>
                <FaGithub className="icon" />
              </a>
            </section>

            <section className=''>
              <form action=''>
                <MDBRow className='d-flex justify-content-center'>
                  <MDBCol size="auto">
                    <p className='pt-2'>
                      <strong style={{ color: 'white' }}>Sign up for our newsletter</strong>
                    </p>
                  </MDBCol>

                  <MDBCol md='5' start style={{ zIndex: 0 }}>
                    <MDBInput contrast type='email' label='Email address' className='mb-4' />
                  </MDBCol>

                  <MDBCol size="auto">
                    <MDBBtn outline color='light' type='submit' className='mb-4' id='boutton'>
                      Subscribe
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </form>
            </section>
            <section className=''>
              <MDBRow>

                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    ANDALUS CUP
                  </h6>
                  <p>
                    Experience the thrill of Andalus Cup 2030 – where the world unites for the love of football. Stay tuned for updates, match schedules, and everything you need to know about this epic event!
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Explorer</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Morocco
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Spain
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Portugal
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Satdiums</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Morocco
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Spain
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Portugal
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-4 text-center'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <div className='centrer'>
                    <div>
                  <p className='d-flex align-items-center'>
                    <FaHome className="icon me-2" />
                    Bd Nil, Casablanca, Morocco
                  </p>
                  <p className='d-flex align-items-center'>
                    <FaEnvelope className="icon me-2" />
                    IAGI@ensam-casa.com
                  </p>
                  <p className='d-flex align-items-center'>
                    <FaPhone className="icon me-2" /> + 06 00 00 00 00
                  </p>
                  <p className='d-flex align-items-center'>
                    <FaPrint className="icon me-2" /> + 05 00 00 00 00
                  </p>
                  </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>
        </MDBCol>
      </MDBRow>



      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2030 Copyright
      </div>
    </MDBFooter>
  );
}