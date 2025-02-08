```javascript
// Incorrect usage of $inc operator within a findAndUpdate operation
db.collection('myCollection').findOneAndUpdate({
  _id: ObjectId('6531a7e855273c22696a5678')
}, {
  $inc: {
    counter: 1 // Should be a numeric value
  }
});
```