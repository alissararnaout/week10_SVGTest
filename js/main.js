(() => {
    // try to get the object and do stuff with it

    const waypoint = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view
        element: document.getElementById('section2'),
        // what should we do when we hit the waypoint?
        // can trigger animation, do AJAX call, etc.
        handler: function(direction) {
          console.log('Scrolled to waypoint!')
          this.element.innerHTML += `<p>Added this with Waypoint! We are scrolling $(direction)</p>`;
        }
      })


      const waypoint2 = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view

        element: document.getElementById('section3'),
        // what should we do when we hit the waypoint?
        // can trigger animation, do AJAX call, etc.
        handler: function(direction) {
          console.log('Scrolled to waypoint 2!')
        },

        offset: 200
      })

    const svgGraphic = document.querySelector (".svg-wrapper");

    svgGraphic.addEventListener("click", () => {
    console.log(this);
    })
})();