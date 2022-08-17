### Projections

- For filter the attributes that MongoDb returns

> Query

```json
{
	"original_title": "Toy Story"
}
```

> Projection

```json
{
	"original_title": 1 // or 0 for don't see
}
```

### Sort

- To sort results

> Projection

```json
{
	"original_title": 1, // or 0 for don't see
	"budget": 1
}
```

> Sort

```json
{
	"budget": 1 // or -1
}
```
