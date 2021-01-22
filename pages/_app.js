import '../styles/style.css';

export default function MyApp() 
{
    return(
        <div>
            <main>
                <section class="glass">
                    <div class ="dashboard">
                        <div class="user">
                            <img src="/profile.png" width={20} height={20}></img>
                            <h3>Caio Aguiar</h3>
                            <p>Pro member</p>
                        </div>

                        <div class="links">
{/* componentizar */}
                            <div class="link">
                                <img src="/twitch.png" width={10} height={10}></img> 
                                <h2>Streams</h2>
                            </div>
                            <div class="link">
                                <img src="/steam.png" width={10} height={10}></img> 
                                <h2>Games</h2>
                            </div>
                            <div class="link">
                                <img src="/upcoming.png" width={10} height={10}></img> 
                                <h2>New</h2>
                            </div>
                            <div class="link">
                                <img src="/library.png" width={10} height={10}></img> 
                                <h2>Library</h2>
                            </div>
{/* até aqui */}
                        </div>
                        <div class="pro">
                            <h2>Join Pro</h2>
                            <img src="/controller.png" width={20} height={20}></img>
                        </div>
                    </div>

                    <div class="games">
                        <div class="status">
                            <h1>Active Games</h1>
                            <input type="text"></input>
                        </div>
{/* componentizar */}
                        <div class="cards">
                            <div class="card">
                                <img src="/assassins.png" width={20} height={20}></img>
                                <div class="card-info">
                                    <h2>Assassins Creed Valhalla</h2>
                                    <p>PS5 Version</p>
                                    <div class="progress"></div>
                                </div>
                                <h2 class="percentage">30%</h2>
                            </div>
                            <div class="card">
                                <img src="/sackboy.png" width={20} height={20}></img>
                                <div class="card-info">
                                    <h2>Sackboy: A Great Adventure</h2>
                                    <p>PS5 Version</p>
                                    <div class="progress"></div>
                                </div>
                                <h2 class="percentage">50%</h2>
                            </div><div class="card">
                                <img src="/spiderman.png" width={20} height={20}></img>
                                <div class="card-info">
                                    <h2>Spider Man: Miles Morales</h2>
                                    <p>PS5 Version</p>
                                    <div class="progress"></div>
                                </div>
                                <h2 class="percentage">0%</h2>
                            </div>
{/* até aqui */}
                        </div>
                    </div>
                </section>
            </main>

            <div class="circle1"></div>
            <div class="circle2"></div>
        </div>
    ) 
} 