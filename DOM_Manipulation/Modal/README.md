# Modal
## CSS
- different ** width ** properties based on the content, like min-content, max-content and the best of both worlds * fit-content *, these properties can be used for box-sizing and grid column sizing.
- transform has different functions, they are mainly used for animations.
- I am skipping animation for now
---
## Javascript

1.  Difference between document.addEventListener and window.addEventListener?
The document and window are different objects and they have some different events. Using addEventListener() on them listens to events destined for a different object. You should use the one that actually has the event you are interested in.

For example, there is a "resize" event on the window object that is not on the document object.

For example, the "readystatechange" event is only on the document object.

So basically, you need to know which object receives the event you are interested in and use .addEventListener() on that particular object.

2. Second Item
---

## About mark down
> blockquote
[title](https://www.example.com)
![alt text](image.jpg)
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text | 

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
``` 

### My Great Heading {#custom-id}

term
: definition 
I need to highlight these ==very important words==.