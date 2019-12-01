import React, {Fragment, useState} from 'react'

import SearchHeader from './SerchHeader'
import Content from './Content'
import './Search.css'
import fakeMap from './fake-map.png'
import Wizard from "../Wizard/Wizard";

import result from '../Apartment/result.json'

function Search() {
    const [showWizard, setShowWizard] = useState(true)
    const [res, setRes] = useState(null)

    const onSearch = (data) => {
        setShowWizard(false)
        setRes(result)
        console.log(result)
    };

  return (
      <Fragment>
          <SearchHeader />
          <div id="__next">
              {showWizard && <Wizard onSearch={onSearch} />}
              <header className="MuiBox-root-1 jss2">
                  <div className="MuiBox-root-1 jss5 jss3 jss4"><a className="" target="_self" title="Loft" href="/">
                      <svg className="MuiSvgIcon-root-6" focusable="false" viewBox="0 0 140 119" color="#FF6023"
                           aria-hidden="false" role="img" style={{"fontSize":"40px"}}>
                          <g fill-rule="evenodd">
                              <polygon
                                  points="139.879 44.876 131.05 44.876 131.05 28.52 118.437 28.52 118.437 98.567 131.05 98.567 131.05 57.384 139.879 57.384"></polygon>
                              <path
                                  d="M90.6315856,119.840822 L78.018973,119.840822 L78.018973,27.6728524 C78.018973,12.9617512 90.087982,0.991235202 104.922937,0.991235202 L104.922937,13.4996113 C97.0425766,13.4996113 90.6315856,19.8576189 90.6315856,27.6728524 L90.6315856,119.840822 Z"></path>
                              <path
                                  d="M71.6580365,44.8761224 L112.073027,44.8761224 L108.497351,57.3844985 L71.6580365,57.3844985 C68.8358742,68.510984 58.6626658,76.7724816 46.5798919,76.7724816 C32.3225946,76.7724816 20.724036,65.2697789 20.724036,51.1303105 C20.724036,36.9908421 32.3225946,25.4881394 46.5798919,25.4881394 C58.6626658,25.4881394 68.8358742,33.749637 71.6580365,44.8761224 Z M32.0753874,51.1303105 C32.0753874,59.0618718 38.5822342,65.514943 46.5798919,65.514943 C54.5775495,65.514943 61.0843964,59.0618718 61.0843964,51.1303105 C61.0843964,43.1987492 54.5775495,36.7456779 46.5798919,36.7456779 C38.5822342,36.7456779 32.0753874,43.1987492 32.0753874,51.1303105 Z"></path>
                              <path
                                  d="M34.9076757,97.7300156 C15.6595676,97.7300156 -0.000252252253,82.1996158 -0.000252252253,63.1093321 L-0.000252252253,28.5199196 L12.6123604,28.5199196 L12.6123604,63.1093321 C12.6123604,75.3012464 22.6141622,85.2216395 34.9076757,85.2216395 L34.9076757,97.7300156 Z"></path>
                          </g>
                          <title>Loft</title></svg>
                  </a>
                      <nav className="jss15 jss17" data-testid="header-navigation">
                          <ul>
                              <li className="jss19"><a className="" target="_self" data-heapid="navigation-acquisitions"
                                                       href="/vender-apartamento"><span
                                  className="MuiTypography-root-30 jss22 jss21 MuiTypography-body2-31 MuiTypography-colorTextPrimary-55">Vender apartamento</span></a>
                              </li>
                              <li className="jss19"><a className="" target="_self" data-heapid="navigation-listing"
                                                       href="/homes"><span
                                  className="MuiTypography-root-30 jss22 jss21 MuiTypography-body2-31 MuiTypography-colorTextPrimary-55">Comprar apartamento</span></a>
                              </li>
                              <li className="jss19"><a className="" target="_self" data-heapid="navigation-howItWorks"
                                                       href="/#how-it-works"><span
                                  className="MuiTypography-root-30 jss21 MuiTypography-body2-31 MuiTypography-colorTextSecondary-56">Como funciona</span></a>
                              </li>
                              <li className="jss19"><a className="" target="_self" data-heapid="navigation-realtor"
                                                       href="/corretor-de-imoveis"><span
                                  className="MuiTypography-root-30 jss21 MuiTypography-body2-31 MuiTypography-colorTextSecondary-56">Para corretores</span></a>
                              </li>
                              <li className="jss19"><a className="" target="_self" data-heapid="navigation-financing"
                                                       href="/financiamento-imobiliario"><span
                                  className="MuiTypography-root-30 jss21 MuiTypography-body2-31 MuiTypography-colorTextSecondary-56">Financiamento</span></a>
                              </li>
                              <li className="jss19"><a className="" target="_self" data-heapid="navigation-aboutUs"
                                                       href="/about-us"><span
                                  className="MuiTypography-root-30 jss21 MuiTypography-body2-31 MuiTypography-colorTextSecondary-56">Sobre nós</span></a>
                              </li>
                              <li className="jss19"><a className="" target="_self" data-heapid="navigation-credit"
                                                       href="/antecipacao-de-venda"><span
                                  className="MuiTypography-root-30 jss21 MuiTypography-body2-31 MuiTypography-colorTextSecondary-56">Crédito</span></a>
                              </li>
                          </ul>
                      </nav>
                      <div className="MuiBox-root-1 jss60">
                          <button className="MuiButtonBase-root-90 MuiButton-root-62 MuiButton-text-64 jss61" tabIndex="0"
                                  type="button" data-testid="mobile_menu_button"><span className="MuiButton-label-63"><span
                              className="MuiButton-startIcon-85 MuiButton-iconSizeMedium-88"><svg className="MuiSvgIcon-root-6"
                                                                                                  focusable="false"
                                                                                                  viewBox="0 0 18 12"
                                                                                                  aria-hidden="true"
                                                                                                  role="presentation"><path
                              d="M17.438 2H.562C.252 2 0 1.552 0 1s.252-1 .562-1h16.876c.31 0 .562.448.562 1s-.252 1-.562 1zM.562 5h16.876c.31 0 .562.448.562 1s-.252 1-.562 1H.562C.252 7 0 6.552 0 6s.252-1 .562-1zM.59 10h11.82c.325 0 .59.448.59 1s-.265 1-.59 1H.59C.266 12 0 11.552 0 11s.265-1 .59-1z"></path></svg></span>Menu</span>
                          </button>
                      </div>
                  </div>
              </header>
              <section className="Layout__Content-sc-1ho2u-0 bylXHG">
                  <div className="jss106">
                      <div className="jss107">
                          <div data-testid="header-filter-home-list">
                              <div className=""></div>
                              <div className="jss110 jss118">
                                  <div className="MuiGrid-root jss121 MuiGrid-container MuiGrid-spacing-xs-3">
                                      <div
                                          className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-space-between">
                                          <div
                                              className="MuiGrid-root jss116 jss120 MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-grid-xs-12">
                                              <div className="MuiGrid-root jss117 MuiGrid-item">
                                                  <button
                                                      className="MuiButtonBase-root-273 MuiButton-root-245 jss232 MuiButton-text-247 jss237 jss242 jss228"
                                                      tabIndex="0" type="button" data-testId="header-filter-home-list-button"><span
                                                      className="MuiButton-label-246"><div className="jss230"><svg
                                                      className="MuiSvgIcon-root-276 jss231 MuiSvgIcon-fontSizeSmall-283" focusable="false"
                                                      viewBox="0 0 16 16" aria-hidden="true" role="presentation"><g id="Symbols" stroke="none"
                                                                                                                    stroke-width="1" fill="none"
                                                                                                                    fill-rule="evenodd"
                                                                                                                    stroke-linecap="round"
                                                                                                                    stroke-linejoin="round"><g
                                                      id="toolbar-/-with-map-/-desktop" transform="translate(-62.000000, -116.000000)"
                                                      stroke="#6E8391"><g id="toolbar"><g id="filter"
                                                                                          transform="translate(38.000000, 100.000000)"><g
                                                      id="button/with-icon/left/secondary/normal/m"><g
                                                      transform="translate(54.500000, 24.000000) rotate(180.000000) translate(-54.500000, -24.000000)"
                                                      id="Alignment-Container"><g transform="translate(24.000000, 12.000000)"><g
                                                      id="setup-preferences" transform="translate(45.000000, 4.000000)"><line x1="11.5" y1="3.5"
                                                                                                                              x2="15.5" y2="3.5"
                                                                                                                              id="Path"></line><line
                                                      x1="0.5" y1="3.5" x2="2.5" y2="3.5" id="Path"></line><line x1="4.5" y1="12.5" x2="0.5"
                                                                                                                 y2="12.5" id="Path"></line><line
                                                      x1="15.5" y1="12.5" x2="13.5" y2="12.5" id="Path"></line><circle id="Oval" cx="5.5"
                                                                                                                       cy="3.5" r="3"></circle><circle
                                                      id="Oval" cx="10.5" cy="12.5" r="3"></circle></g></g></g></g></g></g></g></g></svg>Filtros</div></span>
                                                  </button>
                                                  <button
                                                      className="MuiButtonBase-root-273 MuiButton-root-245 jss232 MuiButton-text-247 jss241 jss229"
                                                      tabIndex="0" type="button" data-testId="mobile-filter-home-list-button"><span
                                                      className="MuiButton-label-246"><div className="jss230"><svg
                                                      className="MuiSvgIcon-root-276 jss231 MuiSvgIcon-fontSizeSmall-283" focusable="false"
                                                      viewBox="0 0 16 16" aria-hidden="true" role="presentation"><g id="filter" stroke="none"
                                                                                                                    stroke-width="1" fill="none"
                                                                                                                    fill-rule="evenodd"
                                                                                                                    stroke-linecap="round"
                                                                                                                    stroke-linejoin="round"><g
                                                      id="toolbar---with-map---xs" transform="translate(-69.000000, -524.000000)"
                                                      stroke="#191F23"><g id="toolbar" transform="translate(53.000000, 512.000000)"><g
                                                      id="button/with-icon/left/secondary/normal/m"><g id="Alignment-Container"
                                                                                                       transform="translate(49.000000, 20.000000) scale(-1, -1) translate(-49.000000, -20.000000) translate(16.000000, 8.000000)"><g
                                                      id="setup-preferences" transform="translate(50.000000, 4.000000)"><line x1="11.5" y1="3.5"
                                                                                                                              x2="15.5" y2="3.5"
                                                                                                                              id="Path"></line><line
                                                      x1="0.5" y1="3.5" x2="2.5" y2="3.5" id="Path"></line><line x1="4.5" y1="12.5" x2="0.5"
                                                                                                                 y2="12.5" id="Path"></line><line
                                                      x1="15.5" y1="12.5" x2="13.5" y2="12.5" id="Path"></line><circle id="Oval" cx="5.5"
                                                                                                                       cy="3.5" r="3"></circle><circle
                                                      id="Oval" cx="10.5" cy="12.5"
                                                      r="3"></circle></g></g></g></g></g></g></svg>Filtros</div></span></button>
                                              </div>
                                              <div className="MuiGrid-root jss117 MuiGrid-item">
                                                  <div className="jss285">
                                                      <button className="MuiButtonBase-root-333 MuiButton-root-305 jss292 jss297 jss302"
                                                              tabIndex="0" type="button" data-testid="orderby-listings"><span
                                                          className="MuiButton-label-306"><div>Mais relevantes</div><svg
                                                          className="MuiSvgIcon-root-336 jss289 jss291" focusable="false" viewBox="0 0 24 24"
                                                          aria-hidden="true" role="presentation"><path
                                                          d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span>
                                                      </button>
                                                      <div className="jss287"></div>
                                                  </div>
                                              </div>
                                              <div className="MuiGrid-root jss115 jss119 jss117 MuiGrid-item">
                                                  <div
                                                      className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center">
                                                      <div className="MuiGrid-root MuiGrid-item"><span className="MuiSwitch-root jss359"><span
                                                          className="MuiButtonBase-root MuiIconButton-root jss377 MuiSwitch-switchBase jss360 MuiSwitch-colorSecondary jss378 Mui-checked jss363"
                                                          aria-disabled="false" data-testId="listing-maps-btn-close"><span
                                                          className="MuiIconButton-label"><input type="checkbox" checked=""
                                                                                                 className="jss380 MuiSwitch-input"/><span
                                                          className="MuiSwitch-thumb jss361"></span></span></span><span
                                                          className="MuiSwitch-track jss362"></span></span></div>
                                                      <div className="MuiGrid-root MuiGrid-item"><p
                                                          className="MuiTypography-root jss347 jss348 MuiTypography-body1 MuiTypography-colorTextSecondary">Ver
                                                          Mapa</p></div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="MuiGrid-root jss116 jss120 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12">
                                              <div className="MuiGrid-root jss117 MuiGrid-item"><h1
                                                  className="MuiTypography-root MuiTypography-h6"
                                                  data-testid="home-listing-title">Apartamentos à venda em São Paulo</h1></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="MuiGrid-root jss121 MuiGrid-container MuiGrid-spacing-xs-3"></div>
                          </div>
                          <div className="jss108">
                              <section>
                                  <div className="MuiGrid-root jss121 jss434 jss440 MuiGrid-container MuiGrid-spacing-xs-3">
                                      <div className="jss439 jss441">
                                          <div className="MuiPaper-root MuiPaper-elevation0 jss442 jss447 MuiPaper-rounded">
                                              <svg className="MuiSvgIcon-root jss443" focusable="false" viewBox="0 0 23 22" aria-hidden="true"
                                                   role="presentation">
                                                  <g fill="none" fill-rule="evenodd" stroke="#FF6023" transform="translate(1 1)">
                                                      <path d="M3 11h1.435c1.57 0 3.013.731 3.826 2h2.87C12.52 13 14 14.546 14 16H7.304"></path>
                                                      <path
                                                          d="M13.302 14h4.78C20.431 14 21 16 21 16l-10.315 3.873a4.435 4.435 0 01-2.425-.09L3 17.5"></path>
                                                      <circle cx="14.5" cy="7.5" r="2.5" stroke-linecap="square"></circle>
                                                      <circle cx="8.5" cy="2.5" r="2.5" stroke-linecap="square"></circle>
                                                      <path stroke-linecap="square" d="M0 10h3v8H0z"></path>
                                                  </g>
                                              </svg>
                                              <span className="MuiTypography-root jss444 MuiTypography-button">Precisa de um financiamento?<a
                                                  className="jss445" target="_blank" rel="noopener noreferrer"
                                                  href="https://www.loft.com.br/financiamento-imobiliario">Simule seu parcelamento e solicite uma proposta</a></span>
                                          </div>
                                      </div>
                                      <div className="jss436">
                                          <ul className="MuiGridList-root jss435" style={{"margin":"-12px"}} data-testid="home-list">
                                              <Content res={res} />
                                          </ul>
                                      </div>
                                  </div>
                              </section>
                              <section className="MuiBox-root jss542">
                                  <div className="WithScrollTracker">
                                      <section className="HomeNotFound">
                                          <div className="MuiGrid-root jss121 MuiGrid-container MuiGrid-spacing-xs-3">
                                              <div className="jss543" data-testid="home-not-found">
                                                  <div className="jss545"><img src="static/images/illustra-girl.svg" alt="" className="jss546"/>
                                                  </div>
                                                  <div
                                                      className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column MuiGrid-wrap-xs-nowrap MuiGrid-justify-xs-space-between"
                                                      style={{"height":"100%"}}>
                                                      <div className="MuiGrid-root MuiGrid-item"><h4
                                                          className="MuiTypography-root MuiTypography-h4">Ainda não encontrou?</h4></div>
                                                      <div className="MuiGrid-root MuiGrid-item"><p
                                                          className="MuiTypography-root jss544 MuiTypography-body1 MuiTypography-colorTextSecondary">Deixe
                                                          seu contato para te ajudarmos a encontrar o apartamento ideal.</p></div>
                                                      <div
                                                          className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-9 MuiGrid-grid-md-6"
                                                          style={{"position":"relative"}}>
                                                          <form>
                                                              <div className="MuiGrid-root MuiGrid-container">
                                                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                                                      <div className="MuiFormControl-root"><label className="MuiFormLabel-root"><p
                                                                          className="MuiTypography-root jss548 MuiTypography-body1">Como você prefere ser
                                                                          contactado?</p></label>
                                                                          <div className="MuiFormGroup-root jss551" role="radiogroup"><label
                                                                              className="MuiFormControlLabel-root"
                                                                              data-testid="home-not-found_whatsapp"><span
                                                                              className="MuiButtonBase-root MuiIconButton-root jss377 MuiRadio-root MuiRadio-colorSecondary jss378 Mui-checked MuiIconButton-colorSecondary"
                                                                              aria-disabled="false"><span className="MuiIconButton-label"><input
                                                                              type="radio" checked="" className="jss380" name="contactPreference"
                                                                              value="851"/><div className="jss579 jss581"><svg className="MuiSvgIcon-root"
                                                                                                                               focusable="false"
                                                                                                                               viewBox="0 0 24 24"
                                                                                                                               aria-hidden="true"
                                                                                                                               role="presentation"><path
                                                                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg><svg
                                                                              className="MuiSvgIcon-root jss580" focusable="false" viewBox="0 0 24 24"
                                                                              aria-hidden="true" role="presentation"><path
                                                                              d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path></svg></div></span></span><span
                                                                              className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1"><p
                                                                              className="MuiTypography-root MuiTypography-body1">WhatsApp</p></span></label><label
                                                                              className="MuiFormControlLabel-root" data-testid="home-not-found_email"><span
                                                                              className="MuiButtonBase-root MuiIconButton-root jss377 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary"
                                                                              aria-disabled="false"><span className="MuiIconButton-label"><input
                                                                              type="radio" className="jss380" name="contactPreference" value="850"/><div
                                                                              className="jss579"><svg className="MuiSvgIcon-root" focusable="false"
                                                                                                      viewBox="0 0 24 24" aria-hidden="true"
                                                                                                      role="presentation"><path
                                                                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg><svg
                                                                              className="MuiSvgIcon-root jss580" focusable="false" viewBox="0 0 24 24"
                                                                              aria-hidden="true" role="presentation"><path
                                                                              d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path></svg></div></span></span><span
                                                                              className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1"><p
                                                                              className="MuiTypography-root MuiTypography-body1">Email</p></span></label>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                                                      <div className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-flex-end">
                                                                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8">
                                                                              <div className="jss547"><label className="MuiFormLabel-root"><p
                                                                                  className="MuiTypography-root jss548 MuiTypography-body1">Fone</p>
                                                                              </label><input type="text" value="" name="contact"
                                                                                             data-testid="home-not-found_contact" id="contact"
                                                                                             variant="outlined" placeholder="Ex: (11) 91234-1234"
                                                                                             className="jss549"/></div>
                                                                          </div>
                                                                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-4">
                                                                              <button
                                                                                  className="MuiButtonBase-root MuiButton-root MuiButton-contained jss553 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge MuiButton-fullWidth"
                                                                                  tabIndex="0" type="submit" data-testid="home-not-found_submit"><span
                                                                                  className="MuiButton-label">Quero ajuda</span></button>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </form>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </section>
                                  </div>
                              </section>
                              <section className="MuiBox-root jss610"></section>
                          </div>
                          <div className="jss109">
                              <div className="jss611">
                                  <img className="fake-map" src={fakeMap} alt=""/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="jss618">
                      <div className="MuiGrid-root jss121 jss619 MuiGrid-container MuiGrid-spacing-xs-3">
                          <div>
                              <div className="jss621"><h5
                                  className="MuiTypography-root MuiTypography-h5 MuiTypography-colorPrimary MuiTypography-gutterBottom"
                                  data-testid="seo-listings-title">Encontre apartamentos à venda em São Paulo na Loft</h5>
                                  <p className="MuiTypography-root MuiTypography-body2 MuiTypography-paragraph">
                                      <div data-testid="seo-listings-body"><p>Em busca de apartamentos à venda em São Paulo? A Loft é o
                                          lugar certo! Vendemos imóveis de alto padrão reformados por nós (e com garantia de um ano) nos
                                          melhores bairros da cidade, como Jardins, Vila Nova Conceição e Itaim Bibi.</p><p>Nosso objetivo é
                                          descomplicar a compra e venda de apartamentos no Brasil para tornar esse momento mais gostoso e
                                          tranquilo para você, que não precisa se preocupar em gerir obras, nem contratar advogados. O
                                          primeiro passo acontece online mesmo: basta dar uma olhada em nossas opções de imóveis acima,
                                          selecionar aquelas que te interessam e agendar a visita.</p><p>É fácil entender porque morar nessa
                                          cidade, a mais rica do Brasil e uma das maiores do mundo, com seus 12 milhões de habitantes e mais
                                          de 400 anos de história. Qualquer um pode se sentir parte dela – seja no centro, onde ainda toca o
                                          sino do Pátio do Colégio, erguido em 1554, ou nos novos marcos de nosso skyline, como o imponente
                                          complexo JK Iguatemi.</p><p>Na chamada selva de pedra, que transforma toda semana o concreto da
                                          famosa Avenida Paulista em espaço de convivência e lazer, também há verde, como mostram os parques
                                          Ibirapuera, Villa-Lobos e Cantareira e as incontáveis praças que oferecem descanso no dia a dia.
                                          Na cultura, a animação também se garante. Festivais, shows e festas nunca param, e se abrem para
                                          todos os gostos.</p><p>Do alto do Terraço Itália ao vão do Museu de Arte de São Paulo, da premiada
                                          gastronomia (italiana, japonesa, chinesa, coreana, latinoamericana, brasileira) aos tradicionais
                                          pastéis de feira, há um mar de oportunidades que merece ser desbravado. Na capital que nunca
                                          dorme, existe um lar perfeito para cada um – e nós podemos te ajudar a comprar o apartamento em SP
                                          que você merece.</p><p>Nesse mercado cheio de joias a serem descobertas, aproveite para descobrir
                                          nosso portfólio, que reúne uma curadoria exclusiva de apartamentos de luxo à venda em SP. E
                                          reforçamos: todos foram cuidadosamente renovados e usam os melhores acabamentos disponíveis.</p>
                                          <p>Nossos arquitetos fazem questão de utilizar todo o potencial de cada espaço, derrubando e
                                              erguendo paredes para criar lares contemporâneos em que você e sua família poderão viver por
                                              muitos anos – e valorizando ainda mais o imóvel adquirido em uma cidade onde o investimento
                                              imobiliário é certeiro.</p><p>Fundada como uma pequena vila no alto de uma terra desconhecida,
                                              São Paulo se agigantou para se tornar um dos maiores polos econômicos e culturais do planeta.
                                              Aqui, todo mundo encontra seu lugar. Com a Loft, você certamente vai encontrar sua nova casa</p>
                                      </div>
                                  </p>
                              </div>
                              <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss620 MuiButton-textPrimary"
                                      tabIndex="0" type="button"><span className="MuiButton-label">Ver mais</span></button>
                          </div>
                      </div>
                  </div>
              </section>
              <footer className="MuiBox-root-622 jss623">
                  <div className="MuiBox-root-622 jss626 jss624 jss625">
                      <div className="MuiGrid-root-627 MuiGrid-container-628 MuiGrid-spacing-xs-2-651">
                          <div
                              className="MuiGrid-root-627 MuiGrid-item-629 MuiGrid-grid-xs-12-673 MuiGrid-grid-sm-12-687 MuiGrid-grid-md-5-694">
                              <div className="MuiBox-root-622 jss730">
                                  <svg className="MuiSvgIcon-root-731" focusable="false" viewBox="0 0 140 119" color="#FFFFFF"
                                       aria-hidden="false" role="img" style={{"fontSize":"56px"}}>
                                      <g fill-rule="evenodd">
                                          <polygon
                                              points="139.879 44.876 131.05 44.876 131.05 28.52 118.437 28.52 118.437 98.567 131.05 98.567 131.05 57.384 139.879 57.384"></polygon>
                                          <path
                                              d="M90.6315856,119.840822 L78.018973,119.840822 L78.018973,27.6728524 C78.018973,12.9617512 90.087982,0.991235202 104.922937,0.991235202 L104.922937,13.4996113 C97.0425766,13.4996113 90.6315856,19.8576189 90.6315856,27.6728524 L90.6315856,119.840822 Z"></path>
                                          <path
                                              d="M71.6580365,44.8761224 L112.073027,44.8761224 L108.497351,57.3844985 L71.6580365,57.3844985 C68.8358742,68.510984 58.6626658,76.7724816 46.5798919,76.7724816 C32.3225946,76.7724816 20.724036,65.2697789 20.724036,51.1303105 C20.724036,36.9908421 32.3225946,25.4881394 46.5798919,25.4881394 C58.6626658,25.4881394 68.8358742,33.749637 71.6580365,44.8761224 Z M32.0753874,51.1303105 C32.0753874,59.0618718 38.5822342,65.514943 46.5798919,65.514943 C54.5775495,65.514943 61.0843964,59.0618718 61.0843964,51.1303105 C61.0843964,43.1987492 54.5775495,36.7456779 46.5798919,36.7456779 C38.5822342,36.7456779 32.0753874,43.1987492 32.0753874,51.1303105 Z"></path>
                                          <path
                                              d="M34.9076757,97.7300156 C15.6595676,97.7300156 -0.000252252253,82.1996158 -0.000252252253,63.1093321 L-0.000252252253,28.5199196 L12.6123604,28.5199196 L12.6123604,63.1093321 C12.6123604,75.3012464 22.6141622,85.2216395 34.9076757,85.2216395 L34.9076757,97.7300156 Z"></path>
                                      </g>
                                      <title>Loft</title></svg>
                                  <p className="MuiTypography-root-746 jss740 MuiTypography-body2-747 MuiTypography-colorInherit-768">Rua
                                      Augusta, 2840, 17º Andar<br/>Jardim América - São Paulo - SP<br/>CRECI: 032842-J</p>
                                  <div className="MuiBox-root-622 jss776"><a href="https://www.instagram.com/loft_br/" target="_blank"
                                                                             rel="noopener noreferrer" className="jss777"
                                                                             title="Instagram">
                                      <svg className="MuiSvgIcon-root-731 jss778 MuiSvgIcon-colorPrimary-732" focusable="false"
                                           viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                          <g fill-rule="evenodd">
                                              <path fill-rule="nonzero"
                                                    d="M16.5 0h-9A7.5 7.5 0 0 0 0 7.5v9A7.5 7.5 0 0 0 7.5 24h9a7.5 7.5 0 0 0 7.5-7.5v-9A7.5 7.5 0 0 0 16.5 0zm5.25 16.5a5.256 5.256 0 0 1-5.25 5.25h-9a5.256 5.256 0 0 1-5.25-5.25v-9A5.256 5.256 0 0 1 7.5 2.25h9a5.256 5.256 0 0 1 5.25 5.25v9z"></path>
                                              <path fill-rule="nonzero"
                                                    d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 9.75A3.755 3.755 0 0 1 8.25 12 3.754 3.754 0 0 1 12 8.25 3.754 3.754 0 0 1 15.75 12 3.755 3.755 0 0 1 12 15.75z"></path>
                                              <circle cx="18.45" cy="5.55" r="1"></circle>
                                          </g>
                                      </svg>
                                  </a><a href="https://facebook.com/loftbr" target="_blank" rel="noopener noreferrer" className="jss777"
                                         title="Facebook">
                                      <svg className="MuiSvgIcon-root-731 jss778 MuiSvgIcon-colorPrimary-732" focusable="false"
                                           viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                          <path fill-rule="evenodd"
                                                d="M21 0H3C1.345 0 0 1.345 0 3v18c0 1.654 1.345 3 3 3h9v-8.25H9V12h3V9a4.5 4.5 0 0 1 4.5-4.5h3v3.75H18c-.828 0-1.5-.078-1.5.75v3h3.75l-1.5 3.75H16.5V24H21c1.654 0 3-1.346 3-3V3c0-1.655-1.346-3-3-3z"></path>
                                      </svg>
                                  </a><a href="https://www.linkedin.com/company/loftbr/" target="_blank" rel="noopener noreferrer"
                                         className="jss777" title="LinkedIn">
                                      <svg className="MuiSvgIcon-root-731 jss778 MuiSvgIcon-colorPrimary-732" focusable="false"
                                           viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                          <path fill-rule="nonzero"
                                                d="M22.228 0H1.773C.794 0 0 .77 0 1.72v20.56C0 23.23.794 24 1.773 24h20.455c.98 0 1.772-.77 1.772-1.72V1.72C24 .77 23.207 0 22.228 0zM7.276 20.09H3.65V9.254h3.626V20.09zM5.463 7.774H5.44c-1.216 0-2.004-.832-2.004-1.873 0-1.062.811-1.871 2.051-1.871 1.24 0 2.003.808 2.028 1.87 0 1.042-.787 1.874-2.05 1.874zM20.348 20.09h-3.625v-5.798c0-1.457-.526-2.45-1.837-2.45-1.002 0-1.598.67-1.86 1.317-.096.232-.12.555-.12.878v6.052H9.282s.047-9.819 0-10.835h3.625v1.536c.48-.738 1.34-1.791 3.266-1.791 2.386 0 4.175 1.548 4.175 4.877v6.214zm-6.785-7.374c.266-.437.638-.962 1.008-1.473v1.473h-1.008z"></path>
                                      </svg>
                                  </a></div>
                              </div>
                          </div>
                          <div
                              className="MuiGrid-root-627 MuiGrid-item-629 MuiGrid-grid-xs-12-673 MuiGrid-grid-sm-4-679 MuiGrid-grid-md-3-692">
                              <div className="MuiBox-root-622 jss782"><h6
                                  className="MuiTypography-root-746 MuiTypography-subtitle2-758 MuiTypography-colorPrimary-769">Como
                                  falar com a gente</h6>
                                  <div className="MuiBox-root-622 jss784"><a href="tel:(11) 4118-5638" className="jss779">
                                      <svg className="MuiSvgIcon-root-731 jss780 MuiSvgIcon-colorPrimary-732 MuiSvgIcon-fontSizeSmall-738"
                                           focusable="false" viewBox="0 0 20 20" aria-hidden="true" role="presentation">
                                          <path
                                              d="M17.0045 3.01769C15.1339 1.10732 12.6429 0.0566101 9.99554 0.0566101C4.53125 0.0566101 0.0848214 4.58693 0.0848214 10.1543C0.0848214 11.9328 0.540179 13.6703 1.40625 15.2032L0 20.434L5.25446 19.0285C6.70089 19.8336 8.33036 20.2566 9.99107 20.2566H9.99554C15.4554 20.2566 20 15.7263 20 10.1589C20 7.4616 18.875 4.92807 17.0045 3.01769ZM9.99554 18.5554C8.51339 18.5554 7.0625 18.1506 5.79911 17.3865L5.5 17.2045L2.38393 18.0369L3.21429 14.9394L3.01786 14.621C2.19196 13.2837 1.75893 11.7418 1.75893 10.1543C1.75893 5.52848 5.45536 1.7623 10 1.7623C12.2009 1.7623 14.2679 2.63562 15.8214 4.22305C17.375 5.81048 18.3304 7.91645 18.3259 10.1589C18.3259 14.7893 14.5357 18.5554 9.99554 18.5554ZM14.5134 12.2694C14.2679 12.142 13.0491 11.5325 12.8214 11.4506C12.5938 11.3642 12.4286 11.3233 12.2634 11.578C12.0982 11.8327 11.625 12.3967 11.4777 12.5696C11.3348 12.7379 11.1875 12.7606 10.942 12.6333C9.48661 11.8919 8.53125 11.3096 7.57143 9.63124C7.31696 9.18548 7.82589 9.21732 8.29911 8.25304C8.37946 8.08474 8.33929 7.93919 8.27679 7.81183C8.21429 7.68447 7.71875 6.44273 7.51339 5.93784C7.3125 5.4466 7.10714 5.51483 6.95536 5.50573C6.8125 5.49664 6.64732 5.49664 6.48214 5.49664C6.31696 5.49664 6.04911 5.56032 5.82143 5.81048C5.59375 6.0652 4.95536 6.6747 4.95536 7.91645C4.95536 9.15819 5.84375 10.359 5.96429 10.5273C6.08929 10.6956 7.70982 13.2428 10.1964 14.339C11.7679 15.0303 12.3839 15.0895 13.1696 14.9712C13.6473 14.8984 14.6339 14.3617 14.8393 13.7704C15.0446 13.1791 15.0446 12.6742 14.9821 12.5696C14.9241 12.4559 14.7589 12.3922 14.5134 12.2694Z"></path>
                                      </svg>
                                      <span
                                          className="MuiTypography-root-746 jss740 MuiTypography-body2-747 MuiTypography-colorInherit-768">(11) 4118-5638</span></a><span
                                      className="MuiTypography-root-746 jss740 jss781 MuiTypography-body2-747 MuiTypography-colorInherit-768">Canal ideal para tirar dúvidas, entender o nosso processo de compra e venda e saber status do seu negócio.</span><span
                                      className="MuiTypography-root-746 jss740 MuiTypography-overline-759 MuiTypography-colorInherit-768">Segunda à sexta das 8h às 21h<br/>Aos sábados, das 8h às 15h</span>
                                  </div>
                                  <div className="MuiBox-root-622 jss785"><a href="mailto:tenhointeresse@loft.com.br"
                                                                             className="jss779">
                                      <svg className="MuiSvgIcon-root-731 jss780 MuiSvgIcon-colorPrimary-732 MuiSvgIcon-fontSizeSmall-738"
                                           focusable="false" viewBox="0 0 20 16" aria-hidden="true" role="presentation">
                                          <path
                                              d="M18.125 0.641479H1.875C0.839453 0.641479 0 1.49677 0 2.55186V14.0141C0 15.0692 0.839453 15.9245 1.875 15.9245H18.125C19.1605 15.9245 20 15.0692 20 14.0141V2.55186C20 1.49677 19.1605 0.641479 18.125 0.641479ZM18.125 2.55186V4.17588C17.2491 4.90258 15.8528 6.03257 12.8677 8.41413C12.2098 8.94135 10.9067 10.208 10 10.1932C9.09344 10.2081 7.78988 8.94115 7.13231 8.41413C4.14766 6.03292 2.75098 4.9027 1.875 4.17588V2.55186H18.125ZM1.875 14.0141V6.62725C2.77008 7.35363 4.03941 8.37294 5.97414 9.91652C6.82793 10.6013 8.32312 12.1129 10 12.1037C11.6686 12.1129 13.1449 10.6232 14.0255 9.91684C15.9602 8.37329 17.2299 7.35371 18.125 6.62729V14.0141H1.875Z"></path>
                                      </svg>
                                      <span
                                          className="MuiTypography-root-746 jss740 MuiTypography-body2-747 MuiTypography-colorInherit-768">tenhointeresse@loft.com.br</span></a><span
                                      className="MuiTypography-root-746 jss740 jss781 MuiTypography-body2-747 MuiTypography-colorInherit-768">Use o e-mail para envio de propostas e documentos ou solicitações fora do nosso horário de atendimento por telefone.</span><span
                                      className="MuiTypography-root-746 jss740 MuiTypography-overline-759 MuiTypography-colorInherit-768">Respostas em até um dia útil.</span>
                                  </div>
                              </div>
                          </div>
                          <div
                              className="MuiGrid-root-627 MuiGrid-item-629 MuiGrid-grid-xs-12-673 MuiGrid-grid-sm-4-679 MuiGrid-grid-md-2-691">
                              <div className="MuiBox-root-622 jss788"><h6
                                  className="MuiTypography-root-746 MuiTypography-subtitle2-758 MuiTypography-colorPrimary-769">Sobre
                                  a Loft</h6>
                                  <nav className="MuiBox-root-622 jss789">
                                      <ul>
                                          <li className="MuiBox-root-622 jss790"><a href="https://loftimoveis.zendesk.com/hc/pt-br"
                                                                                    rel="noopener noreferrer" target="_blank"
                                                                                    title="Central de Ajuda"
                                                                                    data-heapid="footer-navigation-helpDesk"><span
                                              className="MuiTypography-root-746 jss740 MuiTypography-body2-747 MuiTypography-colorInherit-768">Central de Ajuda</span></a>
                                          </li>
                                          <li className="MuiBox-root-622 jss791"><a data-heapid="footer-navigation-howItWorks"
                                                                                    title="Como funciona" href="/#how-it-works"><span
                                              className="MuiTypography-root-746 jss740 MuiTypography-body2-747 MuiTypography-colorInherit-768">Como funciona</span></a>
                                          </li>
                                          <li className="MuiBox-root-622 jss792"><a data-heapid="footer-navigation-aboutUs"
                                                                                    title="Sobre nós &amp; Carreiras" href="/about-us"><span
                                              className="MuiTypography-root-746 jss740 MuiTypography-body2-747 MuiTypography-colorInherit-768">Sobre nós &amp; Carreiras</span></a>
                                          </li>
                                          <li className="MuiBox-root-622 jss793"><a data-heapid="footer-navigation-whyLoft"
                                                                                    title="Por que a Loft é diferente?" href="/#why"><span
                                              className="MuiTypography-root-746 jss740 MuiTypography-body2-747 MuiTypography-colorInherit-768">Por que a Loft é diferente?</span></a>
                                          </li>
                                          <li className="MuiBox-root-622 jss794"><a
                                              href="https://blog.loft.com.br/?utm_source=site&amp;utm_medium=referral&amp;utm&amp;utm_content=footer"
                                              rel="noopener noreferrer" target="_blank" title="Blog da Loft"
                                              data-heapid="footer-navigation-blog"><span
                                              className="MuiTypography-root-746 jss740 MuiTypography-body2-747 MuiTypography-colorInherit-768">Blog da Loft</span></a>
                                          </li>
                                          <li className="MuiBox-root-622 jss795"><a href="mailto:imprensa@loft.com.br" className="jss786">
                                              <svg
                                                  className="MuiSvgIcon-root-731 jss787 MuiSvgIcon-colorPrimary-732 MuiSvgIcon-fontSizeSmall-738"
                                                  focusable="false" viewBox="0 0 20 16" aria-hidden="true" role="presentation">
                                                  <path
                                                      d="M18.125 0.641479H1.875C0.839453 0.641479 0 1.49677 0 2.55186V14.0141C0 15.0692 0.839453 15.9245 1.875 15.9245H18.125C19.1605 15.9245 20 15.0692 20 14.0141V2.55186C20 1.49677 19.1605 0.641479 18.125 0.641479ZM18.125 2.55186V4.17588C17.2491 4.90258 15.8528 6.03257 12.8677 8.41413C12.2098 8.94135 10.9067 10.208 10 10.1932C9.09344 10.2081 7.78988 8.94115 7.13231 8.41413C4.14766 6.03292 2.75098 4.9027 1.875 4.17588V2.55186H18.125ZM1.875 14.0141V6.62725C2.77008 7.35363 4.03941 8.37294 5.97414 9.91652C6.82793 10.6013 8.32312 12.1129 10 12.1037C11.6686 12.1129 13.1449 10.6232 14.0255 9.91684C15.9602 8.37329 17.2299 7.35371 18.125 6.62729V14.0141H1.875Z"></path>
                                              </svg>
                                              <span
                                                  className="MuiTypography-root-746 jss740 MuiTypography-body2-747 MuiTypography-colorInherit-768">imprensa@loft.com.br</span></a>
                                          </li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                          <div
                              className="MuiGrid-root-627 MuiGrid-item-629 MuiGrid-grid-xs-12-673 MuiGrid-grid-sm-4-679 MuiGrid-grid-md-2-691">
                              <div className="MuiBox-root-622 jss796"><h6
                                  className="MuiTypography-root-746 MuiTypography-subtitle2-758 MuiTypography-colorPrimary-769">Políticas
                                  e Ouvidoria</h6>
                                  <ul className="MuiBox-root-622 jss797">
                                      <li className="MuiBox-root-622 jss798"><a
                                          href="https://prd.tmf-group.com/Ethicall/AcessoExterno/wf_ManterComunicadoIdentificacao.aspx?I=Nzc3MA==&amp;L=MQ=="
                                          rel="noopener noreferrer" target="_blank" title="Canal de denúncias"
                                          data-heapid="footer-link-reporting-channel"><span
                                          className="MuiTypography-root-746 jss740 MuiTypography-body2-747 MuiTypography-colorInherit-768">Canal de denúncias</span></a>
                                      </li>
                                      <li className="MuiBox-root-622 jss799"><a
                                          href="https://content.loft.com.br/legal/privacypolicies/20191015.pdf" rel="noopener noreferrer"
                                          target="_blank" title="Políticas de Privacidade" data-heapid="footer-link-privacy"><span
                                          className="MuiTypography-root-746 jss740 MuiTypography-body2-747 MuiTypography-colorInherit-768">Políticas de Privacidade</span></a>
                                      </li>
                                      <li className="MuiBox-root-622 jss800"><a
                                          href="https://content.loft.com.br/legal/ethicsguide/20191015.pdf" rel="noopener noreferrer"
                                          target="_blank" title="Guia de Conduta e Ética" data-heapid="footer-link-conduct"><span
                                          className="MuiTypography-root-746 jss740 MuiTypography-body2-747 MuiTypography-colorInherit-768">Guia de Conduta e Ética</span></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </footer>
          </div>
      </Fragment>
  );
}

export default Search;
