'use strict';

const lomake = document.querySelector('form');
const apiUrl = 'https://api.tvmaze.com/search/shows?q=';

async function fetchJson(url, options = {}) {   //tää funktio voi käyttää ihan mihin projektiin vaan
  const vastaus = await fetch(url, options);
  console.log(vastaus)
  const json = await vastaus.json()
  //const options = {} //tähän mä jäin. Ehkä tää rivi on väärin.
  if (!vastaus.ok) {
    throw new Error(vastaus.statusText);
  }
  return json;
}

const body = document.querySelector('body')
const div = document.createElement('div')
body.appendChild(div)



lomake.addEventListener('submit', async function (evt) {

  try {
    div.innerHTML = ''
    evt.preventDefault();
    const hakusana = document.querySelector('#query').value;
    const sarjat = await fetchJson(apiUrl + hakusana);

    for (let i in sarjat) {


      const name = sarjat[i]['show']['name']
      const url = sarjat[i]['show']['url']
      const imageM = document.createElement('img')
      let imageSource
      const imageReplace = 'http://placekitten.com/200/300'

      if (sarjat[i]['show']['image']) {
        imageSource = sarjat[i]['show']['image']['medium']
      }
      else {
        imageSource = imageReplace // vaikka jsonissa image:null, image objekti EI OLE.
      }
      //sama asia, toisella tavalla:
      // let imageSource = sarjat[i]['show']['image'] ? sarjat[i]['show']['image']['medium'] : imageReplace
      console.log(imageSource)

      imageM.src = imageSource




      const uglySummary = sarjat[i]['show']['summary']
      const summary = uglySummary.replace(/<[^>]*>?/gm, '')
      const uglyGenres = sarjat[i]['show']['genres']
      const genres = uglyGenres.join(',').replace(/,/g, ' | ').split()


      const myBody = document.querySelector('body')

      const article = document.createElement('article')
      const title = document.createElement('h2')
      const figure = document.createElement('figure')
      const figcaption = document.createElement('figcaption')
      const dialog = document.createElement('dialog')
      const openButton = document.createElement('button')
      const closeButton = document.createElement('button')
      const iframe = document.createElement('iframe')
      const anchor = document.createElement('a')
      const paragraf = document.createElement('p')

      myBody.appendChild(article)
      div.appendChild(article)
      article.appendChild(title)
      title.textContent += name

      article.appendChild(figure)
      figure.appendChild(figcaption)
      figure.appendChild(imageM)
      figure.appendChild(paragraf)
      paragraf.textContent += genres
      // figcaption.append(summary)
      article.appendChild(openButton)
      article.appendChild(dialog)
      dialog.appendChild(iframe)
      dialog.appendChild(closeButton)
      iframe.appendChild(anchor)

      openButton.setAttribute('class','openButton')
      openButton.textContent += 'link to description'
      closeButton.setAttribute('class', 'closeButton')
      closeButton.textContent += 'close'
      dialog.setAttribute('class', 'modal')
      dialog.setAttribute('id', 'modal')
      iframe.setAttribute('src', url)

      anchor.textContent += url
      anchor.setAttribute('href',url)
      anchor.setAttribute('target', '_blank')
      openButton.addEventListener('click', ()=> {
        dialog.showModal();
      })
      closeButton.addEventListener('click', ()=>{
        dialog.close()
      })




    }



  } catch (e) {
    console.error(e.message);
  }
});



