/* ========================================= */
/* DADOS DOS PROJETOS                        */
/* EDITAR: textos, imagens, links, categorias */
/* e conteúdo de detalhe de cada projeto     */
/* ========================================= */

const CATEGORY_LABELS = {
  pedagogico: "PROJETOS PEDAGÓGICOS",
  design: "PROJETOS DE DESIGN",
};

const projects = [
  {
    id: "usabilicrit",
    title: "UsabiliCrit",
    category: "pedagogico",
    image: "Assets/usabilicrit-inicio.png",
    bannerImage: "Assets/banner-usabilicrit.png",
    date: "Maio 2025",
    institution: "Apple Developer Academy",
    tags: ["Dinâmica"],
    description:
      "Dinâmica educacional criada para integrar Figma, SwiftUI, HIG e usabilidade em desafios práticos de desenvolvimento de aplicativos. A atividade incentivou a colaboração entre design e desenvolvimento, promovendo uma visão integrada do processo.",
    detailDescription:
      "Dinâmica educacional criada para integrar Figma, SwiftUI, HIG e usabilidade em desafios práticos de desenvolvimento de aplicativos. A atividade incentivou a colaboração entre design e desenvolvimento, promovendo uma visão integrada do processo.",
    caseStudy: true,
    detailContent: `
      <h2>Informações gerais</h2>
      <p>
        UsabiliCrit foi uma dinâmica de aprendizagem criada para a Apple Developer Academy
        PUCPR com o objetivo de aproximar design, desenvolvimento e usabilidade em um mesmo
        processo de construção de aplicações mobile.
      </p>
      <p>
        A atividade foi estruturada para que estudantes explorassem a relação entre
        <strong>prototipação em Figma, implementação de interfaces em SwiftUI e avaliação de usabilidade</strong>,
        compreendendo como decisões de design impactam diretamente a experiência final do
        usuário e a viabilidade técnica da solução.
      </p>
      <p>
        A iniciativa foi criada para fortalecer uma visão integrada do processo de criação
        de aplicativos, aproximando conceitos de UX/UI Design, desenvolvimento para plataformas
        Apple e avaliação da experiência do usuário.
      </p>
      <p>
        A dinâmica surgiu a partir de uma atividade desenvolvida em conjunto pela equipe de
        mentoria, com o objetivo de aproximar design e desenvolvimento no processo de criação
        de interfaces. Utilizando um mesmo briefing para toda a turma, os estudantes,
        organizados em duplas, foram desafiados a projetar e implementar soluções, explorando
        a relação entre prototipação no Figma e desenvolvimento de interfaces em SwiftUI.
      </p>

      <div class="case-callout case-callout--with-icon">
        <img
          class="case-callout__icon"
          src="Assets/icone-light-bulb.png"
          alt=""
          width="18"
          height="18"
        >
        <p class="case-callout__text">
          Estimular a colaboração entre design e desenvolvimento, passando pelas etapas de
          concepção, prototipação, implementação e avaliação da experiência do usuário por
          meio do CBL.
        </p>
      </div>

      <h2>Requisitos do projeto</h2>
      <p>
        Um aplicativo que ofereça navegação rápida entre diferentes áreas, permitindo ao
        usuário alternar entre seções principais com facilidade para a melhor lista de filmes
        curada pela mentoria.
      </p>
      <p>Por isso, precisávamos de um aplicativo mobile que os usuários possam:</p>
      <ul class="case-info-list">
        <li>Ter uma forma de recepção geral no app e entender a funcionalidade e seu propósito.</li>
        <li>Navegar na lista de filmes, podendo realizar a busca e acesso a informações detalhadas de cada filme.</li>
        <li>Marcar os filmes que já foram vistos e seus favoritos.</li>
        <li>Se cadastrar e ter acesso a suas informações de cadastro (o cadastro não precisa ser funcional, pode ser de forma simulada).</li>
      </ul>

      <h2>Propósito pedagógico</h2>
      <p>
        A atividade foi concebida para integrar, na prática, os conhecimentos desenvolvidos
        em prototipação no Figma e desenvolvimento de interfaces em SwiftUI. Ao utilizar um
        mesmo tema e uma base de dados compartilhada entre todos os participantes, a proposta
        reduziu o tempo dedicado à etapa inicial de ideação do Challenge Based Learning (CBL),
        o engage, permitindo maior foco na construção, implementação e avaliação das soluções.
      </p>
      <p>
        Além disso, a utilização de um briefing comum possibilitou a comparação entre
        <strong>diferentes abordagens para um mesmo problema</strong>. A partir da análise das
        soluções desenvolvidas pelos colegas, os estudantes puderam refletir sobre arquitetura
        da informação, hierarquia visual, organização de conteúdo, usabilidade e aplicação de
        heurísticas de design, compreendendo como diferentes decisões impactam a experiência
        final do usuário.
      </p>
      <p>
        A dinâmica incentivou a aprendizagem colaborativa e aproximou design e desenvolvimento,
        promovendo uma visão mais integrada do processo de criação de aplicativos iOS.
      </p>

      <div class="case-callout case-callout--with-icon">
        <img
          class="case-callout__icon"
          src="Assets/icone-fala.png"
          alt=""
          width="18"
          height="18"
        >
        <p class="case-callout__text">
          Dinâmica final: os estudantes realizaram avaliações heurísticas dos aplicativos
          desenvolvidos pelos colegas. Como todos os projetos compartilhavam os mesmos requisitos,
          foi possível comparar diferentes abordagens para um mesmo problema e discutir aspectos
          relacionados à usabilidade, arquitetura da informação, hierarquia visual e experiência
          do usuário.
        </p>
      </div>

      <h2>Mais informações</h2>
      <p>
        A dinâmica ocorreu com apoio com material sobre Usabilidade de
        <a href="https://gonzatto.com" target="_blank" rel="noopener noreferrer">Rodrigo Gonzatto</a>.
      </p>
    `,
    externalLink: "",
  },
  {
    id: "ux-cards",
    title: "Dinâmica UX Cards",
    category: "pedagogico", // "pedagogico" | "design"
    image: "Assets/ux-cards.png", // EDITAR: caminho da imagem
    bannerImage: "Assets/ux-cards.png",
    date: "Mar 2023",           // EDITAR: data
    institution: "Apple Developer Academy", // EDITAR
    tags: [], // EDITAR: tags extras (array)
    detailTags: ["Dinâmica"],
    description:
      "Dinâmica adaptada para o ambiente de desenvolvimento e design de aplicativos, a partir do baralho do Alfabeto crítico para designers de Lesley-Ann Noel.",
    detailTitle: "Alfabeto Crítico para Designers",
    detailDescription:
      "Dinâmica adaptada para o ambiente de desenvolvimento e design de aplicativos, a partir do baralho do Alfabeto crítico para designers de Lesley-Ann Noel.",
    caseStudy: true,
    detailContent: `
      <h2>Informações gerais</h2>
      <p>
        Utilizamos o baralho Alfabeto Crítico para Designers é um projeto desenvolvido
        pela professora e pesquisadora Lesley-Ann Noel, como uma forma de introduzir
        designers e estudantes a teorias e conceitos críticos que atravessam o campo,
        e gerar novas reflexões no processo do fazer e pensar design.
      </p>
      <p>
        Com a permissão da autora, traduzimos as cartas ao português e as utilizamos
        focadas no desenvolvimento do design de aplicativos. Como forma de refletir
        sobre projetos, produtos atuais no mercado, ao mesmo tempo como prospectar
        novas soluções.
      </p>

      <div class="case-callout case-callout--with-icon">
        <img
          class="case-callout__icon"
          src="Assets/icone-light-bulb.png"
          alt=""
          width="18"
          height="18"
        >
        <div class="case-callout__text">
          <p><strong>A dinâmica realizada em grupos de estudantes, para:</strong></p>
          <ul>
            <li>Discutir em conjunto sobre os temas;</li>
            <li>Refletir sobre o tema das cartas sobre a realidade;</li>
            <li>Prospectar, em conjunto, novas soluções para os problemas e dilemas debatidos,</li>
          </ul>
        </div>
      </div>

      <h2>Mais informações</h2>
      <p>Para saber mais informações e como utilizar o Alfabeto crítico:</p>
      <ul class="case-info-list">
        <li>
          Produção em conjunto ao Rodrigo Gonzatto, processo detalhado em seu
          <a href="https://gonzatto.com/dinamica-alfabeto-critico-para-designers/" target="_blank" rel="noopener noreferrer">artigo</a>.
        </li>
        <li>
          Alfabeto crítico
          <a href="https://criticalalphabet.com" target="_blank" rel="noopener noreferrer">disponibilizado no site</a>
          de Lesley-Ann Noel.
        </li>
      </ul>
    `,
    externalLink: "",
  },
  {
    id: "collie",
    title: "Collie",
    category: "design",
    image: "Assets/collie.png",
    bannerImage: "Assets/banner-collie.png",
    date: "Jun–Dez 2022",
    institution: "Apple Developer Academy",
    tags: ["macOS", "SwiftUI"],
    description:
      "Collie, aplicativo para macOS desenvolvido para auxiliar o onboarding de profissionais em equipes remotas. Construído com SwiftUI e UIKit utilizando a metodologia CBL, com atuação em design e frontend.",
    detailDescription:
      "Collie, aplicativo para macOS desenvolvido para auxiliar o onboarding de profissionais em equipes remotas. Collie teve seu design desenvolvido no figma e construído com SwiftUI e UIKit utilizando a metodologia CBL.",
    caseStudy: true,
    detailContent: `
      <h2>Informações gerais</h2>
      <p>
        Aplicativo para macOS desenvolvido para apoiar o onboarding de profissionais
        em ambientes de trabalho remotos, ajudando novos colaboradores a se integrarem
        de forma mais eficiente às equipes, processos e cultura organizacional.
      </p>
      <p>
        O projeto foi desenvolvido ao longo de seis meses na Apple Developer Academy PUCPR,
        utilizando a metodologia Challenge Based Learning (CBL) em um grupo de cinco pessoas.
        Atuei principalmente como Product Designer, mas também auxiliei como desenvolvedora
        frontend, participando desde a pesquisa com usuários e definição da solução até a
        prototipação, validação e implementação da interface.
      </p>

      <div class="case-callout case-callout--with-icon">
        <img
          class="case-callout__icon"
          src="Assets/icone-premio.png"
          alt=""
          width="18"
          height="18"
        >
        <p class="case-callout__text">
          Projeto selecionado para representar a Apple Developer Academy PUCPR na
          cerimônia de formatura das turmas brasileiras de ano 2021/2022.
        </p>
      </div>

      <h2>Etapa CBL</h2>
      <p>
        O projeto foi desenvolvido por meio da metodologia de aprendizagem ativa por
        projetos Challenge Based Learning (CBL), estruturada por meio de suas etapas.
        A seguir, será apresentado como Collie foi formulado por meio desse framework.
      </p>

      <h3>Engage</h3>
      <div class="case-callout">
        <p><strong>Big Idea:</strong> remote work</p>
        <p><strong>Essential question:</strong> How to improve the remote work experience?</p>
        <p><strong>Challenge Statement:</strong> Make the remote work more intuitive and engaging for new remote employees.</p>
      </div>
      <p>
        A etapa de engajamento ao nosso interesse e ao contexto pandêmico no período,
        ampliação de trabalhos remotos, ao mesmo tempo da dificuldade das empresas em
        realizar esse novo modelo de trabalho e de contratação.
      </p>

      <p class="case-caption">Imagem esquemática: Temas de interesse que levaram a big Idea trabalho remoto</p>
      <figure class="case-figure">
        <img class="case-figure__image" src="Assets/esquema-collie.png" alt="Diagrama de Venn com temas de interesse que levaram à big idea trabalho remoto">
      </figure>

      <h2>Investigate: entendendo o problema</h2>
      <div class="case-callout">
        <p><strong>Escopo da pesquisa:</strong></p>
        <ul>
          <li>Entrevistas semi-estruturadas com trabalhadores de RH;</li>
          <li>Entrevistas semi-estruturadas com trabalhadores remotos;</li>
          <li>Benchmarking;</li>
          <li>Desk research (como pesquisa etnográfica);</li>
          <li>Formulário para trabalhadores remotos;</li>
          <li>Co-criação com uma empresa de mercado, com encontros para estruturação das necessidades.</li>
        </ul>
      </div>
      <p>
        A etapa de investigação, foi organizada por diferentes ciclos de guiding questions
        (questões guias), por diferentes formas de guiding activities (atividades guias).
        Nas quais compreendemos que o Onboarding era um dos temas mais importantes nesse
        novo sistema de contratação.
      </p>

      <p class="case-caption">Mapa mental colaborativo após as pesquisas da etapa de investigação</p>
      <figure class="case-figure">
        <img class="case-figure__image" src="Assets/mapa-mental.png" alt="Mapa mental colaborativo em quadro branco">
      </figure>

      <h2>Investigate: processos para entender a solução</h2>
      <div class="case-callout">
        <ul>
          <li>Persona (duas, quem passa e quem faz o processo);</li>
          <li>Mapa de empatia;</li>
          <li>Jornada do usuário;</li>
          <li>Service Blue Print;</li>
          <li>Value Proposition Canvas;</li>
          <li>Matriz esforço x impacto;</li>
          <li>Priorização de features por MosCoW (must have, shoud have, could have, won't have).</li>
        </ul>
      </div>

      <h2>Act</h2>
      <p>
        A etapa de desenvolvimento ocorreu a partir da busca pela construção de um MVP
        (produto mínimo viável). A partir do problema e solução encontrada na etapa de
        investigate.
      </p>

      <div class="case-callout">
        <p><strong>Produto mínimo viável para validar o problema/solução:</strong></p>
        <ul>
          <li>Landing page para coleta de mailing;</li>
          <li>Protótipo no figma da interface;</li>
          <li>Protótipo em conjunto com empresa (usando o notion).</li>
        </ul>
      </div>

      <p class="case-caption">Landing page para coleta de mailing</p>
      <figure class="case-figure">
        <img class="case-figure__image" src="Assets/computador-collie.png" alt="Landing page do Collie em mockup de MacBook">
      </figure>

      <p>
        Prototipação das interfaces no Figma, buscando formas diferentes da
        organização de conteúdo.
      </p>

      <figure class="case-figure case-figure--spaced-top">
        <img class="case-figure__image" src="Assets/telas-collie.png" alt="Telas do aplicativo Collie em mockups de macOS">
      </figure>

      <h2 class="case-final-title">Collie, versão final publicada na App Store para macOS</h2>

      <figure class="case-figure">
        <img class="case-figure__image" src="Assets/logo-collie.png" alt="Ícone e interface final do Collie na App Store">
      </figure>

      <p>
        Durante o desenvolvimento, trabalhei principalmente como product designer e
        UX reaserch, e em equipe com SwiftUI e UIKit. Projetando uma experiência alinhada
        às Human Interface Guidelines (HIG) da Apple e aos padrões de interação do macOS.
        O foco foi criar uma interface condizente e alinhada as diferentes necessidades
        dos times de recursos humanos, acessível e consistente com o ecossistema Apple.
      </p>
    `,
    externalLink: "",
  },
  {
    id: "animautas",
    title: "Animautas",
    category: "design",
    image: "Assets/animautas.png",
    bannerImage: "Assets/animautas.png",
    date: "Nov–Dez 2021",
    institution: "Apple Developer Academy",
    tags: ["iPadOS", "UIKit"],
    description:
      "Animautas, aplicativo para iPad criado para auxiliar professores no ensino de crianças autistas com dificuldades de aprendizagem, com exercícios em formato de jogos para auxílio no desenvolvimento global. Desenvolvido com UIKit, pesquisa em contexto escolar e foco em acessibilidade, design inclusivo e validação com usuários reais.",
    detailDescription:
      "Animautas, Aplicativo para iPad criado para auxiliar professores no ensino de crianças autistas com dificuldades de aprendizagem, com exercícios em formato de jogos para auxílio no desenvolvimento global. Foco em acessibilidade e validação com usuários.",
    caseStudy: true,
    detailContent: `
      <h2>Informações gerais</h2>
      <p>
        Uma plataforma de jogos educativos para iPadOS desenvolvido com o intuito
        de estimular e auxiliar no aprendizado de crianças no espectro autista. O
        transtorno do espectro autista (TEA) é um distúrbio do neurodesenvolvimento
        caracterizado por desenvolvimento atípico, diversos estudos mostram que 1 em
        cada 44 crianças de 8 anos é diagnostica com autismo. Ainda é um campo complicado,
        e que necessita de muita ajuda e comprometimento.
      </p>
      <p>
        Plataforma de games focada para crianças com autismo e dificuldades de aprendizado,
        focando em acessibilidade das crianças do transtorno, como ferramenta de apoio aos
        profissionais da educação no processo de aprendizado, foco e interesse.
      </p>

      <div class="case-callout case-callout--with-icon">
        <img
          class="case-callout__icon"
          src="Assets/icone-user.png"
          alt=""
          width="18"
          height="18"
        >
        <div class="case-callout__text">
          <p><strong>Público Alvo</strong></p>
          <ul>
            <li>Professores, educadores e profissionais que trabalham com crianças com transtorno do espectro autista (TEA).</li>
            <li>Crianças com transtorno do espectro autista (TEA).</li>
          </ul>
        </div>
      </div>

      <h2>Etapa CBL</h2>
      <p>
        O projeto foi desenvolvido por meio da metodologia de aprendizagem ativa por
        projetos Challenge Based Learning (CBL), estruturada por meio de suas etapas.
        A seguir, será apresentado como Animautas foi formulado por meio desse framework.
      </p>

      <h3>Engage</h3>
      <div class="case-callout">
        <p><strong>Big Idea:</strong> Educação</p>
        <p><strong>Essential Question:</strong> Como facilitar o desenvolvimento de crianças com espectro autista?</p>
        <p><strong>Challenge Statement:</strong> Auxiliar a aprendizagem de crianças com espectro autista.</p>
      </div>

      <h3>Investigate</h3>
      <p>
        A etapa de investigação foi organizada por diferentes ciclos de guiding questions
        (questões guias) e guiding activities (atividades guias), com o objetivo de
        compreender as necessidades de professores e crianças com TEA no contexto escolar.
      </p>
      <p>
        Foram realizadas ao todo 3 visitas à uma escola especializada em deficiência
        intelectual. Eles se tornaram parceiros do projeto e nos ofereceram apoio para
        desenvolvermos as atividades gameficadas para a nossa plataforma. Esse contato
        próximo, permitiu a nossa equipe acompanhar de perto e poder testar nossa plataforma
        com o público alvo real, que também puderam aproveitar e se divertir conosco.
      </p>

      <p class="case-lead">Principais ferramentas para a condução do investigate</p>

      <div class="case-tool-grid">
        <div class="case-tool-card">
          <img class="case-tool-card__icon" src="Assets/icone-userconfig.png" alt="" width="32" height="32">
          <p class="case-tool-card__title">Mentores especialistas</p>
          <p class="case-tool-card__text">Auxilio de pesquisas de mestrados na área de desenvolvimento, sendo um com foco no autismo.</p>
        </div>
        <div class="case-tool-card">
          <img class="case-tool-card__icon" src="Assets/icone-users.png" alt="" width="32" height="32">
          <p class="case-tool-card__title">Especialistas da educação</p>
          <p class="case-tool-card__text">Contato direto com profissional da educação, psicólogos, pedagogos e psicopedagogos.</p>
        </div>
        <div class="case-tool-card">
          <img class="case-tool-card__icon" src="Assets/icone-book.png" alt="" width="32" height="32">
          <p class="case-tool-card__title">Pesquisas aprofundadas</p>
          <p class="case-tool-card__text">Entendimento das necessidades de UX e UI voltado para o transtorno do espectro autista.</p>
        </div>
      </div>

      <h3>Act</h3>
      <p>
        A etapa de desenvolvimento ocorreu a partir da busca pela construção de um MVP
        (produto mínimo viável). A partir do problema e solução encontrada no investigate,
        com a pesquisa em campo, entendendo a realidade das escolas para as crianças com
        dificuldade de aprendizagem e com alunos com TEA.
      </p>
      <p>
        Baseado nas atividades, projetadas pelos especialistas do Ministério de Educação
        e Cultura (MEC), e adaptados a realidade da sala de aula.
      </p>

      <div class="case-callout">
        <p><strong>Produto mínimo viável para validar o problema/solução:</strong></p>
        <ul>
          <li>Atividade lúdica para auxiliar no desenvolvimento global de crianças com TEA e dificuldade de aprendizagem;</li>
          <li>Dashboard de desempenho para professores e outros estudantes.</li>
        </ul>
      </div>

      <h2>Animautas</h2>
      <figure class="case-figure">
        <img class="case-figure__image" src="Assets/animautas-3.png" alt="Telas do aplicativo Animautas em mockups de iPad">
      </figure>

      <h2>Quebra-cabeça personalizável</h2>
      <p>
        O principal atividade desenvolvida foi um quebra cabeça personalizável. Podendo
        ser realizada com fotos do próprio estudante, família ou de temas que sejam de
        interesse dele. Além de poder ser alterada a dificuldade pelo professor.
      </p>
      <p>
        A atividade passou por dois testes de usabilidade em conjunto com professores
        e alunos.
      </p>

      <p class="case-caption">
        Interface quebra-cabeça baseada no Human Interface Guidilines (HIG) e nos princípios
        de acessibilidade propostos para interfaces para pessoas neurodivergentes.
      </p>
      <figure class="case-figure">
        <img class="case-figure__image" src="Assets/animautas-quebracabeca.png" alt="Tela de quebra-cabeça personalizável do Animautas">
      </figure>

      <p>
        Durante o desenvolvimento, trabalhei principalmente como product designer e
        UX reaserch, e em equipe com SwiftUI e UIKit. Auxiliei no desenvolvimento front
        da interface com o SwiftUI.
      </p>

      <p class="case-caption">
        Visita à escola para teste de usabilidade com o público de desenvolvimento
      </p>
      <figure class="case-figure">
        <img class="case-figure__image" src="Assets/animautas-time.png" alt="Equipe do Animautas em visita à escola para teste de usabilidade">
      </figure>
    `,
    externalLink: "",
  },
  {
    id: "rango",
    title: "Rango",
    category: "design",
    image: "Assets/rango.png",
    bannerImage: "Assets/banner-rango.png",
    date: "Abr 2021",
    institution: "Apple Developer Academy",
    tags: ["iOS", "UIKit", "SwiftUI"],
    description:
      "Rango é um app iOS inspirado no Guia Alimentar para a População Brasileira e profissionais da área, para incentivar hábitos alimentares saudáveis e auxiliar usuários na criação de planos alimentares semanais. Desenvolvido com UIKit e SwiftUI.",
    detailDescription:
      "Rango é um app iOS inspirado no Guia Alimentar para a População Brasileira e profissionais da área, para incentivar hábitos alimentares saudáveis e auxiliar usuários na criação de planos alimentares semanais. Desenvolvido com UIKit e SwiftUI.",
    caseStudy: true,
    detailContent: `
      <h2>Informações gerais</h2>
      <p>
        Alimentação saudável é essencial para todos os seres humanos, mas não é uma tarefa
        fácil para manter no dia a dia atarefado. Partindo desse problema, o Rango é um
        aplicativo que busca facilitar a organização de uma alimentação saudável.
      </p>

      <div class="case-callout case-callout--with-icon">
        <img
          class="case-callout__icon"
          src="Assets/icone-user.png"
          alt=""
          width="18"
          height="18"
        >
        <div class="case-callout__text">
          <p><strong>Público Alvo</strong></p>
          <p>Jovens adultos atarefados buscando construir uma alimentação saudável.</p>
        </div>
      </div>

      <h2>Etapa CBL</h2>
      <p>
        O projeto foi desenvolvido por meio da metodologia de aprendizagem ativa por
        projetos Challenge Based Learning (CBL), estruturada por meio de suas etapas.
        A seguir, será apresentado como o app Rango foi formulado por meio desse framework.
      </p>

      <h3>Engage</h3>
      <div class="case-callout">
        <p><strong>Big Idea:</strong> Eating</p>
        <p><strong>Essential Question:</strong> How to make eating habits healthier?</p>
        <p><strong>Challenge Statement:</strong> Make adopting a healthy diet easier.</p>
      </div>

      <h3>Investigate</h3>
      <p>
        A etapa de investigate foi focada em perguntas (guiding questions) para compreender
        porque a alimentação saudável era um desafio e quais os principais problemas nesse tema.
      </p>

      <div class="case-callout">
        <p><strong>Escopo das guiding activities (GA)</strong></p>
        <ul>
          <li>Desk research;</li>
          <li>Formulário focado nos problemas e dificuldades;</li>
          <li>Entrevista semi-estruturada com especialista em nutrição;</li>
          <li>Guia alimentar para a população brasileira.</li>
        </ul>
      </div>

      <h3>Act</h3>
      <p>
        A etapa de desenvolvimento no act iniciou com o levantamento de requisitos, e desenho
        de um escopo mais claro e reduzido para o desenvolvimento de um aplicativo guiado pelo
        guia alimentar para a população brasileira.
      </p>

      <div class="case-callout">
        <p><strong>Escopo do ACT</strong></p>
        <ul>
          <li>Planejamento alimentar, respondendo a falta de tempo;</li>
          <li>Dicas, facilitando conhecimentos do guia alimentar;</li>
          <li>Gamificação;</li>
          <li>Receitas saudáveis;</li>
          <li>Compartilhamento entre família e amigos.</li>
        </ul>
      </div>

      <p class="case-caption">
        Base dos alimentos classificada por meio do investigate, se torna base de dados do aplicativo
      </p>
      <figure class="case-figure">
        <img class="case-figure__image" src="Assets/rango-guia.png" alt="Base de alimentos classificada a partir do investigate">
      </figure>

      <p class="case-caption">
        Desenvolvimento do planejamento alimentar com base nos pratos do Guia alimentar para a população brasileira.
      </p>
      <figure class="case-figure">
        <img class="case-figure__image" src="Assets/rango-pratos.png" alt="Planejamento alimentar com base nos pratos do Guia alimentar">
      </figure>

      <h2>Rango</h2>
      <p>
        O aplicativo foi desenvolvido para iOS, com protótipo desenvolvido no Figma, com a
        condução de dois testes de usabilidade. Atuei como product designer, UX research e
        auxiliei com front-end da interface em SwiftUI.
      </p>

      <figure class="case-figure">
        <img class="case-figure__image" src="Assets/rango-telas.png" alt="Telas do aplicativo Rango em mockups de iOS">
      </figure>
    `,
    externalLink: "",
  },
  {
    id: "cyberun",
    title: "Cyberun",
    category: "design",
    image: "Assets/cyberun.png",
    date: "Fev 2022",
    institution: "Apple Developer Academy",
    tags: ["iOS", "UIKit", "Game"],
    description:
      "Cyberun é um jogo hipercasual para iOS e iPadOS criado para ensinar métricas de negócio por meio de experiências gamificadas. Desenvolvido com UIKit, incluindo lançamento, acompanhamento de métricas e iterações baseadas em dados após a publicação.",
    detailContent: `
      <p>
        Cyberun é um jogo hipercasual para iOS e iPadOS criado para ensinar
        métricas de negócio por meio de experiências gamificadas.
      </p>
      <h2>Desenvolvimento</h2>
      <p>
        Desenvolvido com UIKit, o projeto incluiu lançamento na App Store,
        acompanhamento de métricas e iterações baseadas em dados após a publicação.
      </p>
      <h2>Objetivo</h2>
      <p>
        Transformar conceitos de negócio em mecânicas de jogo acessíveis,
        conectando aprendizado pedagógico e experiência de produto digital.
      </p>
    `,
    externalLink: "",
    hasDetail: false,
  },
];

