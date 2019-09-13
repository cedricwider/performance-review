<template>
  <div class="welcome">
    <div class="hero">
      <div class="hero-body">
        <h3 class="title is-3">Welcome</h3>
        <p>
          <div>Sit sapiente maxime voluptates amet laudantium? Quo accusantium neque porro doloremque eum Ipsam quae doloribus molestiae error perferendis Magni quidem eos molestiae nulla ullam! Recusandae est fugiat cum facilis hic.</div>
        </p>
        <div class="flex-right">
          <nuxt-link id='start-button' class='button is-primary is-large' to='/reviews/name'>Let's go</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>

.flex-right {
  display: flex;
  justify-content: flex-end;
}

#start-button {
  margin-top: 2.5rem;
}
</style>
