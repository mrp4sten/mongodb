# Operators

- $eq **(equals)**
- $gt **(greater than)**
- $gte **(greater than equals)**
- $in **(contains)**
- $lt **(less than)**
- $lte **(less than equals)**
- $ne **(not equal)**
- $nin **(no contains)**

## Comparisions with Arrays

- The attribute is not an array:
  > original_language: es, en, fr... -> be one of these: ['es', 'fr']

```json
{
	"original_language": {
		"$in": ["es", "fr"]
	}
}
```

- The attribute is an array
  > genres: Animation & Adventure

```json
{
	"genres": {
		"$in": [
			{
				"id": 16,
				"name": "Animation"
			},
			{
				"id": 12,
				"name": "Adventure"
			}
		]
	}
}
```

# Exercise

- Movies produced by Warner Bros. or 20th Century Fox:

  > name: Warner Bros.

  > id: 6194

  > name: Twentieth Century Fox Film Corporation

  > id: 306

- Movies whose vote_average are greater than 8

```json
{
	"production_companies": {
		"$in": [
			{
				"name": "Warner Bros.",
				"id": 6194
			},
			{
				"name": "Twentieth Century Fox Film Corporation",
				"id": 306
			}
		]
	},
	"vote_average": {
		"$gt": 8
	}
}
```
