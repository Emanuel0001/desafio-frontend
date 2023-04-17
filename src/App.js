import logo from './logo.svg';
import './App.css';
import iphone from './imagens/iphoneXS.png'
import selo from './imagens/seloSegurança.png'
import garotoPropaganda from './imagens/garotoPropaganda.png'
import client from './imagens/client.png'
import client2 from './imagens/client2.jpeg'
import client3 from './imagens/client3.jpeg'
import client4 from './imagens/client4.jpeg'
import imagemCentro from './imagens/imagemCentro.png'
import tamplateYoutube from './imagens/youtube.jpg'
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { ImLocation2 } from 'react-icons/im';
import { RiSingleQuotesL } from 'react-icons/ri';
function App() {
  return (
    <div className="landing-page">
      <div className='menu'>
        <h1>PRECATO</h1>
      </div>
      <div className='container'>
        <div className='title'>
          <p>Faça como o Sr. Francisco, receba o dinheiro
            do seu precatório e <span>viva a vida que sempre sonhou.</span></p>
        </div>
        <div className='youtube-video'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/F7CeVA365LY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='button'>
          <button className='button-1' id='idButton'>Quero antecipar com segurança</button>
        </div>

      </div>
      <div className='container-2'>
        <div className='paragraphs'>
          <p>Acabe com a agonia de esperar
            o pagamento do precatório.</p>
          <p>A <strong>Precato é líder em antecipação,</strong><br></br>
            já ajudamos milhares de pessoas a sair da fila de
            recebimento. </p>
          <p>Descubra como é facil receber o dinheiro à vista e
            <strong> com segurança.</strong></p>
        </div>
      </div>
      <div className='container-3'>
        <div className='bloco-centro'>
          <div className='section-left'>
            <img src={iphone}/>
            <img src={imagemCentro}></img>
          </div>
          <div className='section-right'>
            <div className='bloco-text'>
              <h1>Como funciona</h1>
              <h2>Passo 1 - Proposta</h2>
              <p>Proposta Faremos uma proposta personalizada
                para você avaliar com calma e esclarecer
                suas dúvidas.</p>
              <h2>Passo 2 - Formalização</h2>
              <p>Analisaremos a documentação e agendaremos
                no cartório mais próximo da sua casa a
                assinatura do contrato, presencialmente. Um representante</p>
              <h2>Passo 3 - Pagamento</h2>
              <p>Contrato assinado em até 24 horas o dinheiro
                estará na sua conta.</p>
              <div className='button'>
                <button className='button-1'>Quero antecipar com segurança</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='div-title'><h1>A gente saiu da fila <br></br> e foi viver a vida!</h1></div>
      <div className='container-4'>
        <div className='components'>
          <div className='component'>
            <div className='rectangle' id="rectangle">
              <img className='image-rectangle' src={client2}></img>
              <h1>Albino Noleto dos Santos</h1>
              <h2><ImLocation2 color='#24976B' size={20}/>Valparaíso de Goiás/GO</h2>
              <p>Fiz uma negociação com eles do precatório da minha aposentadoria especial. Enviei meus documentos, deu tudo certo e recebi os valores combinados. Fui muito bem atendido e a empresa cumpriu as suas obrigações. Todos os meus problemas foram resolvidos! Recomendo sem medo!” </p>
              <div className='polygon'></div>
            </div>
          </div>
          <div className='component'>
            <div className='rectangle'>
            <img className='image-rectangle' src={client3}></img>
              <h1>AIris Gomes de Barros</h1>
              <h2><ImLocation2 color='#24976B' size={20}/> Botucatu/SP</h2>
              <p>A empresa fez um trabalho de aquisição de precatórios pertencentes à minha mãe com resultado totalmente satisfatório. Os responsáveis demonstraram sempre muita competência, responsabilidade e ética. Eu e minha família, em nome da minha mãe, damos testemunhos de se tratar” </p>
              <div className='polygon'></div>
            </div>
          </div>
        </div>
        <div className='components'>
          <div className='component'>
            <div className='rectangle'>
            <img className='image-rectangle' src={client}></img>
              <h1>Wellington Silvero</h1>
              <h2><ImLocation2 color='#24976B' size={20}/> Cotriguaçu/MT</h2>
              <p>Primeiramente, gostaria de parabenizar a profissional que me atendeu por toda a sua atenção e prestatividade. Agradeço à empresa por sua idoneidade e compromisso com seus clientes. Deixo aqui meu agradecimento pelo excelente serviço prestado.” </p>
              <div className='polygon'></div>
            </div>
          </div>
          <div className='component'>
            <div className='rectangle'>
            <img className='image-rectangle' src={client4}></img>
              <h1>Maria Do Carmo</h1>
              <h2><ImLocation2 color='#24976B' size={20}/> Comodoro/MT </h2>
              <p>Muito obrigada pelo que fizeram por mim. No início, achei que era um trote. Graças a Deus não era! Com o dinheiro que caiu na minha conta, comprei um carro e estou reformando a minha casa. Foi muito bom negociar com vocês! “ </p>
              <div className='polygon'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-title' ><h1>Perguntas <br></br> Frequentes!</h1></div>
      <div className='container-perguntas'>
        <div className='section-perguntas'>
          <div className='perguntas'>
            <h1>Afinal, o que é esse tal de precatório?</h1>
            <p>Quando a Fazenda Pública reconhece uma dívida com uma empresa ou pessoa, chamamos esse reconhecimento
              de precatório. Após um processo, que costuma ser longo, o Poder Judiciário emite uma requisição de pagamento,
              que é um aviso a União, Município ou Estado de que eles têm</p>
          </div>
          <div className='perguntas'>
            <h1>O que é um ofício requisitório?</h1>
            <p>Ofício requisitório é o documento expedido depois que a pessoa ganha o processo. É esse documento que confirma a dívida da União, Estado e Município com uma pessoa ou uma empresa.</p>
          </div>
          <div className='perguntas'>
            <h1>Se eu negociar, como fica meu advogado?</h1>
            <p>O seu advogado é parte essencial, é ele quem faz todo acompanhamento do andamento do processo e seus honorários contratuais estão garantidos. Durante a negociação os valores dele serão informados de forma clara, e se ele quiser também pode antecipar.</p>
          </div>
          <div className='perguntas'>
            <h1>Quais são os tipos de precatório?</h1>
            <p>Existem dois tipos de precatório, os alimentares e os comuns. Precatório alimentar é aquele que decorre de salários, vencimentos, proventos, pensões e suas complementações, benefícios previdenciários e indenizações por morte ou por invalidez, fundadas em responsabilidade civil, em virtude de sentença judicial transitada em julgado. Já precatórios de origem comum são todos os...</p>
          </div>
          <div className='perguntas'>
            <h1>Eu posso negociar o meu precatório?</h1>
            <p>Pode sim. Conforme o art. 100, §§ 13 e 14 da Constituição Federal de 1988 a negociação de precatórios está autorizada através da cessão de créditos, que é o nome usado para tratar a compra e venda de precatórios.</p>
          </div>
          <div className='perguntas'>
            <h1>Eu posso negociar o meu precatório?</h1>
            <p>Pode sim. Conforme o art. 100, §§ 13 e 14 da Constituição Federal de 1988 a negociação de precatórios está autorizada através da cessão de créditos, que é o nome usado para tratar a compra e venda de precatórios.</p>
          </div>
          <div className='perguntas'>
            <h1>Quais são os tipos de precatório?</h1>
            <p>Existem dois tipos de precatório, os alimentares e os comuns. Precatório alimentar é aquele que decorre de salários, vencimentos, proventos, pensões e suas complementações, benefícios previdenciários e indenizações por morte ou por invalidez, fundadas em responsabilidade civil, em virtude de sentença judicial transitada em julgado. Já precatórios de origem comum são todos os demais casos, como, por exemplo, desapropriações, repetição de tributos, indenizações por danos morais, entre outros.</p>
          </div>
          
        </div>
      </div>
      <div className='container-title2'><h1>Maiores especialistas<br></br> do Brasil!</h1>
        <div className='trace'></div>
      </div>
      <div className='container-section-final'>
        <div className='left'>
          <img src={garotoPropaganda}></img>
        </div>
        <div className='right'>
          <div className='bloco-texto'>
            <p>Contamos com um grande time de especialistas, que vão te atualizar sobre cada detalhe do processo e apresentar todas as alternativas para o recebimento efetivo, com transparência radical. </p>
            <p>A Precato se orgulha em ter gente de verdade para te atender. Isso significa que temos pessoas preparadas mas
              que tem problemas de verdade, contas a pagar, familia, e
              que portanto entendem muito bem os seus problemas.</p>
            <p>Não perca tempo, tire suas dúvidas, e conheça as
              possivilidades para recever seu precatorio apertando no botão abaixo:</p>
          </div>
          <div className='button'>
            <button className='button-1' id='button-final' >Quero antecipar com segurança</button>
          </div>
          <div className='selo'>
            <img src={selo}/>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='elementos'>
        <AiFillInstagram color='white' size={60}/>
        <AiFillLinkedin color='white' size={60}/>
        <FiFacebook color='white' size={60}/>
        </div>
      </div>
    </div>
  );
}

export default App;
