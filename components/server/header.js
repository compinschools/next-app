export default async function Header({currentPage}){
    return (
        <header className="bg-slate-500 border-b border-b-white p-2 pb-2">
            <h1>Header</h1>
            <a href="/" className={` pr-2 ${currentPage === "/" && "underline"}`}>Home</a>
            <a href="/todo" className={` pr-2 ${currentPage === "/todo" && "underline"}`}>Todo</a>
            <a href="/facts" className={` pr-2 ${currentPage === "/facts" && "underline"}`}>Facts</a>
            <a href="/login" className={` pr-2 ${currentPage === "/login" && "underline"}`}>Login</a>
        </header>
    );
}