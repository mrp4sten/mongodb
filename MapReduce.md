## Get the AVG from ratings

### Map() & Reduce()

- map function

```js
function() {
  emit(this.movieId, this.rating);
}
```

- reduce function

```js
function(key, values) {
  let sumRatings = 0;
  for(let i = 0; i < values.length; i++) {
    sumRatings += values[i];
  }

  return sumRatings/values.length;
}
```

### Aggregation

- Is more simple

```json
{
  "_id": "$movieId",
  "rating": {
    "$avg": "$rating"
  }
}
```
