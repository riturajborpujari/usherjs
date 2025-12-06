# UsherJs
Controlled assignment of CSS class for your UI elements

## Usage
UsherJs only assigns CSS class based on your need. And it does things
imperatively. You tell when to change and Usherjs will do it.

Actual style / visibility change is in your able hands.

### ViewGroups
ViewGroups allow you to control assignment of a CSS class name between members
of the group.

Only one member is assigned the css class at a time.

This is helpful to create Tabs / Nav sections
```js
// register a ViewGroup to control 3 views
Usher.ViewGroup.Register(
    "mainView",                         // an identifier for the group
    ["#view-1", "#view-2", "#view-3"],  // member element IDs
    "shown",                            // class to assign when active
    "#view-1"                           // initial active member (optional)
);

// change active view
Usher.ViewGroup.Select("mainView", "#view-2");
```

### Toggles
Toggles allow you to set / unset (toggle) a CSS class for a particular element.

This is helpful for creating stuff like dropdowns / accordions etc.

```js
// register a toggle on the element `#expandable-1`
Usher.Toggle.Register(
    "see-more",         // an identifier for the toggle
    "#expandable-1",    // the ID of the element
    "expanded",         // class to assign when set
    false               // initial status (reset / false)
)

// change its status
Usher.Toggle.Toggle("see-more");
```
