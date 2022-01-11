import './footer.styles.scss';

const Footer = () => {
    return (
        <footer className="footer">
            Copyright &copy; {new Date().getFullYear()} Shop Till You Drop
        </footer>
    )
}

export default Footer;