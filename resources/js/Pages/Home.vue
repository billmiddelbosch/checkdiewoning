
<template>
  <div class="main" style="position: absolute">
    <div class="flex-column flex-grid--full">
      <div id="verkopen" class="wrapper">
        <div class="text-center wrapper">
          <h2>Weten wat een woning kost?</h2>
          <h3 class="text-tertiary">Jouw huis - onze kennis - verkocht!!</h3>
        </div>
        <div class="text-center">

          <a class="btn btn-orange" href="home">ZOEK</a>

        </div>
      </div>
      <div class="wrapper bg--grey">
        <div class="text-center">
          <h2>Nieuwsgierig?</h2>
          <h3 class="text-tertiary">Tijd om verder te praten</h3>
        </div>
      </div>
      <div id="kopen" class="wrapper">
        <div class="text-center wrapper">
          <h2 class="text-center">Je huis met iSalu kopen</h2>
          <h3 class="text-tertiary">Jouw droomhuis - onze kennis - gekocht!</h3>
        </div>
        <div class="text-center">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
  props: {
  }
};

</script>
<style scoped>
h2 {
  font-size: 44px;
  font-weight: 300;
  text-transform: uppercase;
}

h3 {
  font-size: 26px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 32px;
}

h4 {
  font-weight: bold;
}

.wrapper {
  padding: 64px 0;
}

@media (min-width: 240px) and (max-width: 720px) {
  h2 {
    font-size: 36px;
    margin-bottom: 32px;
  }

  h3 {
    font-size: 20px;
  }

  .wrapper {
    padding-bottom: 32px;
  }
}
</style>
