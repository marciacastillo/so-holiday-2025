const body = document.querySelector("body");

// Inicializamos el modal globalmente
const modal = new tingle.modal({
  closeMethods: ["overlay", "button", "escape"],
  closeLabel: "Cerrar",
  cssClass: ["modal"],
  onClose: function () {
    body.classList.remove("popup-opened");
    const iframes = document.querySelectorAll('.tingle-modal iframe');
    iframes.forEach((iframe) => {
      const src = iframe.src; 
      iframe.src = ''; 
      iframe.src = src;
    });
  },
});

function openModal1(content) {
  body.classList.add("popup-opened");
  modal.setContent(/*html*/ `
        <h2>
          Climate Connections at the Ice-Sea Interface
        </h2>
        <h3>
          10 January - 13 February 2025
        </h3>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/zes9sSfhcw4" title="Holiday Card - FKt240108" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>During the #AntarcticClimateConnections expedition, scientists explored a seafloor area newly exposed by iceberg A-84 and discovered vibrant communities of ancient sponges and corals. They also encountered awe-inspiring beauties like this galaxy siphonophore.</p>
        `);
  modal.open();
}

function openModal2() {
  body.classList.add("popup-opened");
  modal.setContent(/*html*/ `
        <h2>
          Searching for New Species in the South Sandwich Islands
        </h2>
        <h3>
          20 February - 26 March 2025 
        </h3>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/SbcAuVwDUBs" title="Holiday Card - FKt240224 Strawberry Squid" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>One hundred years after its discovery, we were excited to see the first footage of a juvenile colossal squid filmed alive in its environment in the waters at a depth of 600 meters off #SouthSandwichIslands on this Ocean Census flagship expedition.</p>
        `);
  modal.open();
}

function openModal3(content) {
  
  body.classList.add("popup-opened");
  modal.setContent(/*html*/ `
        <h2>
          Underwater Oases of the Mar del Plata Canyon
        </h2>
        <h3>
          23 July - 12 August 2025
        </h3>
        <div class="video">
        <iframe src="https://www.youtube.com/embed/VOyz8EWAI2U" title="Holiday Card - FKt240224 Instrument plunge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>During the #MarDelPlataCanyon expedition, footage of a comb jelly, paired with an excerpt from an Argentine epic poem — “I must sing my own song. / For me the earth is small / And could far larger be” — elicited an outpouring of awe from Argentina for the animals, previously unknown and unseen, living offshore. </p>
        `);
  modal.open();
}

function openModal4(content) {
  body.classList.add("popup-opened");
  modal.setContent(/*html*/ `
        <h2>
          Visualizing the Deep off Uruguay
        </h2>
        <h3>
          22 August - 19 September 2025
        </h3>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/3wpu8FJijTg" title="Holiday Card - FKt240524 Munnopsid isopod" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>During the #UruguaySub200 expedition, scientists discovered bustling fields of deep coral reefs and at least 30 potential new species, and they visited the wreck of the ROU Uruguay for the first time. </p>
        `);
  modal.open();
}

function openModal5(content) {
  body.classList.add("popup-opened");
  modal.setContent(/*html*/ `
        <h2>
          A Tale of Two Canyons
        </h2>
        <h3>
          30 September - 29 October 2025
        </h3>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/50obQP5r_1Q" title="Holiday Card - FKt240708 Corals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>While ROV SuBastian was flying over one of the two underwater canyons being studied during the #Taleof2Canyons expedition, pilots filmed this gorgeous octopus hanging out in a field of brittle stars at 186 meters. Hovering over a patch of sediment, lighter in color than the surrounding area, the cephalopod opened up like an umbrella to feed, likely on a crustacean.</p>
        `);
  modal.open();
}

function openModal6(content) {
  body.classList.add("popup-opened");
  modal.setContent(/*html*/ `
        <h2>
          Searching for the Asgards
        </h2>
        <h3>
          13 November - 3 December 2025
        </h3>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/wypzJ5d5PUg" title="Holiday Card - FKt240802 Fire &amp; Ice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>The international team of #AsgardArchaea scientists sampled water and sediment (collected via pushcores, as seen in this video) from the mouth of the Rio de la Plata out to the continental shelf of Uruguay, sequencing the DNA held within each sample. Their goal: to detect Asgards, a group of single-celled organisms and our closest microbial relatives on the tree of life.</p>
        `);
  modal.open();
}

function openModal7(content) {
  body.classList.add("popup-opened");
  modal.setContent(/*html*/ `
        <h2>
          Life in Extremes — Cold Seeps of Argentina
        </h2>
        <h3>
          14 December 2025 - 10 January 2026
        </h3>
        <div class="video">
        <iframe src="https://www.youtube.com/embed/TrskfvvTuZw" title="FKt241011 - Glitter Polychaete" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>The #ArgentinianDeepSeeps exploration in pursuit of deep water cold seeps and understudied benthic communities off Argentina is now underway! Follow the expedition, which concludes in mid-January, via the Schmidt Ocean Institute <a href="https://www.youtube.com/@SchmidtOcean" target="_blank">YouTube Channel</a> and visit the <a href="https://schmidtocean.org/cruises/" target="_blank">website to learn more</a>. </p>
      `);
  modal.open();
}
