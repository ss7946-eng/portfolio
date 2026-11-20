{
  const project = window.PORTFOLIO.projects.find(item => item.id === 'gongju-singwan-608');
  if (project) {
    project.image = 'images/gongju/main.webp';
    project.images = [
      project.image,
      'images/gongju/1.webp',
      'images/gongju/2.webp',
      'images/gongju/3.webp',
      'images/gongju/4.webp'
    ];
  }
}
