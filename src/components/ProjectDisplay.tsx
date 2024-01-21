import { GithubLogo, Link } from '@phosphor-icons/react/dist/ssr'

export function ProjectDisplay(){
    return (
        <div className="flex items-center px-16 justify-center h-[612px] bg-orange-900 rounded group">
            <div className="hidden group-hover:flex flex-col items-start justify-center">
                <strong>Pizzeria D'art</strong>
                <p>A pizzeria D’art foi um projeto de aprendizado,
                   com fortes inspirações no Coffee Delivery uma
                   aplicação da Rocketseat.
                </p>
                <p>
                    As tecnologias principais utilizadas foram:
                </p>
                <ul>
                    <li>NextJS</li>
                    <li>TailwindCSS</li>
                    <li>Postgres</li>
                    <li>Stripe</li>
                </ul>
                <div>
                    <button>
                        <GithubLogo />
                        Github
                    </button>
                    <button>
                        <Link />
                        Website
                    </button>
                </div>
            </div>
        </div>
    )
}