---
layout: post
title:  "Git e Github para Iniciantes"
date:   2016-08-07 22:17:00 -0300
categories: tutoriais
---

<center>![]({{ site.url }}/assets/git-github.jpg)</center>

Esse tutorial tem como objetivo ser um guia para uso do Git e GitHub.

Se você tem alguma sugestão de melhoria para esse texto abra uma [issue](https://github.com/OESTIDigital/tutoriais/issues) ou se preferir você pode enviar um [pull request](https://github.com/OESTIDigital/tutoriais/pulls) com as modificações.

[Slides da apresentação](http://slides.com/johnidouglasmarangon/git-e-github-para-iniciantes/fullscreen)

## Objetivos

- Entender o que é controle de versão
- Principais comandos do Git
- Como usar o GitHub
- Aprender a compartilhar seu código

## Material complementar

É importante que você consulte outras fontes de informação, nós separamos alguns conteúdos com mais detalhes de como você pode utilizar o Git e GitHub.

#### Livro

- https://www.casadocodigo.com.br/pages/sumario-git-github

### Tutoriais

- http://rogerdudler.github.io/git-guide/
- http://johnidouglas.com/dicas-para-uso-do-git-e-o-github/

### Curso

- http://willianjusten.teachable.com/courses/git-e-github-para-iniciantes
	
### Videos recomendados 

- https://www.youtube.com/watch?v=TReVFOxhh7E
- https://www.youtube.com/watch?v=Fc_UC5SywuU
- https://www.youtube.com/watch?v=Ahv6vPTZJqk
- https://www.youtube.com/watch?v=UMhskLXJuq4
- https://www.youtube.com/watch?v=neDiLHwXSVo
- https://www.youtube.com/watch?v=yNwh0S0S0bU

> Dica: No Youtube você pode aumentar a velocidade de execução do vídeo para 1.5x

### Mitos

- Git e GitHub é dificil
- Medo de usar linha de comando
- O que eu estou escrevendo não é bom

### Motivação

- No seu computador ninguém vê o seu potencial
- O GitHub é seu portfólio
- O código não é só seu, compartilhe ele.
- Você pode ajudar muitas pessoas a escreverem software com mais qualidade

### Compartilhamento de Código

- Contribuindo com projetos open source
- De like em projetos que você gostou e usou
- Escreva código e libere no GitHub
- Crie Gists
- Escreva seus próprios projetos
- Compartilhe os projetos que você esta usando (em redes sociais, converse com amigos, escreva sobre eles)
- Crie um blog e escreva sobre o que você esta fazendo
- Participe de eventos e ajude a organizar

## Entendendo o Git & GitHub

### Sistema de Controle de Versão

Um sistema de controle de versão tem a finalidade de gerenciar modificações em arquivos, um arquivo sofre muitas alterações durante o seu uso sendo necessário manter um histórico dessas alteraçoes para posterior manipulação, por exemplo, voltar o aquivo para uma versão especifica. 

No que diz respeito a código é essencial o controle de versão, pois com isso conseguimos vincular uma documentação das alteracoes, comparar diferentes versoes e saber o que foi alterado e por que, entre outras vantagens. Em projetos de software o controle de versão está diretamente vinculado ao trabalho em equipe onde muitas pessoas fazem diferentes alterações em arquivos, exigindo a mesclagem desse trabalho. Essa mescla é conhecida como __merge__, e pode ocorrer de forma automática. Caso mais pessoas alterem o mesmo código, será necessário lidar com esses conflitos manualmente.

Em um sistema de controle de versao nós temos um repositório onde obtemos as versões do projeto ou de algum arquivo em específico.

### Git

O Git é um sistemas de controle de versão distribuído onde os usuários tem uma cópia dos repositórios em sua máquina, isso permite que você consiga fazer alterações e commits sem estar necessariamente ligado a um repositório remoto.

Sistemas de controle de versão baseados no modelo cliente servidor, como por exemplo o SVN exigem que você tenha um servidor remoto para poder centralizar as alterações.

O Git é utilizado por inúmeras empresas. Atualmente é indispensável saber como utilizar ele para uma carreira bem sucedida em desenvolvimento de software.

### Instalando o Git

O processo de instalação é bem simples, acesse a página https://git-scm.com/downloads escolha o sistemas operacional que você esta utilizando e siga as instruções de instalação.

Recomenda-se fortemente o uso de linha de comandos para trabalhar com o Git, você pode utilizar alguma GUI para complementar o uso da linha de comando, como por exemplos ver os logs de commit, árvore de commits, diff de commits, etc.

Nesse site, https://git-scm.com/downloads/guis, você pode verificar algumas alternativas para clientes GUI.

Para complementar o estudo faça o [Git Tutorial](https://try.github.io/)

Outras ferramentas alem do Git:
- [SVN](https://subversion.apache.org/)
- [Mercurial](https://www.mercurial-scm.org/)
- [CSV](www.nongnu.org/cvs/)
- [Bazzar](bazaar.canonical.com/)
- [Microsoft TFS](https://www.visualstudio.com/pt-br/products/tfs-overview-vs.aspx).

### GitHub

É uma plataforma colaborativa para usuários do git. Inicialmente funciona como um repositório remoto, porém também tem a função social e permite que os desenvolvedores discutam detalhes do código em questão.

O site surgiu em 2007, e é utilizado por inúmeras empresas importantes como Google, Nasa, Linekdin, Facebook e Twitter.

> Um repositório remoto pode ficar na nuvem ou em outa máquina

O GitHub é muito utilizado para hospedar projetos open source. E não custa nada se você quiser hospedar projetos públicos. Já para projetos privados é necessário pagar.

Existem muitas funcionalidades que podem ser utilizadas pelo desenvolvedores:

- Wiki do projeto - crie documentações eficientes para seu projeto
- Colaboradores - adicione pessoas que fazem parte do projeto
- Issues - registrar e conversar sobre questões do projeto
- Releases - controlar versões oficiais
- Follow - siga outros desenvolvedores no github
- Watch ( assista um projeto em específico e receba notificações sobre atualizações no projeto)
- GitHub Pages - crie um site para seu projeto e hospede no github
- Gist - É uma maneira simples de compartilhar trechos de código

Para mostrar seu código para o mundo utilize o GitHub. Se você ainda tem tem uma conta no GitHUb crie uma se tiver dúvidas pode acessar esse [vídeo](https://www.youtube.com/watch?v=i0TPn0KnqDs).

> Importante: Git não é a mesma coisa que GitHub, Git é o controle de versão, GitHub é um site na web que você hospeda seus projetos.

Alem do GitHub temos outras alternativas como: [GitLab](https://about.gitlab.com/); [BitBucket](https://bitbucket.org/) e [SourceForge](https://sourceforge.net/).

### Configurando o Git

A configuração básica que você precisa fazer é a de usuário e email, através de linha de comando digite a seguinte instrução, essas informações serão utilizadas nos commits:

```
git config --global user.name "<Seu Nome>"
git config --global user.email "<Seu Email>"
```

Exemplo:

```
git config --global user.name "Johni Douglas Marangon"
git config --global user.email "johni.douglas.marangon@gmail.com"
```

Você pode listar as suas configurações utilizando o comando `git config --list`. 

Existem outras configurações que você pode estar fazendo para melhor o seu ambiente de desenvolvimento, acesse esse [link](https://git-scm.com/book/tr/v2/Customizing-Git-Git-Configuration) para ver uma lista completa das configurações do disponíveis.  

Outro comando útil que você pode utilizar é o `help` você pode listar a ajuda de todos os comandos digitando `git help` ou obter detalhes de um comando usando `git help [nome do comando ]` como por exemplo: `git help commit`.

[Video](https://www.youtube.com/watch?v=NjvCBDpz8_U)

### Versionando seu código com o Git

Nós vamos inicializar um repositório criando uma pasta com o nome `sistema-biblioteca` o objetivo é utilizar essa pasta como exemplo de uso do Git.

```
mkdir sistema-biblioteca
cd sistema-biblioteca
```

O comando `init` transforam o diretório em um repositório Git. 

```
git init
```

Nosso projeto ainda está vazio, mas já podemos verificar a existência de uma pasta oculta chamada `.git`, nesse pasta ficam os metadados do repositório. Você não deve excluir ou alterar qualquer arquivo desse local.

Para rastrear aquivos nos precisamos criar eles dentro do repositório, como abaixo:

```
touch index.html
touch anotacoes.txt
mkdir css
touch css/index.css
```

O comando `git status` deve ser utilizado para verificar o estado dos seus arquivos, execute esse comando no repositório e você vai ter uma saída como essa:

Observe que o Git está falando que os arquivos ainda não estão sendo rastreados, você precisa executar o comando `git add` para rastrear esse arquivos.

Você pode executar esse comando de duas formas:

- Adicionado todos os arquivos: `git add .`.
- Adicionado alguma arquivo especifico: `git add <nome do arquivo>`.

[Vídeo](https://youtu.be/ihSNYRyK8UQ)

Os arquivos que compõem o nosso projeto já estão sendo rastreados nos precisamos agora gravar as nossas alterações, ou em uma linguagem mais técnica *commitar* no repositório local.

Execute o comando `git commit -m "Incluído os arquivos index.html e index.css"`, o comando `git commit` foi invocado com a opção `-m` que recebe como parâmetro uma mensagem, essa mensagem vai estar vinculada ao log do commit.

Você também pode utilizar o comando `git commit -am "[menagem do commit]"` esse comando evita a necessidade de usar o `git add`

> Utilize o comando `git log` para ver o log de commits.

### Alterando um arquivo

Ao longo do desenvolvimento do projeto vai fazendo alterações em arquivos já rastreados, nesse caso você deve utilizar os comandos `git add` e `git commit` pra liberar as modificações.

[Video](https://youtu.be/vUI0THHSWkU) 

### Removendo um arquivo

Se você quiser remover um arquivo do verssionamento você pode utilizar o comando `git rm [nome do arquivo]` esse comando excluí o arquivo do disco.

[Video](https://youtu.be/hUcF7x3aurU) 

### Ignorando arquivos

Existem aquivos que não fazem sentido serem versionados, por exemplo arquivos compilados, de IDEs, ou temporários. O Git tem um mecânismo que permite ignorar esse arquivos e pastas. Para isso basta criar um aquivo chamado `.gitingore`. e colocar dentro dele o que deve ser ignorado.

```
anotacoes.txt
*.exe
eclipse/
```

Mais informações sobre o `gitingore`:

- https://github.com/github/gitignore
- https://git-scm.com/docs/gitignore
- https://help.github.com/articles/ignoring-files/

[Video](https://youtu.be/ivXPnC1ir5Y)

## Compartilhando seu código através do GitHub

### Documentação

O arquivo `README.md` é muito importante e deve sempre existir em um projeto, ele fica na raiz do projeto e pode possuir informações como:

- instruções sobre configuração
- instruções sobre instalação
- instruções sobre como operar o programa
- créditos e agradecimentos
- changelog: relato de mudanças

> Lembre-se: quanto mais fácil for de entender o que seu projeto faz, mais fácil será de outras pessoas adotarem.

### Apontando seu projeto para o GitHub

No caso `sistema-biblioteca`, foi inicializado o repositório Git na maquina local e agora é necessário liberar esse projeto no repositório remoto, nesse caso nos precisamos apontar os dois repositório. Para isso nos vamos executar o comando `git remote`.

Antes de executar o comando você deve criar um repositório no GitHub, quando o GitHub cria um repositório você recebe uma URL que vai permitir ligar os dois repositório.

```
git remote add origin <URL do GitHub>
```

Após isso nos precismos enviar as alterações para o GitHub, o comando `git push` deve ser usado para fazer isso

```
git push -u origin master
```

Você precisara informar o usuário e senha do GitHub

[Video](https://youtu.be/Iy1VAne_onU)

Acesse a URL do projeto no GitHub e veja que as alterações foram enviadas.

### Clonando um reposítorio

Você encontrou um projeto legal e você executar ele na sua máquina, para isso nos vamos clonar esse repositório através do comando `git clone`.

```
git clone <URL do repositório remoto>
```

Depois disso uma pasta chamada `hp12c` é criado na minha máquina e eu vou ler o `README.md` ou outro arquivo de instruções para rodar o projeto na minha maquina.

[Video](https://youtu.be/k5PqZO-yJas)

###  Clonado um repositório e subindo alterações no seu GitHub

Nesse caso você deve clonar o projeto com o comando `git clone` fazer a modificações commitar as alterações e executar o comando `git push`

[Video](https://youtu.be/_itJaI110_Q)

### Fazendo fork de um projeto e criando pull requests

Fork e pull requests são ações utilziadas para contribuir com projetos open source com o github.

O fork consiste em realizar a cópia de um repositório de alguém aos nossos repositórios. Ele é o primeiro passo para colaborar em um projeto.

O pull request consiste em uma solicitação de integração das nossas modificações com o repositório que realizamos um fork. Para realizar um pull request devemos ir até o repositório gerado pela operação de fork (na nossa base de repositórios). Lá, encontraremos um botão chamado ‘pull request’:

[Video](https://youtu.be/NY58DVksBMk)

### Subindo os projetos da faculdade

Para liberar os projetos da faculdade você pode seguir os passo abaixo. Basicamente é um conjunto de comandos que já conhecemos.

- [ ] Criar a pasta do projeto;
- [ ] Criar o arquivo `README.md ` com detalhes do projeto;
- [ ] Criar o arquivo `.gitginore`;
- [ ] Criar o um repositório no GitHub para obter a `<URL do projeto>`;
- [ ] Executar os comando do Git para versionar os seus arquivos fontes
	- `git init`
	- `git add .`
	- `git commit` 
- [ ] Executar o seguinte comandos para subir os aquivos no GitHub
	- `git add origin <URL do projeto>`
	- `git push origin master`

[Video](https://youtu.be/XURXM3DojDU)