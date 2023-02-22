<template>
  <div class="bottom bg-white border-b border-gray-100">
      <div class="flex-grid">
          <div class="col-70 col-4 small">
              <ul>
                  <p class="text-bold"> Jumba </p>
                  <li> <a href="https://www.jumba.nl/over-jumba"> Over Jumba </a> </li>
                  <li> <a href="https://www.jumba.nl/financieel-adviseur"> Voor de adviseur </a> </li>
              </ul>
          </div>
          <div class="col-70 col-4 small">
              <ul>
                  <p class="text-bold"> Recent aanbod in</p>
              </ul>
          </div>
          <div class="col-70 col-4 small">
              <ul>
                  <p class="text-bold"> Blog </p>
              </ul>
          </div>
          <div class="col-70 col-4 small">
            <ul>
              <p class="text-bold"> Contact </p>
              <a
              href="https://wa.me/0031618801277"
              class="btn btn-blue-outlined"
              >appen</a>
              <a
              href="mailto:info@isalu.nl"
              class="btn btn-orange-outlined"
              >mailen</a>
            </ul>
            <ul>
              <img class="col-2" src="@/../assets/Jumba logo-klein.png">             
            </ul>
          </div>
          <div class="line"></div>
          <div class="col-70 text-center small">
            <a class="margin" href="https://s3-eu-west-1.amazonaws.com/isalu-artifacts/isalu.pdf" target="_blank"> iSalu brochure </a>
            <a> <router-link :to="{name: 'Algemene voorwaarden'}" target='_blank'> Algemene voorwaarden </router-link> </a>
            <a class="margin" href="https://isalu-property-docs.s3-eu-west-1.amazonaws.com/Default_Docs/Opdracht+tot+dienstverlening+iSalu.pdf"> Verkoopovereenkomst </a>
            <a> <router-link :to="{name: 'Over ons'}"> © 2022 iSalu </router-link> </a>
          </div>
          <Share />
      </div>
  </div>
</template>

<script>

export default {
  name: "Footer",
  components: {
  },
  computed: {
  }
};
</script>

<style scoped>
.bottom {
  padding: 46px 46px 32px 46px;
}
.margin {
  margin-left: 4%;
  margin-right: 4%;
}
.line{
  border: 0.5px inset #000;
  width: 100%;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 1%;
}
.line {
  font-size: 12px;
}
ul {
  padding: 0 20px;
}
ul img{
  height: 30px;
}
li {
  margin-top: 10px;
}
li :first-child{
  margin-top: 200px; 
}
.btn-blue-outlined,
.btn-orange-outlined {
  padding: 7px 12px;
  margin-bottom: 15px;
}

@media (max-width: 720px) and (min-width: 240px) {
  ul {
    padding: unset;
  }
  .bottom {
    padding: 23px 23px 16px 23px;
  }
}

</style>