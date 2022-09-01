### Exersice using Lookup and Match

- Find all the infomration of the movies where Tom Hanks is in the cast

1. Match

```json
{
  "cast.name": "Tom Hanks"
}
```

2. Lookup

```json
{
  "from": "movies_metadata",
  "localField": "id",
  "foreignField": "id",
  "as": "Film"
}
```
