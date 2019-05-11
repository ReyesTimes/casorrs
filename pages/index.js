import '../sass/index.scss'

import Link from 'next/link'

const Index = () => (
    <main className="container">
        <article>
            <section>
                <h1>
                    Investigación SSR Despacho
                </h1>
                <p>Se generara una investigación del caso <span className="underline">SSR Despacho</span> con el fin de obtener hallazgos que nos ayuden a diseñar la mejor solución para nuestros clientes.</p>
                <p>Dicha investigación sera documentada en este sitio web.</p>
                <p>Además se recolectará información que el cliente nos provea.</p>
            </section>
            <section>
                <h2>Diferenciador de SSR</h2>
                <ol className="list--number">
                    <li>Resultados</li>
                    <li>Honestidad</li>
                    <li>Comunicación</li>
                </ol>
            </section>
            <section>
                <h3 className="number number1">
                    Resultados
                </h3>
                <p>
                    Los resultados hechos por el despacho SSR en sus casos han sido satisfactorios, Dando resultados de calidad y teniendo grandes casos de éxito.
                </p>
            </section>
            <section>
                <h3 className="number number2">
                    Honestidad
                </h3>
                <p>Se les da información a los clientes claras en todos los aspectos. Se les explica como esta el caso y no se le dan alas de que todo se va ganar al 100 por ciento.</p>
            </section>
            <section>
                <h3 className="number number3">
                    Comunicación
                </h3>
                <p>Al cliente se le toma en cuenta en todo el proceso del caso, informando e incorporando en el proceso, llevando una comunicación continua en cualquier parte del proceso. La información que se le entrega es en un lenguaje claro para el cliente lo cual ayuda a que pueda opinar sobre el mismo.</p>
            </section>
            <section>
                <h2>
                    Restricciones de SSR
                </h2>
                <p>Existen dos claras restricciones en el caso del despacho, la primera es que apenas van iniciando el despacho, lo cual hace que aún no se tenga una cartera de clientes tan fuerte, la segunda es la percepción que se podría tener de la juventud de los abogados.</p>
            </section>
            <section>
                <h2>Las necesidades del úsuario</h2>
                <p>Existen diferentes necesidades que pueden solventar el despacho, aunque la mayoría se centran en resolver problematicas de legales ante diferentes autoridades.</p>
            </section>
            <section>
                <h3 className="d-flex align-items-center"><img src="/static/man-user.svg" className="mr-1 width-1" aria-hidden="true" />Caso Señor Jose</h3>
                <div className="user-case">
                    <p>El Señor José es un cliente que fue recomendado por un conocido de la especialidad, tuvó un problema con el IMSS por cuotas patronales, ya que eran cuotas patronales especiales por el tipo de ramo al que se dedica el Señor José (pintura).</p>
                    <p>El Señor José ya había contrado los servicios de un abogado, lamentablemente dicho abogado le quedo mal, lo que hizó que desconfiara mucho en un inicio del caso.</p>
                    <p>Se hizó una investigación del problema que tenía el Señor José y se encontró que había posibilidades de ganar el caso caso, ya que el IMSS por el tiempo que paso ya no estabá en tiempo para requerir esas facultades, se le informo de ello y llegarón a un acuerdo.</p>
                    <p>La comunicación fue primordial para la mejora en la relación con el Señor José, la cual para el fue muy importante, se le tomabá en cuenta en toma de decisiones importantes del caso.</p>
                    <p>Hubó un problema en el caso del Señor José, dicho problema se sucito al momento de ganar el caso, aunque el Señor José ya había ganado no quería pagar hasta que se le regresará el dinero retenido que tenía en sus cuentas bancarías, dicho problema se ha sucitado en otros casos, en donde el cliente al tener malas experiencias tanto con otro abogados como con las dependecias tiene miedo que el problema no haya terminado.</p>
                    <p>Aunque existió dicho problema con el Señor José al final estuvó feliz con el resultado al grado que el despacho se encargara de otros servicios para el Señor Jose. </p>
                </div>
            </section>
            <section>
                <h2>
                    Servicios
                </h2>
                <p>Los servicios que prestan pueden ser consultados dando click <Link href="/servicios"><a>aquí</a></Link></p>
            </section>
        </article>
    </main>
)
  
export default Index