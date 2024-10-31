document.addEventListener("DOMContentLoaded", () => {
    const firstYearSection = document.getElementById("first-year");
    const secondYearSection = document.getElementById("second-year");

    const palestras = {
        primeiroAno: [
            { titulo: "Apresentação do cronograma anual", descricao: "Foi um encontro com as empresas do Ptech para compreender o cronograma anual e as possíveis propostas de atividades.", data: "18/04/2023", imagem: "Palestra01.jpg" },
            { titulo: "Dia a dia do Analista de Suporte", descricao: "Tivemos uma palestra guiada pela Fernanda Lima contando o dia a dia de um analista de suporte, dando enfâse nas principais dificuldades, mas também nos benefícios de seguir essa carreira.", data: "27/04/2023", imagem: "Palestra02.jpg" },
            { titulo: "Boas vindas da empresa ITIX", descricao: "A palestra foi conduzida pelo Sócio Proprietário, Carlos Santos, para nos apresentar a empresa ITIX. ", data: "04/05/2023", imagem: "Palestra03.jpg" },
            { titulo: "De estagiária a Analista de Requisitos", descricao: "A palestrante Tamires Martins mostrou que a importância da interpretação e relacionamento humano tem tanto valor quanto escrever código.", data: "05/05/2023", imagem: "Palestra04.jpg" },
            { titulo: "Ética e Valores", descricao: "Liliane da Uno Soluções preparou um quiz para nos mostrar o poder de ter um carater bem alinhado.", data: "11/05/2023", imagem: "Palestra05.jpg" },
            { titulo: "Treinamento Scrum", descricao: "Recebemos um treinamento presencial com o representante da empresa ITIX sobre o método Scrum, aplicado em um projeto de reciclagem.", data: "16/11/2023", imagem: "Palestra06.jpg" },

        ],
        segundoAno: [
            { titulo: "Criatividade e Inovação: Um Desafio Constante", descricao: "Trabalhamos a visualização de resoluções em diversas situações.", data: "08/04/2024", imagem: "Palestra07.jpg" },
            { titulo: "As possibilidades da IA no mercado de trabalho", descricao: "A Etec Fernando Prestes recebeu uma palestra conduzida por Guilherme Bastos, da empresa Tegra, que explorou o tema de IA para os alunos usarem na carreira.", data: "23/05/2024", imagem: "Palestra08.jpg" },
            { titulo: "Liderança e Gestão 3.0", descricao: "A Eduzz realizou uma palestra online com Victor Palencia, que compartilhou abordagens inovadoras em liderança e gestão.", data: "27/05/2024", imagem: "Palestra09.jpg" },
            { titulo: "Explorando Homelabs: Como criar seu próprio ambiente de desenvolvimento pode transformar sua carreira em TI", descricao: "Participamos de um bate-papo com estagiários da Itix pela manhã e, logo depois, acompanhamos uma palestra conduzida por Edmilson, que explorou novas abordagens para o desenvolvimento de carreira em TI.", data: "18/06/2024", imagem: "Palestra10.jpg" },
            { titulo: "Hacker do bem e a segurança digital no dia-a-dia", descricao: "Assistimos a uma palestra da Eduzz apresentada por Luiz Milagres, que abordou práticas e insights sobre segurança digital para o cotidiano.", data: "31/07/2024", imagem: "Palestra11.jpg" },
            { titulo: "Você é uma pessoa organizada?", descricao: "Assistimos a uma palestra da Eduzz, conduzida por Vinicius e Michele, que trouxe reflexões sobre práticas de organização pessoal e profissional.", data: "28/08/2024", imagem: "Palestra12.jpg" },
            { titulo: "Fluxo de Operações Comercial", descricao: "Assistimos a uma palestra da empresa Uno, apresentada por André Lopes e Tamiris Marciano, que discutiu estratégias para aprimorar operações na área comercial.", data: "29/08/2024", imagem: "Palestra13.jpg" },
            { titulo: "Quais as tendências da área de TI com a virada da IA Generativa e outras tecnologias", descricao: "Assistimos a uma palestra da empresa Tegra, conduzida por Guilherme Bastos, que explorou novas tendências na área de TI impulsionadas por avanços em IA generativa e outras tecnologias.", data: "05/09/2024", imagem: "Palestra14.jpg" },
            { titulo: "Capricho: skill cada vez mais raro no Mercado", descricao: "Assistimos a uma palestra da Eduzz, apresentada por Luiz Milagres, que destacou a importância de desenvolver habilidades de qualidade e atenção aos detalhes no mercado atual.", data: "24/09/2024", imagem: "Palestra15.jpg" },
            { titulo: "Desenvolvimento Low-Code", descricao: "Participamos de uma palestra da Tegra, conduzida por Guilherme Bastos, que abordou as oportunidades e vantagens do desenvolvimento low-code.", data: "10/10/2024", imagem: "Palestra16.jpg" },
            { titulo: "Da Fatec para o mundo", descricao: "Acompanhamos uma palestra da Iochpe, apresentada por Flavia Freitas, que compartilhou experiências e insights sobre a transição da academia para o mercado de trabalho.", data: "17/10/2024", imagem: "Palestra17.jpg" },
        ]
    };

    function carregarPalestras(ano, section) {
        ano.forEach(palestra => {
            const item = document.createElement("div");
            item.classList.add("col-md-4", "d-flex", "align-items-stretch");
            item.innerHTML = `
                <div class="portfolio-item p-3">
                    <h2>${palestra.titulo}</h2>
                    <img src="img/${palestra.imagem}" class="img-fluid mb-3" alt="${palestra.titulo}">
                    <p>${palestra.descricao}</p>
                    <small>Data: ${palestra.data}</small>
                </div>
            `;
            section.appendChild(item);
        });
    }

    carregarPalestras(palestras.primeiroAno, firstYearSection);
    carregarPalestras(palestras.segundoAno, secondYearSection);
});
