const Header = () => (
    <div className= "header">
        <h2 className="title">World Wide News Network</h2>
         <a href="https://newsapi.org">Powered by News API</a>
        <style jsx>{`
    .header{
        background-color: #a5a5a5;
    }

            h2.title {
                font-family: "Arial";
                background-color: #a5a5a5;
                padding: 5px;
                margin: 3em;
                text-align: center;
            }
        `}</style>
    </div> 
 )
 
 export default Header;
