<script lang="ts" setup>
  import { openWindow } from '@/services/opener'
  import { APP_META } from '@/config'

  const props = defineProps<{
    repository: string
  }>()

  const handleShare = () => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(document.title || APP_META.title)
    const tweetURL = `https://twitter.com/intent/tweet?url=${url}&text=${title}`
    openWindow(tweetURL, { name: `Share: ${props.repository}` })
  }
</script>

<template>
  <div id="share">
    <button class="share-button" title="Share to Twitter" @click="handleShare">
      <i class="iconfont icon-twitter-x"></i>
      <span class="text">Tweet</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  @media screen and (max-width: $container-width) {
    #share {
      display: none !important;
    }
  }

  #share {
    position: fixed;
    z-index: 9;
    left: 0;
    bottom: 10rem;

    .share-button {
      width: 28px;
      height: auto;
      margin: 0;
      padding: $sm-gap 0;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      user-select: none;
      border: 1px solid $body-bg;
      border-left: none;
      border-top-right-radius: $lg-radius;
      border-bottom-right-radius: $lg-radius;
      color: $link-color;
      background-color: $banner-bg;
      transition:
        background-color $transition-time,
        color $transition-time;
      &:hover {
        color: $white;
        background-color: $twitter-x-primary;
      }

      .iconfont {
        font-size: $font-size-base;
        margin-bottom: $xs-gap;
      }

      .text {
        font-size: $font-size-small - 2;
        letter-spacing: 2.8px;
        font-weight: bold;
        writing-mode: vertical-lr;
        text-transform: uppercase;
      }
    }
  }
</style>
