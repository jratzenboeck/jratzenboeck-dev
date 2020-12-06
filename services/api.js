async function get(context, route, params = {}) {
  params.version =
    context.query._storyblok || context.isDev ? 'draft' : 'published'
  const { data } = await context.app.$storyapi.get(
    `cdn/stories${route}`,
    params
  )
  return data
}

function sync(storyblokBridge, story) {
  storyblokBridge.on(['input', 'published', 'change'], (event) => {
    if (event.action === 'input') {
      if (event.story.id === story.id) {
        story.content = event.story.content
      }
    } else {
      window.location.reload()
    }
  })
}

export { get, sync }
