### Unwind

- Based in the Exersice Project

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
  "as": "movies"
}
```

3. Unwind

```json
{
  "path": "$movies"
}
```

4. Project

```json
{
  "movieTitle": "$movies.original_title"
}
```
