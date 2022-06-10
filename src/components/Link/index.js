import NextLink from "next/link"
import StyledLink from "../StyledLink"

const Link = ({ children, href, ...props }) => {
    return (
        <NextLink href={href}>
            <StyledLink href={href}>{children}</StyledLink>
        </NextLink>
    )
}

export default Link