const config = {
  title: 'Reinaldy Rafli - Code',
  description: 'Reinaldy Rafli is a full stack web developer based in Indonesia.',
  url: 'https://code.reinaldyrafli.com',
  image: 'https://code.reinaldyrafli.com/social.jpg',
  keywords: ['reinaldy rafli', 'full stack', 'web dev', 'web developer', 'vue', 'indonesia', 'jakartajs', 'github', 'open source'],
};

function prepareMeta() {
  const meta = [];

  meta.push(
    {
      name: 'og:title',
      content: config.title,
    },
    {
      name: 'twitter:title',
      content: config.title,
    },
  );
  meta.push(
    {
      name: 'description',
      content: config.description,
    },
    {
      name: 'og:description',
      content: config.description,
    },
    {
      name: 'twitter:description',
      content: config.description,
    },
  );

  meta.push({
    name: 'og:url',
    content: config.url,
  });

  meta.push(
    {
      name: 'og:image',
      property: 'og:image',
      content: config.image,
    },
    {
      name: 'og:image:secure_url',
      property: 'og:image:secure_url',
      content: config.image,
    },
    {
      name: 'twitter:image',
      content: config.image,
    },
  );

  meta.push({
    name: 'keywords',
    content: config.keywords.join(','),
  });

  return meta.map(item => {
    if (item.name && !item.property) {
      item.property = item.name;
    }

    if ((item.name || item.property) && !item.hid) {
      item.hid = item.name || item.property;
    }

    return item;
  });
}

export default {
  title: 'Reinaldy Rafli - Code',
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
    {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'},
    {rel: 'icon', type: 'image/png', href: 'favicon.png'},
    {rel: 'icon', type: 'image/svg', href: 'favicon.svg'},
  ],
  script: [
    {src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "2a03659d407a47e282375a70a91bdfc4"}', defer: true},
  ],
  meta: [
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ...prepareMeta(),
  ],
};
