import '../app/globals.css'

const App = ({ Component, pageProps }) => {
    return(
      <>
       <Component {...pageProps} />
       <div className="bg-black text-gray-300 flex min-h-screen flex-col items-center justify-between p-24"> <a href="/">Home</a></div>
      </>
     )
}

export default App;