/* ========================================= */
/* ELEMENTOS DO DOM                          */
/* ========================================= */

const listView = document.getElementById("list-view");
const detailView = document.getElementById("detail-view");
const projectsList = document.getElementById("projects-list");
const detailContent = document.getElementById("detail-content");
const detailBanner = document.getElementById("detail-banner");
const filtersNav = document.getElementById("filters");
const backBtn = document.getElementById("back-btn");
const homeLink = document.getElementById("home-link");
const contentArea = document.getElementById("content-area");

let activeFilter = "all";

function resetScrollPosition() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  if (contentArea) {
    contentArea.scrollTop = 0;
  }
}

/* ========================================= */
/* RENDERIZAÇÃO DA LISTAGEM                    */
/* ========================================= */

function getFilteredProjects() {
  if (activeFilter === "all") return projects;
  return projects.filter((p) => p.category === activeFilter);
}

function renderProjects() {
  const filtered = getFilteredProjects();

  if (filtered.length === 0) {
    projectsList.innerHTML =
      '<p class="projects-empty">Nenhum projeto encontrado para este filtro.</p>';
    return;
  }

  projectsList.innerHTML = filtered
    .map((project) => {
      const isClickable = project.hasDetail !== false;

      return `
    <article
      class="project-card${isClickable ? "" : " project-card--static"}"
      data-id="${project.id}"
      ${isClickable ? `tabindex="0" role="button" aria-label="Ver detalhes de ${project.title}"` : ""}
    >
      <img
        class="project-card__image"
        src="${project.image}"
        alt="${project.title}"
        loading="lazy"
      >

      <div class="project-card__header">
        <h2 class="project-card__title">${project.title}</h2>
        <span class="category-tag">${CATEGORY_LABELS[project.category]}</span>
      </div>

      <div class="project-card__meta">
        <div class="meta-tags">
          <span class="meta-tag">${project.date}</span>
          <span class="meta-tag">${project.institution}</span>
          ${project.tags.map((tag) => `<span class="meta-tag">${tag}</span>`).join("")}
        </div>
        ${isClickable ? `<img class="project-card__arrow" src="Assets/arrow-right.png" alt="" aria-hidden="true">` : ""}
      </div>

      <p class="project-card__description">${project.description}</p>
    </article>
  `;
    })
    .join("");

  // Clique e teclado apenas nos cards com página de detalhe
  projectsList.querySelectorAll(".project-card:not(.project-card--static)").forEach((card) => {
    card.addEventListener("click", () => openDetail(card.dataset.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDetail(card.dataset.id);
      }
    });
  });
}

