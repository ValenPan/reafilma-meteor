if (Reels.find().count() === 0) {
  Reels.insert({
    title: 'Comunicación corporativa',
    author: 'Reafilma',
    img: 'img/principal.png',
    url: '<iframe src="//player.vimeo.com/video/74641130" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  });

  Reels.insert({
    title: 'Publicidad Viral',
    author: 'Reafilma',
    img:'img/viral.png',
    url: '<iframe src="//player.vimeo.com/video/74622324" width="500" height="281" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  });

  Reels.insert({
    title: 'Eventos',
    author: 'Reafilma',
    img:'img/eventos.png',
    url: '<iframe src="//player.vimeo.com/video/74622323" width="500" height="281" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  });

  Reels.insert({
    title: 'Reportajes',
    author: 'Reafilma',
    img:'img/reportajes.png',
    url: '<iframe src="//player.vimeo.com/video/74622325" width="500" height="281" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  });
}