export default function Footer(){
    return(
        <footer className="footer sm:footer-horizontal footer-center bg-neutral text-base-100 text-lg p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by BlogApplication Ltd.</p>
            </aside>
        </footer>
    )
}