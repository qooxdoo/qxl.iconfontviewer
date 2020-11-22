/**
 * shows all the icons aviable in the current qooxdoo appliaction
 */

/* global document */

qx.Class.define("qxl.iconfontviewer.Application", {
  extend: qx.application.Standalone,

  members: {
    main: function () {
      this.base(arguments);
      let copy = document.createElement("input");
      document.body.appendChild(copy);
      // Document is the application root
      let iconDb = {};
      for (let key in qx.$$resources) {
        let re = key.match(/^@([^/]+)\/([^/]+)/);
        if (!re) {
          continue;
        }
        if (!iconDb[re[1]]) {
          iconDb[re[1]] = [];
        }
        iconDb[re[1]].push({
          handle: key,
          name: re[2]
        });
      }

      var doc = this.getRoot();
      let tabView = new qx.ui.tabview.TabView();
      doc.add(tabView, { edge: 0 });

      for (let font in iconDb) {
        let page = new qx.ui.tabview.Page(font);
        page.setLayout(new qx.ui.layout.Canvas());
        tabView.add(page);
        let scroll = new qx.ui.container.Scroll().set({
          padding: [20, 20, 20, 20]
        });
        page.add(scroll, { edge: 0 });
        let list = new qx.ui.container.Composite(new qx.ui.layout.Flow());
        scroll.add(list);
        qx.event.Timer.once(async function () {
          for (let item of iconDb[font]) {
            let img = new qx.ui.form.Button(null, item.handle + "/40").set({
              toolTipText: item.name + " - click to copy",
              minWidth: 80,
              minHeight: 80
            });
            img.addListener("click", function () {
              copy.value = item.handle;
              copy.select();
              document.execCommand("copy");
            }, this);
            list.add(img);
          }
        }, this, 100)
      }
    }
  }
});
