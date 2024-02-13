import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
    display: inline-block;
    color: red;
    text-decoration: none;
    margin-bottom: 1rem;

    /* con active podemos hacer destacar la parte del nav que está activa. Active es una propiedad de NavLink */
    &.active {
        color: green;
        border-bottom: 2px solid blue;
    }
`;

export { StyledNavLink };