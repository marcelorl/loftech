import React, {Fragment} from 'react'

import ApartmentHeader from './ApartmentHeader'
import Content from './Content'
import './Apartment.css'

export default () => {
    return (
        <Fragment>
            <ApartmentHeader />
            <div id="__next">
                <header className="MuiBox-root-1 jss2">
                    <div className="MuiBox-root-1 jss5 jss3 jss4"><a className="" target="_self" title="Loft" href="/">
                        <svg className="MuiSvgIcon-root-6" focusable="false" viewBox="0 0 140 119" color="#FF6023"
                             aria-hidden="false"
                             role="img" style={{"font-size":"40px"}}>
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
                                    type="button" data-testid="mobile_menu_button"><span
                                className="MuiButton-label-63"><span
                                className="MuiButton-startIcon-85 MuiButton-iconSizeMedium-88"><svg
                                className="MuiSvgIcon-root-6"
                                focusable="false"
                                viewBox="0 0 18 12"
                                aria-hidden="true"
                                role="presentation"><path
                                d="M17.438 2H.562C.252 2 0 1.552 0 1s.252-1 .562-1h16.876c.31 0 .562.448.562 1s-.252 1-.562 1zM.562 5h16.876c.31 0 .562.448.562 1s-.252 1-.562 1H.562C.252 7 0 6.552 0 6s.252-1 .562-1zM.59 10h11.82c.325 0 .59.448.59 1s-.265 1-.59 1H.59C.266 12 0 11.552 0 11s.265-1 .59-1z"></path></svg></span>Menu</span>
                            </button>
                        </div>
                    </div>
                </header>
                <section className="Layout__Content-sc-1ho2u-0 hHwrwv">
                    <div data-testid="banner-gallery-grid" className="jss127">
                        <div className="jss146">
                            <div className="jss140">
                                <div className="jss128"><img className="jss130"
                                                             src="https://content.loft.com.br/homes/1pl39d9/desktop_banner.jpg"
                                                             alt="desktop_banner.jpg"/></div>
                                <div className="jss129"><img className="jss131"
                                                             src="https://content.loft.com.br/homes/1pl39d9/desktop_bathroom0.jpg"
                                                             alt="desktop_bathroom0.jpg"/><img className="jss131"
                                                                                               src="https://content.loft.com.br/homes/1pl39d9/desktop_kitchen1.jpg"
                                                                                               alt="desktop_kitchen1.jpg"/><img
                                    className="jss131" src="https://content.loft.com.br/homes/1pl39d9/desktop_living3.jpg"
                                    alt="desktop_living3.jpg"/><img className="jss131"
                                                                    src="https://content.loft.com.br/homes/1pl39d9/desktop_master_bedroom7.jpg"
                                                                    alt="desktop_master_bedroom7.jpg"/></div>
                            </div>
                        </div>
                        <div className="jss148"><img className="jss141"
                                                     src="https://content.loft.com.br/homes/1pl39d9/desktop_banner.jpg"
                                                     alt="desktop_banner.jpg"/></div>
                    </div>
                    <div>
                        <div className="jss159" platform="desktop">
                            <div className="MuiGrid-root jss164 MuiGrid-container MuiGrid-spacing-xs-3">
                                <div className="MuiGrid-root MuiGrid-container">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
                                        <div className="jss269"><h6
                                            className="MuiTypography-root jss271 MuiTypography-h6">Alameda Jaú
                                            731</h6><h6
                                            className="MuiTypography-root jss270 jss271 MuiTypography-subtitle2">Ap.41 •
                                            Edifício Palácio dos Jardins • Jardim Paulista, São Paulo-SP</h6></div>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
                                        <div className="jss161">
                                            <div>
                                                <div
                                                    className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center"><span
                                                    className="MuiTypography-root jss302 MuiTypography-caption">Preço de venda</span>
                                                    <p className="MuiTypography-root jss305 jss303 MuiTypography-body1 MuiTypography-colorTextSecondary">
                                                        <svg className="MuiSvgIcon-root" focusable="false"
                                                             viewBox="0 0 24 24"
                                                             aria-hidden="true" role="presentation">
                                                            <path
                                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                                                        </svg>
                                                    </p>
                                                </div>
                                                <h6 className="MuiTypography-root jss302 MuiTypography-h6">R$ 1.765.000</h6>
                                            </div>
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss328"
                                                    tabIndex="0" type="button" data-testid="banner-interesting-button"><span
                                                className="MuiButton-label"><span
                                                className="MuiTypography-root MuiTypography-button">Agendar visita</span></span>
                                            </button>
                                            <div className="jss163">
                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-text"
                                                        tabIndex="0"
                                                        type="button" data-testid="banner-share-button"><span
                                                    className="MuiButton-label"><div className="jss362"><svg
                                                    className="MuiSvgIcon-root jss361" focusable="false" viewBox="0 0 24 24"
                                                    aria-hidden="true" role="presentation"><path
                                                    d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></svg><span
                                                    className="MuiTypography-root jss360 MuiTypography-button">Corretores</span></div></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Content />
                </section>
                <footer className="MuiBox-root-562 jss563">
                    <div className="MuiBox-root-562 jss566 jss564 jss565">
                        <div className="MuiGrid-root-567 MuiGrid-container-568 MuiGrid-spacing-xs-2-591">
                            <div
                                className="MuiGrid-root-567 MuiGrid-item-569 MuiGrid-grid-xs-12-613 MuiGrid-grid-sm-12-627 MuiGrid-grid-md-5-634">
                                <div className="MuiBox-root-562 jss670">
                                    <svg className="MuiSvgIcon-root-671" focusable="false" viewBox="0 0 140 119"
                                         color="#FFFFFF"
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
                                    <p className="MuiTypography-root-686 jss680 MuiTypography-body2-687 MuiTypography-colorInherit-708">
                                        Rua Augusta, 2840, 17º Andar<br/>Jardim América - São Paulo - SP<br/>CRECI: 032842-J
                                    </p>
                                    <div className="MuiBox-root-562 jss716"><a href="https://www.instagram.com/loft_br/"
                                                                               target="_blank"
                                                                               rel="noopener noreferrer" className="jss717"
                                                                               title="Instagram">
                                        <svg className="MuiSvgIcon-root-671 jss718 MuiSvgIcon-colorPrimary-672"
                                             focusable="false"
                                             viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                            <g fill-rule="evenodd">
                                                <path fill-rule="nonzero"
                                                      d="M16.5 0h-9A7.5 7.5 0 0 0 0 7.5v9A7.5 7.5 0 0 0 7.5 24h9a7.5 7.5 0 0 0 7.5-7.5v-9A7.5 7.5 0 0 0 16.5 0zm5.25 16.5a5.256 5.256 0 0 1-5.25 5.25h-9a5.256 5.256 0 0 1-5.25-5.25v-9A5.256 5.256 0 0 1 7.5 2.25h9a5.256 5.256 0 0 1 5.25 5.25v9z"></path>
                                                <path fill-rule="nonzero"
                                                      d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 9.75A3.755 3.755 0 0 1 8.25 12 3.754 3.754 0 0 1 12 8.25 3.754 3.754 0 0 1 15.75 12 3.755 3.755 0 0 1 12 15.75z"></path>
                                                <circle cx="18.45" cy="5.55" r="1"></circle>
                                            </g>
                                        </svg>
                                    </a><a href="https://facebook.com/loftbr" target="_blank" rel="noopener noreferrer"
                                           className="jss717" title="Facebook">
                                        <svg className="MuiSvgIcon-root-671 jss718 MuiSvgIcon-colorPrimary-672"
                                             focusable="false"
                                             viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                            <path fill-rule="evenodd"
                                                  d="M21 0H3C1.345 0 0 1.345 0 3v18c0 1.654 1.345 3 3 3h9v-8.25H9V12h3V9a4.5 4.5 0 0 1 4.5-4.5h3v3.75H18c-.828 0-1.5-.078-1.5.75v3h3.75l-1.5 3.75H16.5V24H21c1.654 0 3-1.346 3-3V3c0-1.655-1.346-3-3-3z"></path>
                                        </svg>
                                    </a><a href="https://www.linkedin.com/company/loftbr/" target="_blank"
                                           rel="noopener noreferrer"
                                           className="jss717" title="LinkedIn">
                                        <svg className="MuiSvgIcon-root-671 jss718 MuiSvgIcon-colorPrimary-672"
                                             focusable="false"
                                             viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                            <path fill-rule="nonzero"
                                                  d="M22.228 0H1.773C.794 0 0 .77 0 1.72v20.56C0 23.23.794 24 1.773 24h20.455c.98 0 1.772-.77 1.772-1.72V1.72C24 .77 23.207 0 22.228 0zM7.276 20.09H3.65V9.254h3.626V20.09zM5.463 7.774H5.44c-1.216 0-2.004-.832-2.004-1.873 0-1.062.811-1.871 2.051-1.871 1.24 0 2.003.808 2.028 1.87 0 1.042-.787 1.874-2.05 1.874zM20.348 20.09h-3.625v-5.798c0-1.457-.526-2.45-1.837-2.45-1.002 0-1.598.67-1.86 1.317-.096.232-.12.555-.12.878v6.052H9.282s.047-9.819 0-10.835h3.625v1.536c.48-.738 1.34-1.791 3.266-1.791 2.386 0 4.175 1.548 4.175 4.877v6.214zm-6.785-7.374c.266-.437.638-.962 1.008-1.473v1.473h-1.008z"></path>
                                        </svg>
                                    </a></div>
                                </div>
                            </div>
                            <div
                                className="MuiGrid-root-567 MuiGrid-item-569 MuiGrid-grid-xs-12-613 MuiGrid-grid-sm-4-619 MuiGrid-grid-md-3-632">
                                <div className="MuiBox-root-562 jss722"><h6
                                    className="MuiTypography-root-686 MuiTypography-subtitle2-698 MuiTypography-colorPrimary-709">
                                    Como falar com a gente</h6>
                                    <div className="MuiBox-root-562 jss724"><a href="tel:(11) 4118-5638" className="jss719">
                                        <svg
                                            className="MuiSvgIcon-root-671 jss720 MuiSvgIcon-colorPrimary-672 MuiSvgIcon-fontSizeSmall-678"
                                            focusable="false" viewBox="0 0 20 20" aria-hidden="true" role="presentation">
                                            <path
                                                d="M17.0045 3.01769C15.1339 1.10732 12.6429 0.0566101 9.99554 0.0566101C4.53125 0.0566101 0.0848214 4.58693 0.0848214 10.1543C0.0848214 11.9328 0.540179 13.6703 1.40625 15.2032L0 20.434L5.25446 19.0285C6.70089 19.8336 8.33036 20.2566 9.99107 20.2566H9.99554C15.4554 20.2566 20 15.7263 20 10.1589C20 7.4616 18.875 4.92807 17.0045 3.01769ZM9.99554 18.5554C8.51339 18.5554 7.0625 18.1506 5.79911 17.3865L5.5 17.2045L2.38393 18.0369L3.21429 14.9394L3.01786 14.621C2.19196 13.2837 1.75893 11.7418 1.75893 10.1543C1.75893 5.52848 5.45536 1.7623 10 1.7623C12.2009 1.7623 14.2679 2.63562 15.8214 4.22305C17.375 5.81048 18.3304 7.91645 18.3259 10.1589C18.3259 14.7893 14.5357 18.5554 9.99554 18.5554ZM14.5134 12.2694C14.2679 12.142 13.0491 11.5325 12.8214 11.4506C12.5938 11.3642 12.4286 11.3233 12.2634 11.578C12.0982 11.8327 11.625 12.3967 11.4777 12.5696C11.3348 12.7379 11.1875 12.7606 10.942 12.6333C9.48661 11.8919 8.53125 11.3096 7.57143 9.63124C7.31696 9.18548 7.82589 9.21732 8.29911 8.25304C8.37946 8.08474 8.33929 7.93919 8.27679 7.81183C8.21429 7.68447 7.71875 6.44273 7.51339 5.93784C7.3125 5.4466 7.10714 5.51483 6.95536 5.50573C6.8125 5.49664 6.64732 5.49664 6.48214 5.49664C6.31696 5.49664 6.04911 5.56032 5.82143 5.81048C5.59375 6.0652 4.95536 6.6747 4.95536 7.91645C4.95536 9.15819 5.84375 10.359 5.96429 10.5273C6.08929 10.6956 7.70982 13.2428 10.1964 14.339C11.7679 15.0303 12.3839 15.0895 13.1696 14.9712C13.6473 14.8984 14.6339 14.3617 14.8393 13.7704C15.0446 13.1791 15.0446 12.6742 14.9821 12.5696C14.9241 12.4559 14.7589 12.3922 14.5134 12.2694Z"></path>
                                        </svg>
                                        <span
                                            className="MuiTypography-root-686 jss680 MuiTypography-body2-687 MuiTypography-colorInherit-708">(11) 4118-5638</span></a><span
                                        className="MuiTypography-root-686 jss680 jss721 MuiTypography-body2-687 MuiTypography-colorInherit-708">Canal ideal para tirar dúvidas, entender o nosso processo de compra e venda e saber status do seu negócio.</span><span
                                        className="MuiTypography-root-686 jss680 MuiTypography-overline-699 MuiTypography-colorInherit-708">Segunda à sexta das 8h às 21h<br/>Aos sábados, das 8h às 15h</span>
                                    </div>
                                    <div className="MuiBox-root-562 jss725"><a href="mailto:tenhointeresse@loft.com.br"
                                                                               className="jss719">
                                        <svg
                                            className="MuiSvgIcon-root-671 jss720 MuiSvgIcon-colorPrimary-672 MuiSvgIcon-fontSizeSmall-678"
                                            focusable="false" viewBox="0 0 20 16" aria-hidden="true" role="presentation">
                                            <path
                                                d="M18.125 0.641479H1.875C0.839453 0.641479 0 1.49677 0 2.55186V14.0141C0 15.0692 0.839453 15.9245 1.875 15.9245H18.125C19.1605 15.9245 20 15.0692 20 14.0141V2.55186C20 1.49677 19.1605 0.641479 18.125 0.641479ZM18.125 2.55186V4.17588C17.2491 4.90258 15.8528 6.03257 12.8677 8.41413C12.2098 8.94135 10.9067 10.208 10 10.1932C9.09344 10.2081 7.78988 8.94115 7.13231 8.41413C4.14766 6.03292 2.75098 4.9027 1.875 4.17588V2.55186H18.125ZM1.875 14.0141V6.62725C2.77008 7.35363 4.03941 8.37294 5.97414 9.91652C6.82793 10.6013 8.32312 12.1129 10 12.1037C11.6686 12.1129 13.1449 10.6232 14.0255 9.91684C15.9602 8.37329 17.2299 7.35371 18.125 6.62729V14.0141H1.875Z"></path>
                                        </svg>
                                        <span
                                            className="MuiTypography-root-686 jss680 MuiTypography-body2-687 MuiTypography-colorInherit-708">tenhointeresse@loft.com.br</span></a><span
                                        className="MuiTypography-root-686 jss680 jss721 MuiTypography-body2-687 MuiTypography-colorInherit-708">Use o e-mail para envio de propostas e documentos ou solicitações fora do nosso horário de atendimento por telefone.</span><span
                                        className="MuiTypography-root-686 jss680 MuiTypography-overline-699 MuiTypography-colorInherit-708">Respostas em até um dia útil.</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="MuiGrid-root-567 MuiGrid-item-569 MuiGrid-grid-xs-12-613 MuiGrid-grid-sm-4-619 MuiGrid-grid-md-2-631">
                                <div className="MuiBox-root-562 jss728"><h6
                                    className="MuiTypography-root-686 MuiTypography-subtitle2-698 MuiTypography-colorPrimary-709">
                                    Sobre a Loft</h6>
                                    <nav className="MuiBox-root-562 jss729">
                                        <ul>
                                            <li className="MuiBox-root-562 jss730"><a
                                                href="https://loftimoveis.zendesk.com/hc/pt-br"
                                                rel="noopener noreferrer" target="_blank"
                                                title="Central de Ajuda"
                                                data-heapid="footer-navigation-helpDesk"><span
                                                className="MuiTypography-root-686 jss680 MuiTypography-body2-687 MuiTypography-colorInherit-708">Central de Ajuda</span></a>
                                            </li>
                                            <li className="MuiBox-root-562 jss731"><a
                                                data-heapid="footer-navigation-howItWorks"
                                                title="Como funciona" href="/#how-it-works"><span
                                                className="MuiTypography-root-686 jss680 MuiTypography-body2-687 MuiTypography-colorInherit-708">Como funciona</span></a>
                                            </li>
                                            <li className="MuiBox-root-562 jss732"><a
                                                data-heapid="footer-navigation-aboutUs"
                                                title="Sobre nós &amp; Carreiras"
                                                href="/about-us"><span
                                                className="MuiTypography-root-686 jss680 MuiTypography-body2-687 MuiTypography-colorInherit-708">Sobre nós &amp; Carreiras</span></a>
                                            </li>
                                            <li className="MuiBox-root-562 jss733"><a
                                                data-heapid="footer-navigation-whyLoft"
                                                title="Por que a Loft é diferente?"
                                                href="/#why"><span
                                                className="MuiTypography-root-686 jss680 MuiTypography-body2-687 MuiTypography-colorInherit-708">Por que a Loft é diferente?</span></a>
                                            </li>
                                            <li className="MuiBox-root-562 jss734"><a
                                                href="https://blog.loft.com.br/?utm_source=site&amp;utm_medium=referral&amp;utm&amp;utm_content=footer"
                                                rel="noopener noreferrer" target="_blank" title="Blog da Loft"
                                                data-heapid="footer-navigation-blog"><span
                                                className="MuiTypography-root-686 jss680 MuiTypography-body2-687 MuiTypography-colorInherit-708">Blog da Loft</span></a>
                                            </li>
                                            <li className="MuiBox-root-562 jss735"><a href="mailto:imprensa@loft.com.br"
                                                                                      className="jss726">
                                                <svg
                                                    className="MuiSvgIcon-root-671 jss727 MuiSvgIcon-colorPrimary-672 MuiSvgIcon-fontSizeSmall-678"
                                                    focusable="false" viewBox="0 0 20 16" aria-hidden="true"
                                                    role="presentation">
                                                    <path
                                                        d="M18.125 0.641479H1.875C0.839453 0.641479 0 1.49677 0 2.55186V14.0141C0 15.0692 0.839453 15.9245 1.875 15.9245H18.125C19.1605 15.9245 20 15.0692 20 14.0141V2.55186C20 1.49677 19.1605 0.641479 18.125 0.641479ZM18.125 2.55186V4.17588C17.2491 4.90258 15.8528 6.03257 12.8677 8.41413C12.2098 8.94135 10.9067 10.208 10 10.1932C9.09344 10.2081 7.78988 8.94115 7.13231 8.41413C4.14766 6.03292 2.75098 4.9027 1.875 4.17588V2.55186H18.125ZM1.875 14.0141V6.62725C2.77008 7.35363 4.03941 8.37294 5.97414 9.91652C6.82793 10.6013 8.32312 12.1129 10 12.1037C11.6686 12.1129 13.1449 10.6232 14.0255 9.91684C15.9602 8.37329 17.2299 7.35371 18.125 6.62729V14.0141H1.875Z"></path>
                                                </svg>
                                                <span
                                                    className="MuiTypography-root-686 jss680 MuiTypography-body2-687 MuiTypography-colorInherit-708">imprensa@loft.com.br</span></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div
                                className="MuiGrid-root-567 MuiGrid-item-569 MuiGrid-grid-xs-12-613 MuiGrid-grid-sm-4-619 MuiGrid-grid-md-2-631">
                                <div className="MuiBox-root-562 jss736"><h6
                                    className="MuiTypography-root-686 MuiTypography-subtitle2-698 MuiTypography-colorPrimary-709">
                                    Políticas e Ouvidoria</h6>
                                    <ul className="MuiBox-root-562 jss737">
                                        <li className="MuiBox-root-562 jss738"><a
                                            href="https://prd.tmf-group.com/Ethicall/AcessoExterno/wf_ManterComunicadoIdentificacao.aspx?I=Nzc3MA==&amp;L=MQ=="
                                            rel="noopener noreferrer" target="_blank" title="Canal de denúncias"
                                            data-heapid="footer-link-reporting-channel"><span
                                            className="MuiTypography-root-686 jss680 MuiTypography-body2-687 MuiTypography-colorInherit-708">Canal de denúncias</span></a>
                                        </li>
                                        <li className="MuiBox-root-562 jss739"><a
                                            href="https://content.loft.com.br/legal/privacypolicies/20191015.pdf"
                                            rel="noopener noreferrer" target="_blank" title="Políticas de Privacidade"
                                            data-heapid="footer-link-privacy"><span
                                            className="MuiTypography-root-686 jss680 MuiTypography-body2-687 MuiTypography-colorInherit-708">Políticas de Privacidade</span></a>
                                        </li>
                                        <li className="MuiBox-root-562 jss740"><a
                                            href="https://content.loft.com.br/legal/ethicsguide/20191015.pdf"
                                            rel="noopener noreferrer" target="_blank" title="Guia de Conduta e Ética"
                                            data-heapid="footer-link-conduct"><span
                                            className="MuiTypography-root-686 jss680 MuiTypography-body2-687 MuiTypography-colorInherit-708">Guia de Conduta e Ética</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Fragment>
    )
}