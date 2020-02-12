import { useLink } from '../app/AppContext'
export const Link: React.SFC<{ as?: string, href: string }> = ({ as, href, children }) => {
    const Link = useLink()
    return <Link as={as} href={href}>{children}</Link>
}
export default Link