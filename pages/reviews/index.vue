<template>
  <div class="welcome">
    <div class="hero">
      <div class="hero-body">
        <h3 class="title is-3">Welcome</h3>
        <p>Here you can enter your version of the performance review.</p>
        <p>The results will be transmitted to your teamlead after you're done.</p>
        <p>Your teamlead will fill out the same form for you. This way both parties can have their oppinion.</p>
        <p>Finally you're going to sit together and discuss your versions.</p>
        <div class="flex-right">
          <nuxt-link id="start-button" class="button is-primary is-large" to="/reviews/name">Let's go</nuxt-link>
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
