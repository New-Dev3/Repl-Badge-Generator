var language = "";
function update(){
  var link = document.querySelector(`#link`).value;
  if(link.slice(0,4)!="http"){
    link = `https://${link}`
  }
  

  var parser = document.createElement(`a`);
  parser.href = link;

  if(parser.hostname!= window.location.hostname){
    document.querySelector(`#result`).style.display = `block`;
    console.log(parser.hostname)
    if(parser.hostname==`repl.it`){
      repl(link);
    }
    if(parser.hostname==`github.com`){
      repo(link);
    }
  }

}

function repl(link){
  document.querySelector(`#preview-image`).setAttribute(`src`, `try.png`);
  document.querySelector(`#preview-link`).setAttribute(`href`, link + '?ref=button');
  document.querySelector(`#markdown`).setAttribute(`onclick`, `simplecopy('[![Try on repl.it](https://repl-badge.jajoosam.repl.co/try.png)](${link}?ref=button)');alert('Copied to clipboard 📋')`)
}

function repo(link){
  console.log(link);
  document.querySelector(`#preview-image`).setAttribute(`src`, `https://repl.it/badge/github/${link.split(`/`).slice(3).join(`/`)}`);
  document.querySelector(`#preview-link`).setAttribute(`href`, `https://repl.it/github/${link.split(`/`).slice(3).join(`/`)}`);
  document.querySelector(`#markdown`).setAttribute(`onclick`, `simplecopy('[![Run on repl.it](https://repl.it/badge/github/${link.split(`/`).slice(3).join(`/`)})](https://repl.it/github/${link.split(`/`).slice(3).join(`/`)}}&ref=button)');alert('Copied to clipboard 📋')`)
}