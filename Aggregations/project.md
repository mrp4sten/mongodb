### Project for watch specific information

- Based in the Exersice lookup

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

3. Project

```json
{
  "cast": 1,
  "movies": 1
}
```
