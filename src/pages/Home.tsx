import illustrationImg from '../assets/imagens/illustration.svg'
import logoImg from '../assets/imagens/logo.svg'
import googleIconImg from '../assets/imagens/google-icon.svg'

//webpack (snowpack, vite, ...)

export function Home(){
return (
    <div>
        <aside>
            <img src={illustrationImg} alt="" />
            <strong>Crie salas de Q&amp;A ao-vivo</strong>
            <p>Tira as dúvidas da sua audiência em tempo-real</p>
        </aside>
        <main>
            <div>
                <img src={logoImg} alt="Letmeask" />
                <button>
                    <img src={googleIconImg} alt="Logo do Google" />
                    Crie a sua sala com o Google
                </button>
                <div>ou entre em uma sala</div>
                <form>
                    <input 
                      type="text"
                      placeholder="Digite o código da sala"
                    />
                    <button type="submit">
                      Entrar na sala
                    </button>
                </form>
            </div>
        </main>
    </div>
)
}