function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuotes, setRandomQuote] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();

            setQuotes(data);

            let randomIndex = Math.floor(Math.random() * data.length);

            setRandomQuote(data[randomIndex]);
        }
        fetchData();
    },[]);

    function handleClick() {
        let randomIndex= Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomIndex]);
    }

    return (
        <div className="container-fluid text-center pt-5" style={{backgroundColor:"red"}}>
            <div className="jumbotron pt-5" style={{height:"100vh"}}>
            <div id="wrapper" className="card w-50 mx-auto mt-5">
                <div className="card-header">
                    Inspirational quotes
                </div>
                <div id="quote-box" className="card-body">
                    <h6 id="author" className="card-title">{randomQuotes.author}</h6>
                    <p id="text" className="card-text lead"><i className="fa fa-quote-left"></i><em> {randomQuotes.text}</em></p>
                        <div>
                        <button  type="button" className="btn btn-danger pull-left"><a id="tweet-quote" style={{color:"white"}}href="https://twitter.com/intent/tweet"><i className="fa fa-twitter"></i></a></button>
                        <button id="new-quote" type="button" className="btn btn-danger pull-right font-weight-light" onClick={handleClick}>New Quote</button>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));