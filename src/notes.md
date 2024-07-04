---
header: "Latest Notes"
# summary: ""
layout: 'layouts/feed.html'
pagination:
  data: collections.notes
  size: 9
permalink: '/notes{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---