/* ========================================= */
/* TELA DE DETALHE (opção B)                 */
/* ========================================= */

function openDetail(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project || project.hasDetail === false) return;

  const bannerSrc = project.bannerImage || project.image;

  detailBanner.hidden = false;
  detailBanner.innerHTML = `
    <img
      class="detail-banner__image"
      src="${bannerSrc}"
      alt=""
    >
  `;

  const isCaseStudy = project.caseStudy === true;
  detailContent.classList.toggle("detail-content--case", isCaseStudy);

  const headerHtml = isCaseStudy
    ? `
    <div class="detail-content__intro">
      <h1 class="detail-content__title">${project.detailTitle || project.title}</h1>
      <span class="category-tag">${CATEGORY_LABELS[project.category]}</span>
    </div>
  `
    : `
    <h1 class="detail-content__title">${project.detailTitle || project.title}</h1>

    <div class="detail-content__category">
      <span class="category-tag">${CATEGORY_LABELS[project.category]}</span>
    </div>
  `;

  detailContent.innerHTML = `
    ${headerHtml}

    <p class="detail-content__description">${project.detailDescription || project.description}</p>

    <div class="detail-content__meta">
      <span class="meta-tag">${project.date}</span>
      <span class="meta-tag">${project.institution}</span>
      ${(project.detailTags || project.tags).map((tag) => `<span class="meta-tag">${tag}</span>`).join("")}
    </div>

    <div class="detail-content__body${isCaseStudy ? " detail-content__body--case" : ""}">
      ${project.detailContent}
    </div>

    ${
      project.externalLink
        ? `<p style="margin-top: 2em;"><a href="${project.externalLink}" target="_blank" rel="noopener noreferrer" class="filter-btn filter-btn--active" style="display: inline-block;">Ver projeto</a></p>`
        : ""
    }
  `;

  // Alterna visão: esconde listagem, mostra detalhe
  listView.classList.add("hidden");
  detailView.classList.remove("hidden");
  detailView.setAttribute("aria-hidden", "false");

  // Ativa modo detalhe: esconde sidebar e centraliza conteúdo
  document.body.classList.add("detail-mode");

  resetScrollPosition();
  requestAnimationFrame(resetScrollPosition);
}

function closeDetail() {
  listView.classList.remove("hidden");
  detailView.classList.add("hidden");
  detailView.setAttribute("aria-hidden", "true");
  document.body.classList.remove("detail-mode");
  detailContent.innerHTML = "";
  detailContent.classList.remove("detail-content--case");
  detailBanner.innerHTML = "";
  detailBanner.hidden = true;

  resetScrollPosition();
  requestAnimationFrame(resetScrollPosition);
}

/* ========================================= */
/* FILTROS                                   */
/* ========================================= */

function setActiveFilter(filter) {
  activeFilter = filter;

  filtersNav.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("filter-btn--active", btn.dataset.filter === filter);
  });

  renderProjects();
}

filtersNav.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  setActiveFilter(btn.dataset.filter);
});

/* ========================================= */
/* NAVEGAÇÃO                                 */
/* ========================================= */

backBtn.addEventListener("click", closeDetail);

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  closeDetail();
});

/* ========================================= */
/* INICIALIZAÇÃO                             */
/* ========================================= */

renderProjects();
