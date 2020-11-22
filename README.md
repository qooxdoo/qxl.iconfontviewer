# Qooxdoo Icon Font Viewer

This is the Icon Font Viewer package for Qooxdoo, which you can use to show all
Icon Fonts which are registered in the resources

## Online version (qx namespace)


## Adding an API viewer for your own code
```
$ qx pkg update
$ qx pkg install qooxdoo/qxl.iconfontviewer
$ qx serve -S
```

Then open [http://localhost:8080](http://localhost:8080).  You
will see that you now have a new application listed,
the "Icon Font Viewer", that you can click on the link to run it.

## Environment variables

You can control the behavior of the Icon Font Viewer via settings in the "include"
map in `compile.json`:

```json5
      "include": [
         "qx.theme.iconfont.LoadMaterialIcons",
         "qx.theme.iconfont.LoadMaterialIconsOutlined",
         "qx.theme.iconfont.LoadMaterialIconsRound",
         "qx.theme.iconfont.LoadMaterialIconsSharp",
         "qx.theme.iconfont.LoadMaterialIconsTwoTone"
      ]
``` 


## Developing Icon Font Viewer

Clone this repo and compile it:

```bash
$ git clone https://github.com/qooxdoo/qxl.iconfontviewer
$ cd qxl.iconfontviewer
$ npm install --no-save --no-package-lock @qooxdoo/compiler
$ npx qx serve
```


