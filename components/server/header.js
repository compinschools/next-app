export default async function Header({currentPage}){
    return (
        <header>
            <h1>Header</h1>
            <a href="/" className={ currentPage === "/" && "underline"} >Home</a>
            <a href="/new-page" className={ currentPage === "/new-page" && "underline"} >New Page</a>
            <a href="/new-page/folder" className={ currentPage === "/new-page/folder" && "underline"}>folder</a>
        </header>
    );
}