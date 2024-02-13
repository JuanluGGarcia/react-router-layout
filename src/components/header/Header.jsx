import { StyledNavLink } from "./style";

const Header = () => {
	return (
		<header>
			<h1>SOY UN HEADER</h1>
            <nav>
                <ul>
                    <li>
                        {/* NavLink tiene una particularidad y es que tiene una clase 'active' por la cual se puede dar estilos a los elementos de navegación facilmente. Ver style.js */}
                        <StyledNavLink to="/">Home</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/section">Fotos cabra</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/contact">Contact</StyledNavLink>
                    </li>
                </ul>
            </nav>
		</header>
	);
};

export default Header;
