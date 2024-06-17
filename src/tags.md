---
title: 'Tag Archive'
layout: 'layouts/feed.html'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'blog', 'work', 'platform', 'people', 'rss']
permalink: '/tag/{{ tag | slug }}/'
---