```javascript
// Correct usage of $inc operator
db.collection('myCollection').findOneAndUpdate({
  _id: ObjectId('6531a7e855273c22696a5678')
}, {
  $inc: {
    counter: 1 // Numeric value
  }
});
```