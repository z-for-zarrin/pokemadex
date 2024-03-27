const Navigation = () => {
    return (
        <>
        <nav>
            <ul>
                <li><Link to= "/pokemon">All Pokemon </Link></li>
                <li><Link to= "/pokemon/generation"> Pokemon By Generation </Link></li>
            </ul>
        </nav>
        <Outlet/>
        </>
    );
}
 
export default Navigation;