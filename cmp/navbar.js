class UserNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
          `
            <nav class="navbar navbar-expand-md navbar-dark bg-light sub-navbar navbar-fixed-top">
                <div class="container">
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#subNavBarDropdown" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand sub-navbar"></a>
                    <div class="collapse navbar-collapse" id="subNavBarDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link subnav-link" href="Que es RICIT.html">RICIT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link subnav-link" href="index.html">Principal</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link subnav-link" href="AgendaMensual.html">Agenda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link subnav-link" href="Recursos Multimedia.html">Multimedia</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link subnav-link" href="Noticias y Artículos.html">Noticias</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link subnav-link" href="Redes y Asociaciones.html">Redes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link subnav-link" href="Revistas.html">Revistas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link subnav-link" href="Sitios de Interés.html">Sitios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link subnav-link" href="#">Motor</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link subnav-link" href="#">Perfiles</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define("user-navbar", UserNavbar);
