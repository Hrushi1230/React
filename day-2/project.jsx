import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

function Header(){
    return(
        <header>
            <img src="react-js-icon.png" alt="React Logo" width="40px" />
        </header>
    )
}

function Footer(){
    return(
        <footer>
            <small>© 2025 Hrushi. All rights reserved.</small>
        </footer>
    )
}
function MainContent(){
    return(
         <main>
            <h1>Reason I am excited to learn React</h1>
            
                <ol>
                    <li>Was first release in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 200k stars on Github</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ol>

            </main>

    )
}



function Page(){
    return(
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)