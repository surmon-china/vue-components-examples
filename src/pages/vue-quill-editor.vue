<script lang="ts" setup>
  import { PROJECTS } from '@/config'
  import { useSeoMeta } from '@unhead/vue'
  import { getPageURL, getLegacyPageURL, getGitHubOpenGraphImageURL } from '@/transforms/url'
  import { getMetaTitle, getMetaKeywords, getMetaDescription, normalizeSeoMetaObject } from '@/transforms/meta'
  import IframeRenderer from '@/components/renderer/iframe.vue'

  const { repository, route } = PROJECTS.VueQuillEditor

  useSeoMeta(
    normalizeSeoMetaObject({
      title: getMetaTitle(repository),
      keywords: getMetaKeywords(repository).join(','),
      description: getMetaDescription(repository),
      ogUrl: getPageURL(route),
      ogImage: getGitHubOpenGraphImageURL(repository),
      ogImageWidth: 1200,
      ogImageHeight: 600
    })
  )
</script>

<template>
  <iframe-renderer :repository="repository" :src="getLegacyPageURL(repository)" legacy />
</template>
