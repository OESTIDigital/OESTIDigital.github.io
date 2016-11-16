---
layout: post
title:  "Tutorial de instalação Jekyll"
date:   2016-08-25 12:00:00 -0300
category: Tutoriais
tags:	[jekyll, ruby, bundler, blog]
author: Júnior Messias
author_github: jrmessias
---

Este tutorial tem como objetivo instruir a instalação do Jekyll para que todos possam contribuir com este blog e ter o seu próprio, gratuitamente. Para isto, vamos entender o que é o Jekyll e o que precisamos para utilizá-lo.

____

# Jekyl, mas afinal, o que é o Jekyll?

Jekyll é, simplesmente, um gerador de site estático. É necessário somente um diretório que contenha os arquivos de texto nos formatos que rodam no conversor (como Markdown) ou Liquid, e então são gerados arquivos estáticos prontos para publicação no seu servidor web favorito. Jekyll é o motor por trás do GitHub Pages, assim você pode hospedar seu projeto, página, blog ou site Jekyll gratuitamente no GitHub. (Fonte: [Jekyll](https://jekyllrb.com/docs/home/) - Tradução própria)

A instalação será dividia em Ruby e RubyDevKit para os diferentes sitemas operacionais (Windows, Linux e Mac), a instalação do Bunler e Jekyll é igual para todos os sistemas operacionais, havendo alguns adendos, podemos manter como observações ou utilizar os comentários neste post.

## Instalação do Ruby - [Download](http://rubyinstaller.org/downloads/) :arrow_down:

> É necessário que seja instalado o Ruby 2 ou superior, se esta não for a versão instalada, verifique como atualizá-la em seu SO.

#### Linux (Ubuntu 16 - Xenial Xerus)

> Verifique qual distribuição linux está utilizando para saber qual o gerenciador de pacotes (yum, apt-get ou rpm) será utilizado, os exempls aqui serão com Ubuntu e Debian.

No terminal, digite `sudo apt-get install ruby ruby-dev make gcc nodejs`

*Contribuição de Felippe Puhle [@felippepuhle](https://github.com/felippepuhle)*

#### Mac

As versões mais recentes do Mac OS já vem com o Ruby instalado.

Caso você não tenha o Ruby instalado basta digitar o seguinte comando `brew install ruby`, nós recomendamos o uso do [Homebrew](http://brew.sh/), um gerenciador de pacotes para Mac OS para fazer a instalação do Ruby.

Para instalar o Jekyll é necessário executar o seguinte comando `sudo gem install jekyll`, pronto isso é o suficiente.

*Contribuição de Johni Douglas Marangon [@johnidm](https://github.com/johnidm)*

#### Windows 

Para este tutorial, estou utilizando a versão 2.3.1 do instalador (rubyinstaller-2.3.1-x64.exe).

Clique em `next` até aparecer a tela onde será solicitado o caminho da instalação, utilize a seguinte configuração:
- Utilizar `C:\Ruby` e marcar as opções
- Marcar a opção `Add Ruby to your PATH`

Após instalado, via linha de comando, digite `ruby -v`, aparecerá a seguinte mensagem `ruby 2.3.1p112 (2016-04-26 revision 54768) [x64-mingw32]`.

#### Instalação do RubyDevKit - [Download](http://rubyinstaller.org/downloads/) :arrow_down:
Para este tutorial, estou utilizando a versão 4.7.2-20130224-1432 do pacote (DevKit-mingw64-64-4.7.2-20130224-1432-sfx).

Siga os seguintes passos:
- Extraia este pacote para o diretório `C:\RubyDevKit\`.
- Via linha de comando entre no diretório criado `cd C:\RubyDevKit`.
- Agora vamos detectar a instalação do Ruby para a o próxima configuração, digite `ruby dk.rb init`, aaparecerá a seguinte mensagem `[INFO] found RubyInstaller v2.3.1 at C:/Ruby`.
- Então vamos vincular a instalação do DevKit com o Ruby, digite `ruby dk.rb install`, aparecerá a seguinte mensagem `[INFO] Installing 'C:/Ruby/lib/ruby/site_ruby/devkit.rb'`.

## Instalação do [Bundler](http://bundler.io/) e [Jekyll](https://jekyllrb.com/)

#### Instalação do Bundler
Abra o seu programa de linha de comando e digite `gem install bundler`.

\* É um gerenciador de dependências, pacotes gem, para Ruby.

Até aqui, Ruby, Ruby DevKit e Bundler.

#### Instalação do Jekyll
Abra o seu programa de linha de comando e digite `gem install jekyll`.

Até aqui, Ruby, Ruby DevKit, Bundler e Jekyll.

#### Possível erro de certificado na instalação das gems
Caso o seguinte erro ocorrer na instalação de alguma gem, siga os procedimentos abaixo:

```
ERROR:  Could not find a valid gem 'bundler' (>= 0), here is why:
          Unable to download data from https://rubygems.org/ - SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (https://api.rubygems.org/specs.4.8.gz)
```

- Baixe a [rubygems_update version 2.6.8](https://rubygems.org/gems/rubygems-update/versions/2.6.8) (última versão até o momento)
- Abra o seu programa de linha de comando na mesma pasta do download e digite `gem install rubygems-update-2.6.8.gem`
- Ainda Na linha de comando, digite `update_rubygems --no-ri --no-rdoc`
- Confirme a versão *2.6.8* com o comando `gem -v`
- (Opcional) Desinstale o update_rubygems com o comando `gem uninstall rubygems-update -x`

### Para rodar o projeto Jekyll
As dependências deste projeto estão no arquivo Gemfile, para baixá-las, na linha de comando, digite `bundler install`, estas dependencias também estão no arquivo `_config.yml` que é o arquivo de configuração do jekyll.

Para poder visualizar o site, utilize o comando `jekyll serve`. Na linha `Server address` será exibida a url local do site, algo como `Server address: http://127.0.0.1:4000/`.

Para saber mais comandos e informações sobre o jekyll, acesse o site oficial https://jekyllrb.com/.

Até aqui, seu site Jekyll funcionando. :smile:

### Observações e Regras :warning:
Este projeto possui o [Grunt](http://gruntjs.com/) como automatizador de tarefas, para geração de assets como css e js.

**Regras:**
- Por favor, utilizem a pasta `assets/img` para colocar as imagens relacionadas aos posts, com nome pode-se utilizar o nome do post, é unico;
- Na pasta `_post` há os arquivos de posts do blog, lembre-se sempre de colocar o Nome e URL do Github do autor;
- O conteúdo dos posts podem ser escritos em markdown, liquid e html;
- Antes de criar um post, crie um `pull request` com o post para melhorá-lo, conversar sobre, ter opiniões e auxílio de outros colegas.
 
**Agora você pode colaborar com nosso blog e ter o seu próprio, gratuitamente** :smile:

### Sites com templates Jekyll
- [Themeforest](https://themeforest.net/category/static-site-generators/jekyll)
- [Jekyll Themes](http://jekyllthemes.org/)
- [Jekyll Themes](https://jekyllthemes.io/)
- [Jekyll Themes](http://themes.jekyllrc.org/)
- [Jekyll Tips](http://jekyll.tips/templates/)
- [GitHub](https://github.com/jekyll/jekyll/wiki/themes)
