# Learning Notes

## Pseudo-classes and pseudo-elements

### Explain [CSS Arrow Please](https://cssarrowplease.com/)

a) Start with an element that has no width or height:
```javascript
cssCopy.triangle {
  width: 0;
  height: 0;
}
```

b) Add a thick border to all sides:
```javascript
cssCopy.triangle {
  width: 0;
  height: 0;
  border: 50px solid;
}
```
At this point, you'd see a square shape formed by the four borders meeting.

c) Make three of the borders transparent, leaving only one visible:
```javascript
cssCopy.triangle {
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-bottom-color: black;
}
```
Now you have a triangle pointing upwards!

