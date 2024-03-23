# Icons


## How does it work?
Icons are saved in the `icons.json` file. Each key in the json file is the name of a icon. The value of each key contains the value of the attribute in of the d path.

[IMPORTANT]: All ui icons are created within 16x16 canvas. This is why the viewbox is `0 0 16 16`. The viewbox can be changed with a prop though.

### Example:

```
{
  "arrow-down" : "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
}
```

will render:


```
<svg viewBox="0 0 16 16">
  <path 
    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
  />
</svg>
```


## How to add new icons
To add new icons, create an icon in a 16x16 frame. Merge all shapes and paths in one single path with one `d attribute`. Copy the value of the d attribute and paste this in `icons.json` file with a new unique name. Use the new icon by passing the new name in the icon prop of the component:

```
<AIcon icon="new-name" />
```

## All icons

To see an overview of all the icons currently added, run the command below to see the overview in storybook.

```
npm run storybook
```